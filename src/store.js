import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './api/auth';
import HTTP from './api/http';
import Storage from './api/storage';
import Password from './domain/password';

Vue.use(Vuex);

const storage = new Storage();
const auth = new Auth(storage);
const PasswordsAPI = new HTTP('passwords', storage);

const defaultPassword = {
    id: '',
    site: '',
    login: '',
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
    length: 12,
    counter: 1
};
function getDefaultPasswordProfile(version) {
    if (version === 1) {
        return Object.assign({}, defaultPassword, {version: 1, length: 12});
    }
    if (version === 2) {
        return Object.assign({}, defaultPassword, {version: 2, length: 16});
    }
}

const versionLoadedByDefault = 1;
const state = {
    authenticated: auth.isAuthenticated(),
    email: '',
    passwordStatus: 'CLEAN',
    passwords: [],
    baseURL: 'https://lesspass.com',
    password: getDefaultPasswordProfile(versionLoadedByDefault),
    version: versionLoadedByDefault
};

const mutations = {
    LOGOUT(state){
        state.authenticated = false;
    },
    USER_AUTHENTICATED(state, user){
        state.authenticated = true;
        state.email = user.email;
    },
    SET_PASSWORDS(state, passwords){
        state.passwords = passwords;
    },
    SET_PASSWORD(state, {password}){
        state.password = password;
    },
    DELETE_PASSWORD(state, {id}){
        var passwords = state.passwords;
        state.passwords = passwords.filter(password => {
            return password.id !== id;
        });

        if (state.password.id === id) {
            state.password = state.defaultPassword;
        }
    },
    PASSWORD_CLEAN(state){
        setTimeout(()=> {
            state.passwordStatus = 'CLEAN';
        }, 5000);
    },
    CHANGE_PASSWORD_STATUS(state, status){
        state.passwordStatus = status;
    },
    SET_DEFAULT_PASSWORD(state){
        state.password = Object.assign({}, defaultPassword)
    },
    UPDATE_SITE(state, {site}){
        state.password.site = site
    },
    UPDATE_BASE_URL(state, {baseURL}){
        state.baseURL = baseURL
    },
    UPDATE_EMAIL(state, {email}){
        state.email = email
    },
    CHANGE_VERSION(state, {version}){
        state.password = getDefaultPasswordProfile(version);
        state.version = version;
        storage.save({version});
    },
};

const actions = {
    USER_AUTHENTICATED: ({commit}, user) => commit('USER_AUTHENTICATED', user),
    LOGOUT: ({commit}) => {
        auth.logout();
        commit('LOGOUT');
    },
    SAVE_OR_UPDATE_PASSWORD: ({commit, state, dispatch}) => {
        const password = new Password(state.password);

        if (password.isNewPassword(state.passwords)) {
            PasswordsAPI.create(password.json()).then(() => {
                commit('CHANGE_PASSWORD_STATUS', 'CREATED');
                commit('PASSWORD_CLEAN');
                dispatch('FETCH_PASSWORDS');
            })
        } else {
            PasswordsAPI.update(password.json()).then(() => {
                commit('CHANGE_PASSWORD_STATUS', 'UPDATED');
                commit('PASSWORD_CLEAN');
                dispatch('FETCH_PASSWORDS');
            })
        }
    },
    REFRESH_TOKEN: ({commit}) => {
        if (auth.isAuthenticated()) {
            auth.refreshToken().catch(() => {
                commit('LOGOUT');
            });
        }
    },
    PASSWORD_CHANGE({commit}, {password}){
        commit('SET_PASSWORD', {password});
    },
    PASSWORD_GENERATED: ({commit}) => {
        commit('CHANGE_PASSWORD_STATUS', 'DIRTY');
    },
    FETCH_PASSWORDS: ({commit}) => {
        if (auth.isAuthenticated()) {
            PasswordsAPI.all().then(response => commit('SET_PASSWORDS', response.data.results));
        }
    },
    FETCH_PASSWORD: ({commit}, {id}) => {
        PasswordsAPI.get({id}).then(response => commit('SET_PASSWORD', {password: response.data}));
    },
    DELETE_PASSWORD: ({commit}, {id}) => {
        PasswordsAPI.remove({id}).then(()=> {
            commit('DELETE_PASSWORD', {id});
        });
    },
    LOAD_DEFAULT_PASSWORD: ({commit})=> {
        commit('SET_DEFAULT_PASSWORD');
    }
};

const getters = {
    passwords: state => state.passwords,
    password: state => state.password,
    isAuthenticated: state => state.authenticated,
    isGuest: state => !state.authenticated,
    passwordStatus: state => state.passwordStatus,
    email: state => state.email,
    version: state => state.version,
};

export default new Vuex.Store({
    state: Object.assign(state, storage.json()),
    getters,
    actions,
    mutations
});
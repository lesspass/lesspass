import * as types from './mutation-types'

export const saveDefaultOptions = ({commit}, payload) => {
    commit(types.SET_DEFAULT_OPTIONS, payload);
};
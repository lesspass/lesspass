<template>
    <div id="passwords">
        <div class="row">
            <div class="col">
                <div class="inner-addon left-addon">
                    <i class="fa fa-search"></i>
                    <input class="form-control" name="search" placeholder="Search" v-model="searchQuery">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <table class="table">
                    <tbody>
                    <tr v-for="password in filteredPasswords">
                        <td class="col-5">
                            <ul class="list-unstyled mb-0">
                                <li>
                                    <router-link :to="{ name: 'password', params: { id: password.id }}">
                                        {{password.site}}
                                    </router-link>
                                </li>
                                <li>
                                    {{password.login}}
                                </li>
                            </ul>
                        </td>
                        <td class="col-7 text-center">
                            <delete-button class="float-right mt-2"
                                           confirmText="Are you sure you want to delete this password profile?"
                                           confirmButton="Sure"
                                           cancelButton="Oups no!"
                                           v-on:remove="deletePassword(password)">
                            </delete-button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import DeleteButton from '../components/DeleteButton.vue';
    import {mapGetters} from 'vuex';

    function fetchPasswords(store) {
        return store.dispatch('FETCH_PASSWORDS')
    }

    export default {
        name: 'passwords-view',
        data(){
            return {
                searchQuery: ''
            }
        },
        components: {DeleteButton},
        computed: {
            ...mapGetters(['passwords', 'email']),
            filteredPasswords(){
                return this.passwords.filter(password => {
                    var loginMatch = password.login.match(new RegExp(this.searchQuery, 'i'));
                    var siteMatch = password.site.match(new RegExp(this.searchQuery, 'i'));
                    return loginMatch || siteMatch;
                })
            }
        },
        preFetch: fetchPasswords,
        beforeMount () {
            fetchPasswords(this.$store);
        },
        methods: {
            deletePassword(password){
                return this.$store.dispatch('DELETE_PASSWORD', {id: password.id});
            }
        }
    }
</script>

<style>
    #passwords {
        max-height: 320px;
        overflow-y: scroll;
        overflow-x: hidden;
    }
</style>
<template>
    <div>
        <form>
            <div class="form-group row">
                <div class="col-sm-7">
                    <div class="inner-addon left-addon">
                        <i class="fa fa-search"></i>
                        <input class="form-control" name="search" placeholder="Search" v-model="searchQuery">
                    </div>
                </div>
            </div>
        </form>
        <div id="passwords" class="row">
            <div class="col-xs-12">
                <table class="table">
                    <tbody>
                    <tr v-if="passwords.length === 0">
                        <td>
                            You don't have any passwords saved in your database.
                            <br>
                            <router-link :to="{ name: 'home'}">Would you like to create one ?</router-link>
                        </td>
                    </tr>
                    <tr v-for="password in passwords">
                        <td>
                            <router-link :to="{ name: 'password', params: { id: password.id }}">
                                {{password.site}}
                            </router-link>
                            <br>
                            {{password.login}}
                        </td>
                        <td class="text-xs-right">
                            <delete-button :action="deletePassword" :object="password"
                                           text="Are you sure you want to delete this password ?">
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
    import DeleteButton from '../components/DeleteButton';
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
                    return password.site.indexOf(this.searchQuery) > -1 || password.login.indexOf(this.searchQuery) > -1
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

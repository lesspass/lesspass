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
                <!--<div class="col-xs-5 text-xs-right">
                    <button class="btn btn-secondary">
                        <i class="fa fa-save"></i>
                        download
                    </button>
                </div>-->
            </div>
        </form>
        <div id="passwords" class="row" v-if="!loading">
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
                    <tr v-for="password in filteredPasswords">
                        <td>
                            <router-link :to="{ name: 'password', params: { passwordId: password.id }}">
                                {{password.site}}
                            </router-link>
                            <br>
                            {{password.login}}
                        </td>
                        <td class="text-xs-right">
                            <delete-button :promise="deletePassword" :object="password"
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
    import DeleteButton from './DeleteButton';
    import Storage from '../api/storage';
    import HTTP from '../api/http';

    const storage = new Storage();
    const Passwords = new HTTP('passwords', storage);

    export default {
        data(){
            return {
                passwords: [],
                loading: true,
                searchQuery: ''
            }
        },
        components: {
            DeleteButton
        },
        methods: {
            fetchPasswords(){
                Passwords.all().then(response => {
                    this.passwords = response.data.results;
                    this.loading = false;
                });
            },
            deletePassword(password){
                return Passwords.remove({id: password.id}).then(() => {
                    this.fetchPasswords();
                });
            }
        },
        computed: {
            filteredPasswords(){
                return this.passwords.filter(password => {
                    return password.site.indexOf(this.searchQuery) > -1 || password.login.indexOf(this.searchQuery) > -1
                })
            }
        },
        created: function () {
            this.fetchPasswords();
        }
    }
</script>

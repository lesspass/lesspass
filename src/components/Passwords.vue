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
                <div class="col-xs-12" v-if="passwords.length === 0">
                    You don't have any passwords saved in your database.
                    <br>
                    <router-link :to="{ name: 'home'}">Would you like to create one ?</router-link>
                </div>
                <router-link class="list-group-item list-group-item-action"
                             :to="{ name: 'password', params: { passwordId: password.id }}"
                             v-for="password in filteredPasswords">
                    <h5 class="list-group-item-heading">{{password.site}}</h5>
                    <p class="list-group-item-text">{{password.login}}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
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
        methods: {
            fetchPasswords(){
                Passwords.all().then(response => {
                    this.passwords = response.data.results;
                    this.loading = false;
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

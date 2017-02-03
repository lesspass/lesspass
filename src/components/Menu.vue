<style>
    .white-link, .text-white {
        color: white;
    }

    .white-link:hover, .white-link:focus, .white-link:active {
        text-decoration: none;
        color: white;
    }

    .fa-clickable {
        cursor: pointer;
    }
</style>
<template>
    <div id="menu">
        <div class="card-header" v-bind:class="{ 'card-warning': version===1, 'card-primary': version===2 }">
            <div class="row">
                <div class="col-4">
                    <a href="/" v-on:click="fullReload()" class="white-link">LessPass</a>
                </div>
                <div class="col-8 text-right">
                    <span class="text-white" v-if="saved && isAuthenticated">
                       <small><i class="fa fa-lg fa-check pl-3" aria-hidden="true"></i> saved</small>
                    </span>
                    <span v-on:click="saveOrUpdatePassword" class="white-link" v-if="!save && isAuthenticated">
                        <i class="fa fa-lg fa-save fa-clickable"></i>
                    </span>
                    <router-link class="white-link pl-3" :to="{ name: 'configureOptions'}">
                        <i class="fa fa-lg fa-cog" aria-hidden="true"></i>
                    </router-link>
                    <router-link class="white-link pl-3" :to="{ name: 'passwords'}" v-if="isAuthenticated">
                        <i class="fa  fa-lg fa-key" aria-hidden="true"></i>
                    </router-link>
                    <button class="white-link btn btn-link p-0 m-0 pl-3" type="button" v-if="isAuthenticated"
                            v-on:click="logout">
                        <i class="fa fa-lg fa-sign-out" aria-hidden="true"></i>
                    </button>
                    <router-link class="white-link pl-3" :to="{ name: 'login'}" v-if="isGuest">
                        <i class="fa fa-lg fa-user-secret fa-clickable" aria-hidden="true"></i>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import {mapGetters} from 'vuex';

    export default {
        data(){
            return {
                saved: false
            }
        },
        methods: {
            fullReload(){
                this.$store.dispatch('savePassword', {password: this.defaultPassword});
            },
            logout(){
                this.$store.dispatch('logout');
                this.$router.push({name: 'home'});
            },
            saveOrUpdatePassword(){
                this.$store.dispatch('saveOrUpdatePassword');
                this.saved = true;
                setTimeout(() => {
                    this.saved = false;
                }, 3000);
            }
        },
        computed: mapGetters([
            'isAuthenticated',
            'isGuest',
            'password',
            'defaultPassword',
            'version'
        ])
    }
</script>
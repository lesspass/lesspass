<style>
    .grey-link {
        color: #373a3c;
        text-decoration: none;
    }

    .grey-link:hover, .grey-link:focus, .grey-link:active {
        color: #373a3c;
        text-decoration: none;
    }

    .white-link {
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
        <div class="card-header" v-show="isAuthenticated">
            <div class="row">
                <div class="col-xs-6">
                    <router-link class="grey-link" :to="{ name: 'home'}">LessPass</router-link>
                    <span v-on:click="saveOrUpdatePassword">
                        <i class="fa fa-save ml-1 fa-clickable" v-if="passwordStatus=='DIRTY'"></i>
                    </span>
                    <span v-if="passwordStatus=='CREATED' || passwordStatus=='UPDATED'" class="text-success">
                        <i class="fa fa-check ml-1 text-success"></i>
                    </span>
                </div>
                <div class="col-xs-6 text-xs-right">
                    <router-link class="grey-link ml-1" :to="{ name: 'passwords'}">
                        <i class="fa fa-key" aria-hidden="true"></i>
                    </router-link>
                    <button class="grey-link ml-1 btn btn-link p-0 m-0" type="button" v-on:click="logout">
                        <i class="fa fa-sign-out" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="card-header" v-show="isGuest"
             v-bind:class="{ 'card-warning': version===1, 'card-primary': version===2 }">
            <div class="row">
                <div class="index-header">
                    <div class="col-xs-6">
                        <router-link class="white-link" :to="{ name: 'home'}">LessPass</router-link>
                    </div>
                    <div class="col-xs-6 text-xs-right">
                        <router-link class="white-link pl-1" :to="{ name: 'login'}">
                            <i class="fa fa-user-secret fa-clickable" aria-hidden="true"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import {mapGetters} from 'vuex';

    export default {
        methods: {
            logout(){
                this.$store.dispatch('LOGOUT');
                this.$router.push({name: 'home'});
            },
            saveOrUpdatePassword(){
                this.$store.dispatch('SAVE_OR_UPDATE_PASSWORD');
            }
        },
        computed: mapGetters([
            'isAuthenticated',
            'isGuest',
            'passwordStatus',
            'version'
        ])
    }
</script>
<style>
    .card-header-dark {
        background-color: #555;
        border-color: #555;
        color: #FFF;
    }

    .menu-link {
        color: #373a3c;
        text-decoration: none;
    }

    .menu-link:hover, .menu-link:focus, .menu-link:active {
        color: #373a3c;
        text-decoration: none;
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
                    <router-link class="menu-link" :to="{ name: 'home'}">LessPass</router-link>
                    <span class=" hint--right" aria-label="Save password"
                          v-on:click="saveOrUpdatePassword">
                        <i class="fa fa-save m-l-1 fa-clickable" v-if="passwordStatus=='DIRTY'"></i>
                    </span>
                    <span v-if="passwordStatus=='CREATED'" class="text-success">
                        <i class="fa fa-check m-l-1 text-success"></i> saved
                    </span>
                    <span v-if="passwordStatus=='UPDATED'" class="text-success">
                        <i class="fa fa-check m-l-1 text-success"></i> updated
                    </span>
                </div>
                <div class="col-xs-6 text-xs-right">
                    <div class="btn-group">
                        <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false" style="background-color:transparent; padding:0;">
                            {{email}}
                        </button>
                        <div class="dropdown-menu dropdown-menu-right">
                            <router-link class="dropdown-item" :to="{ name: 'passwords'}">Passwords</router-link>
                            <router-link class="dropdown-item" :to="{ name: 'help'}">Help</router-link>
                            <div class="dropdown-divider"></div>
                            <button class="dropdown-item" type="button" v-on:click="logout">Log out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-header card-header-dark" v-show="isGuest">
            <div class="row">
                <div class="index-header">
                    <div class="col-xs-6">
                        <router-link class="white-link" :to="{ name: 'home'}">LessPass</router-link>
                    </div>
                    <div class="col-xs-6 text-xs-right">
                        <router-link class="white-link" :to="{ name: 'login'}">
                            <i class="fa fa-user-secret white" aria-hidden="true"></i>
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
            'email',
            'passwordStatus'
        ])
    }
</script>
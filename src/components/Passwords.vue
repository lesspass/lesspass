<style scoped>
    #sites {
        max-height: 320px;
        overflow-y: scroll;
        overflow-x: hidden;
    }
</style>
<template>
    <div class="card-block">
        <form action="">
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
        <div id="sites">
            <a href="#" class="list-group-item list-group-item-action" v-for="password in filteredPasswords"
               v-on:click="setCurrentPasswordAndGoIndex(password)">
                <h5 class="list-group-item-heading">{{password.site}}</h5>
                <p class="list-group-item-text">{{password.login}}</p>
            </a>
        </div>
    </div>
</template>


<script type="text/ecmascript-6">
    import {mapGetters, mapActions} from 'vuex';

    export default {
        data(){
            return {
                searchQuery: ''
            }
        },
        computed: Object.assign(mapGetters(['passwords']), {
            filteredPasswords(){
                return this.passwords.filter(password => {
                    return password.site.indexOf(this.searchQuery) > -1 || password.login.indexOf(this.searchQuery) > -1
                })
            }
        }),

        methods: Object.assign(mapActions(['go']), {
            setCurrentPasswordAndGoIndex(password){
                this.$store.dispatch('setCurrentPassword', password);
                this.go('index');
            }
        }),
        created: function () {
            this.$store.dispatch('loadPasswords');
        }
    }
</script>

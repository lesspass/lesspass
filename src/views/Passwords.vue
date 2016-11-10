<template>
    <div>
        <form>
            <div class="form-group row">
                <div class="col-xs-12">
                    <div class="inner-addon left-addon">
                        <i class="fa fa-search"></i>
                        <input class="form-control" name="search" placeholder="Search" v-model="searchQuery">
                    </div>
                </div>
            </div>
        </form>
        <div id="passwords">
            <div class="row" v-for="password in filteredPasswords">
                <div class="col-xs-9">
                    <ul class="list-unstyled">
                        <li>
                            <router-link :to="{ name: 'password', params: { id: password.id }}">
                                {{password.site}}
                            </router-link>
                        </li>
                        <li>
                            {{password.login}}
                        </li>
                    </ul>
                </div>
                <div class="col-xs-3">
                    <delete-button class="float-xs-right"
                                   style="position: absolute; right: 1em;margin-top: 3px;"
                                   :action="deletePassword"
                                   :object="password"
                                   text="Are you sure you want to delete this password ?">
                    </delete-button>
                </div>
            </div>
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

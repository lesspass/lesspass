<style>
    .card:hover {
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.30);
        cursor: pointer;
    }
</style>
<template>
    <div id="index">
        <div class="container text-xs-center p-t-3">
            <div class="row">
                <div class="col-lg-6 ">
                    <div id="searchEntries bg-card-white">
                        <div class="input-group">
                        <span class="input-group-addon" id="search-addon">
                            <i class="fa fa-search"></i>
                        </span>
                            <input type="text" class="form-control" placeholder="search"
                                   aria-describedby="search-addon">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <new-entry></new-entry>
                </div>
            </div>
            <div class="row m-t-3">
                <div class="col-lg-12">
                    <div class="card-columns">
                        <div class="card card-block" v-for="entry in entries">
                            <blockquote class="card-blockquote">
                                <p>{{ entry.site }}</p>
                                <footer>
                                    <small class="text-muted">
                                        Email / Username : {{ entry.email }}
                                    </small>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import NewEntry from './Entries/newEntry.vue';
    import http from '../services/http';

    export default {
        data() {
            return {
                entries: [],
            };
        },
        components: {
            NewEntry,
        },
        ready(){
            http.entries.all(18, 0).then((entries) => {
                this.entries = entries.data.results;
                                console.table(entries.data.results)

            });
        },
    };
</script>
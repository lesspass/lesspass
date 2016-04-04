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
                            <input type="text" class="form-control" placeholder="search" v-model="search"
                                   aria-describedby="search-addon" @keyup="filterEntry(search) | debounce 500">
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
                        <div class="card card-block" v-for="entry in entries" @click="openEntry(entry)">
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
            <div class="row m-t-1">
                <div class="paginate">
                    <div class="col-sm-4 text-xs-left">
                        <button class="btn btn-primary btn-sm" v-if="count > limit"
                                :disabled="(currentPage*limit >= count)"
                                @click="getPreviousEntries()">
                            précédent
                        </button>
                    </div>
                    <div class="col-sm-4 text-xs-center">
                        {{ currentPage }} / {{ numberPages }}
                    </div>
                    <div class="col-sm-4 text-xs-right">
                        <button class="btn btn-primary btn-sm" v-if="count > limit"
                                :disabled="(currentPage===1)"
                                @click="getNextEntries()">
                            suivant
                        </button>
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
                limit: 18,
                offset: 0,
                currentPage: 1,
                entries: [],
                numberPages: 1,
                count: 0
            };
        },
        components: {
            NewEntry,
        },
        ready(){
            this.getEntries(this.limit, this.offset);
        },
        methods: {
            getEntries(limit, offset, search=''){
                http.entries.all(limit, offset, search).then((response) => {
                    this.entries = response.data.results;
                    this.count = response.data.count;
                    this.numberPages = Math.ceil(this.count / this.limit);
                })
            },
            getPreviousEntries() {
                this.currentPage += 1;
                this.offset = (this.currentPage - 1) * this.limit;
                this.getEntries(this.limit, this.offset);
            },
            getNextEntries() {
                this.currentPage -= 1;
                this.offset = (this.currentPage - 1) * this.limit;
                this.getEntries(this.limit, this.offset);
            },
            openEntry(entry){
                this.$router.go(`/app/entries/${entry.id}/`);
            },
            filterEntry(query){
                this.getEntries(this.limit, this.offset, query);
            }
        }
    };
</script>
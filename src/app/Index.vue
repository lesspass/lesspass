<style>
    .card:hover {
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.30);
        cursor: pointer;
    }

    .card .edit-icon {
        display: block;
        position: absolute;
        top: 10px;
        right: 10px;
    }

    @media (min-width: 480px) {
        .card .edit-icon {
            display: none;
        }

        .card:hover .edit-icon:hover {
            color: inherit;
        }

        .card:hover .edit-icon {
            display: block;
            position: absolute;
            top: 10px;
            right: 10px;
        }
    }
</style>
<template>
    <div id="index">
        <div class="container text-xs-center p-t-1">
            <div class="row">
                <div class="col-md-6 p-t-1">
                    <div id="searchEntries bg-card-white">
                        <div class="input-group">
                        <span class="input-group-addon" id="search-addon">
                            <i class="fa fa-search"></i>
                        </span>
                            <input type="text" class="form-control" placeholder="{{ $t('index.search') }}"
                                   v-model="search" aria-describedby="search-addon"
                                   @keyup="filterEntry(search) | debounce 500">
                        </div>
                    </div>
                </div>
                <div class="col-md-6 p-t-1">
                    <new-entry></new-entry>
                </div>
            </div>
            <div class="row m-t-2">
                <div class="col-lg-12">
                    <div class="card-columns">
                        <div class="card card-block" v-for="entry in entries"
                             @click="openOrCopy(entry)">
                            <i class="fa fa-pencil-square-o fa-lg edit-icon text-muted"
                                @click.stop="openEntry(entry)"></i>
                            <blockquote class="card-blockquote">
                                <p>{{ entry.site }}</p>
                                <footer>
                                    <small class="text-muted">
                                        {{ entry.login }}
                                    </small>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row m-t-1">
                <div class="paginate">
                    <div class="col-xs-4 text-xs-left">
                        <button class="btn btn-primary btn-sm" v-if="count > limit"
                                :disabled="(currentPage*limit >= count)"
                                @click="getPreviousEntries()">
                            {{ $t('index.previous') }}
                        </button>
                    </div>
                    <div class="col-xs-4 text-xs-center" v-if="numberPages > 1">
                        {{ currentPage }} / {{ numberPages }}
                    </div>
                    <div class="col-xs-4 text-xs-right">
                        <button class="btn btn-primary btn-sm" v-if="count > limit"
                                :disabled="(currentPage===1)"
                                @click="getNextEntries()">
                            {{ $t('index.next') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <copy-password-modal :entry="selectedEntry"></copy-password-modal>
    </div>
</template>
<script type="text/ecmascript-6">
    import 'bootstrap/dist/js/umd/modal';
    import NewEntry from './Entries/newEntry';
    import CopyPasswordModal from './Entries/CopyPassword';
    import http from '../services/http';
    export default {
        data() {
            return {
                limit: 18,
                offset: 0,
                currentPage: 1,
                entries: [],
                selectedEntry: null,
                numberPages: 1,
                count: 0,
                clicks: 0
            };
        },
        components: {
            NewEntry,
            CopyPasswordModal
        },
        ready(){
            this.getEntries(this.limit, this.offset);
        },
        methods: {
            getEntries(limit, offset, search = ''){
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
            copyPassword(entry){
                this.selectedEntry = entry;
                $('#copyPasswordModal').modal('show');
            },
            openEntry(entry){
                this.$router.go(`/app/entries/${entry.id}/`);
            },
            openOrCopy(entry){
                this.clicks++;
                if (this.clicks === 1) {
                    setTimeout(() => {
                        if (this.clicks === 1) {
                            this.copyPassword(entry);
                        } else {
                            this.openEntry(entry);
                        }
                        this.clicks = 0;
                    }, 500);
                }
            },
            filterEntry(query){
                this.getEntries(this.limit, this.offset, query);
            }
        }
    };
</script>
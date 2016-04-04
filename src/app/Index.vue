<style>
    .card:hover {
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.30);
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
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import NewEntry from './Entries/newEntry.vue';

    export default {
        components: {
            NewEntry,
        },
    };
</script>
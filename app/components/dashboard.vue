<template>
    <div class="container">
        <div class="row m-y-3">
            <div class="col-lg-12">
                <form>
                    <input class="form-control" id="search-input" placeholder="Search..." autocomplete="off"
                           type="text">
                    <div class="dropdown-menu bd-search-results" id="search-results"></div>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <ol>
                    <li v-for="entry in entries">
                        {{ entry.title }}
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                entries: []
            }
        }
    }
</script>

<template>
    entries
</template>

<script>
    export default {
        data: function () {
            return {
                entries: []
            }
        },
        methods: {
            getEntries() {
                console.log('make get resquest here');
                /*this.$http.get('http://localhost:3001/api/protected/random-quote', (data) => {
                 this.quote = data;
                 }, {
                 // Attach the JWT header
                 headers: auth.getAuthHeader()
                 })
                 .error((err) => console.log(err))*/
            }
        }
    }
</script>

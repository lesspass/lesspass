<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter, .fade-leave-to {
        opacity: 0
    }

    #message {
        position: absolute;
        top: 49px;
        left: 0;
        right: 0;
        z-index: 20;
    }
</style>
<template>
    <div id="message">
        <transition name="fade">
            <div v-if="message.text">
                <div class="card-header text-white"
                     v-bind:class="{ 'card-warning': message.status==='warning', 'card-danger': message.status==='error', 'card-success': message.status==='success' }">
                    <div class="row">
                        <div class="col-12">
                            <small>message</small>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script type="text/ecmascript-6">
    import {mapGetters} from 'vuex';

    export default {
        computed: mapGetters([
            'message'
        ])
    }
</script>
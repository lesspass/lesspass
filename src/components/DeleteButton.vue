<style>
    .fa-white {
        color: #ffffff;
    }

    #delete-button {
        position: relative;
    }

    .btn-progress:before {
        content: "";
        position: absolute;
        background: #D9534F;
        bottom: 0;
        left: 0;
        top: 80%;
        z-index: 1;
        animation: 2s progress;
    }

    @keyframes progress {
        0% {
            right: 100%;
        }
        100% {
            right: 0;
        }
    }
</style>
<template>
    <div id="delete-button">
        <button type="button" class="btn btn-danger"
                v-bind:class="{ 'btn-progress': progress}"
                v-on:mouseup="click"
                v-on:mousedown="start"
                v-on:mouseout="cancel">
            <i class="fa-white fa fa-trash fw"></i>
            {{ confirmHelp }}
        </button>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                progress: false,
                pressTimer: null,
                longPress: false,
                confirmHelp: ''
            }
        },
        props: {
            action: {type: Function, required: true},
            text: {type: String, required: true},
            object: {type: Object, required: true}
        },
        methods: {
            start(event){
                if (event.type === "click" && event.button !== 0) {
                    return;
                }
                this.longPress = false;
                this.progress = true;
                this.pressTimer = setTimeout(() => {
                    this.longPress = true;
                    this.deleteConfirmed();
                }, 2000);
                return false;
            },
            click(){
                if (this.longPress) {
                    return;
                }
                if (this.pressTimer !== null) {
                    clearTimeout(this.pressTimer);
                    this.pressTimer = null;
                }
                this.progress = false;
                this.confirmHelp = 'Long Press To Confirm';
            },
            cancel(){
                if (this.pressTimer !== null) {
                    clearTimeout(this.pressTimer);
                    this.pressTimer = null;
                    this.confirmHelp = '';
                }
                this.progress = false;
            },
            deleteConfirmed(){
                setTimeout(() => {
                    this.action(this.object);
                }, 1000);
            }
        }
    }
</script>

<style>
    #fingerprint {
        min-width: 90px;
        text-align: center;
        background-color: transparent;
        color: white;
    }

    #fingerprint i {
        color: black;
        position: relative;
        padding: 0;
        text-shadow: 1px 1px 0 white;
        font-size: 1.3em;
    }
</style>
<template>
    <span class="input-group-btn" v-if="fingerprint">
        <button id="fingerprint" class="btn" type="button" tabindex="-1">
            <small class="hint--left" aria-label="master password fingerprint">
                <i class="fa fa-fw" v-bind:class="[icon1]" v-bind:style="{ color: color1 }"></i>
                <i class="fa fa-fw" v-bind:class="[icon2]" v-bind:style="{ color: color2 }"></i>
                <i class="fa fa-fw" v-bind:class="[icon3]" v-bind:style="{ color: color3 }"></i>
            </small>
        </button>
    </span>
</template>

<script type="text/ecmascript-6">
    import LessPass from 'lesspass';

    export default {
        data(){
            return {
                icon1: '',
                icon2: '',
                icon3: '',
                color1: '',
                color2: '',
                color3: ''
            }
        },
        props: ['fingerprint'],
        watch: {
            fingerprint(newFingerprint) {
                if (!newFingerprint) {
                    return;
                }
                LessPass.createFingerprint(newFingerprint).then(sha256 => {
                    const hash1 = sha256.substring(0, 6);
                    const hash2 = sha256.substring(6, 12);
                    const hash3 = sha256.substring(12, 18);
                    this.icon1 = this.getIcon(hash1);
                    this.icon2 = this.getIcon(hash2);
                    this.icon3 = this.getIcon(hash3);
                    this.color1 = this.getColor(hash1);
                    this.color2 = this.getColor(hash2);
                    this.color3 = this.getColor(hash3);
                });
            }
        },
        methods: {
            getColor(color) {
                var colors = ['#000000', '#074750', '#009191', '#FF6CB6', '#FFB5DA', '#490092', '#006CDB', '#B66DFF', '#6DB5FE', '#B5DAFE', '#920000', '#924900', '#DB6D00', '#24FE23'];
                var index = parseInt(color, 16) % colors.length;
                return colors[index];
            },
            getIcon(hash) {
                var icons = ['fa-hashtag', 'fa-heart', 'fa-hotel', 'fa-university', 'fa-plug', 'fa-ambulance', 'fa-bus', 'fa-car', 'fa-plane', 'fa-rocket', 'fa-ship', 'fa-subway', 'fa-truck', 'fa-jpy', 'fa-eur', 'fa-btc', 'fa-usd', 'fa-gbp', 'fa-archive', 'fa-area-chart', 'fa-bed', 'fa-beer', 'fa-bell', 'fa-binoculars', 'fa-birthday-cake', 'fa-bomb', 'fa-briefcase', 'fa-bug', 'fa-camera', 'fa-cart-plus', 'fa-certificate', 'fa-coffee', 'fa-cloud', 'fa-coffee', 'fa-comment', 'fa-cube', 'fa-cutlery', 'fa-database', 'fa-diamond', 'fa-exclamation-circle', 'fa-eye', 'fa-flag', 'fa-flask', 'fa-futbol-o', 'fa-gamepad', 'fa-graduation-cap'];
                var index = parseInt(hash, 16) % icons.length;
                return icons[index];
            }
        }
    }
</script>

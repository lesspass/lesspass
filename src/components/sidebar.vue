<style scoped>
    .sidebar {
        z-index: 10;
        position: fixed;
        width: 100%;
        background-color: #424242;
        display: flex;
        justify-content: space-between;
        overflow: auto;
    }

    .sidebar-menu {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
    }

    .sidebar-item a {
        display: block;
        height: 64px;
        line-height: 64px;
        text-align: left;
        font-size: 32px;
        color: white;
        padding: 0 16px;
        text-decoration: none;
    }

    .sidebar-item span {
        display: none;
    }

    .sidebar-item.active,
    .sidebar-item:hover {
        background-color: #025aa5;
    }

    @media (min-width: 48em) {
        .sidebar {
            height: 100%;
            width: auto;
            flex-direction: column;
        }

        .sidebar-menu:first-child {
            margin-top: 1em;
        }

        .sidebar-menu:last-child {
            margin-bottom: 1em;
        }

        .sidebar-menu {
            display: block;
        }
    }
</style>
<template>
    <div class="sidebar">
        <ul class="sidebar-menu main">
            <li class="sidebar-item" v-link-active>
                <a v-link="{ path: '/entries/', activeClass: 'active' }" class="sidebar-link">
                    <i class="icon ion-ios-key-outline"></i>
                    <span>passwords</span>
                </a>
            </li>
                <li class="sidebar-item" v-link-active>
                <a v-link="{ path: '/help/', activeClass: 'active' }" class="sidebar-link">
                    <i class="icon ion-ios-help-circle-outline"></i>
                    <span>help</span>
                </a>
            </li>
        </ul>
        <ul class="sidebar-menu settings">
            <li class="sidebar-item" v-link-active>
                <a v-link="{ path: '/settings/', activeClass: 'active' }" class="sidebar-link">
                    <i class="icon ion-ios-settings-outline"></i>
                    <span>settings</span>
                </a>
            </li>
            <li class="sidebar-item">
                <a class="sidebar-link" @click.stop.prevent="logout()">
                    <i class="icon ion-ios-log-out-outline"></i>
                    <span>logout</span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script type="text/ecmascript-6">
    import auth from '../services/auth';
    import logging from '../services/logging';

    export default {
        methods: {
            logout(){
                auth.logout();
                logging.success('Thank you for spending quality time with LessPass');
                this.$router.go('/');
            }
        }
    }
</script>

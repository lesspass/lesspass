<template>
    <div class="container">
        <div class="col-lg-4">
            <a v-link="{ path: '/auth/login' }">login</a>
            <a v-link="{ path: '/auth/register' }">register</a>
        </div>
        <div class="col-lg-8">
            <router-view></router-view>
        </div>
    </div>
</template>

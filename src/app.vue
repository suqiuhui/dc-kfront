<template>
    <div id="app">
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/task">Task List</router-link>
        <router-link to="/about">About US</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                message: "Page App sasdasd"
            }
        }
    }
</script>

<style lang="scss" scoped="">
    #template {
        font-size: 14px;
    }
</style>


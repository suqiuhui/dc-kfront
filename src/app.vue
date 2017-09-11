<template>
    <div id="app">
        <div class="wrapper">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import home from './page/home.vue'
    export default {
        name: 'app',
        created () {
            if (localStorage.user)
                this.$store.state.user = JSON.parse(localStorage.user);
        },
        components: {
            home
        },
        beforeDestroy () {
            localStorage.clear();
            this.$store.dispatch('setUser', null);
        }
    }
</script>

<style lang="scss">
    body{
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
    }

</style>


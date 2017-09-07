<template>
    <div id="app">
        <v-header></v-header>
        <div class="content-wrapper">
            <home>
                <router-view></router-view>
            </home>
        </div>
    </div>
</template>

<script>
    import header from './components/header.vue'
    import home from './page/home.vue'
    export default {
        name: 'app',
        created () {
            if (localStorage.user)
                this.$store.state.user = JSON.parse(localStorage.user);
        },
        components: {
            vHeader: header,
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


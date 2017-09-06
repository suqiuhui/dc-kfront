<template>
    <div id="app">
        <v-header></v-header>

        <home>
            <router-view></router-view>
        </home>

        <div class="content-wrapper">
            <!--<router-view></router-view>-->
        </div>
    </div>
</template>

<script>
    import header from './components/header.vue'
    import home from './page/home.vue'
    export default {
        name: 'app',
        beforeCreate () {
            if (localStorage.user)
                this.$store.state.user = JSON.parse(localStorage.user)
        },
        created () {
            this.user = this.$store.state.user
        },
        data () {
            return {
                user: {}
            }
        },
        components: {
            vHeader: header,
            home
        },
        beforeDestroy () {
            localStorage.clear()
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
    .el-menu-demo{
        border-radius: 0;
    }
    #template {
        font-size: 14px;
    }
    .el-menu-item > a{
        display: inline-block;
    }

</style>


<template>
    <div class="page-wrapper">
        <v-header></v-header>
        <v-body>
            <router-view></router-view>
        </v-body>
        <!--<v-footer></v-footer>-->
    </div>
</template>

<script>
    import header from './../components/header.vue'
    import vBody from './../components/page-content.vue'
    export default {
        name: 'home',
        components: {
            vHeader: header,
            vBody: vBody
        }
    }
</script>

<style lang="scss" scoped="">
    .page-wrapper {
        font-size: 14px;
    }

</style>


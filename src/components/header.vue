<template>
    <div class="page-content">
        <div v-if="user.userName" id="header">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">

                <el-menu-item index="1">
                    <router-link to="/"><img class="platform-logo" src="./../img/favicon.png"></router-link>
                </el-menu-item>

                <el-menu-item index="2"><router-link to="/task">任务中心</router-link></el-menu-item>
                <el-submenu index="3">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item index="4"><router-link to="/personal">个人中心</router-link></el-menu-item>
                <el-menu-item index="5"><router-link to="/about">关于我们</router-link></el-menu-item>
            </el-menu>
        </div>
    </div>

</template>

<script>
    import home from './../page/home.vue'
    export default {
        name: 'header',
        created () {
            this.activeIndex = localStorage.activeIndex
        },
        data() {
            return {
                user: this.$store.state.user
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath)
                localStorage.activeIndex = key
            }
        },
        components: {
            home
        }
    }
</script>

<style lang="scss" scoped="">
    #header {
        font-size: 14px;
    }
</style>


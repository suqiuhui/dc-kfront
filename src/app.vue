<template>
    <div id="app">
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1" @click=""><router-link to="/">Home</router-link></el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3"><router-link to="/login">Login</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to="/task">Task List</router-link></el-menu-item>
        </el-menu>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        created () {
              this.activeIndex = localStorage.activeIndex
        },
        data() {
            return {
                message: "Page App sasdasd",
                activeIndex: '1'
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath)
                localStorage.activeIndex = key
            }
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


<template>
    <div class="header">
        <div v-if="user" class="login-header">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">

                <el-menu-item index="1">
                    <router-link to="/"><img class="platform-logo" src="./../img/favicon.png"></router-link>
                </el-menu-item>

                <el-menu-item index="2"><router-link to="/task">任务中心</router-link></el-menu-item>
                <el-submenu index="3">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1"><router-link to="/canvasTest">Canvas</router-link></el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item index="4"><router-link to="/personal">个人中心</router-link></el-menu-item>
                <el-menu-item index="5"><router-link to="/about">关于我们</router-link></el-menu-item>
            </el-menu>

            <div class="login-option">
                <ul>
                    <li>{{user.userName}}</li>
                    <router-link to="/contact" tag="li">
                        <a>联系我们</a>
                    </router-link>
                </ul>
            </div>
        </div>

        <div v-else class="no-login-header">
            <img class="platform-logo" src="./../img/favicon.png">
            <div class="no-login-option">
                <ul>
                    <router-link to="/login" tag="li" >
                        <a>登录</a>
                    </router-link>
                    <router-link to="/register" tag="li">
                        <a>注册</a>
                    </router-link>
                    <router-link to="/contact" tag="li">
                        <a>联系我们</a>
                    </router-link>
                </ul>
            </div>
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
            }
        },
        computed: {
            user () {
                return this.$store.getters.getUser
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
    .header {
        font-size: 14px;
    }

    .el-menu-demo{
        border-radius: 0;
    }
    .el-menu-item > a{
        display: inline-block;
    }

    .no-login-header {
        background-color: #eef1f6;
        height: 60px;
        line-height: 60px;
        * {
            vertical-align: middle;
        }
        .no-login-option {
            line-height: normal;
        }
    }

    .no-login-option, .login-option {
        position: absolute;
        top: 0;
        right: 0;
        li {
            list-style-type: none;
            display: inline-block;
        }
    }
</style>


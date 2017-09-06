<template>
    <div id="home">
        <slot>
        <div v-if="!user.userName" class="no-login-header">
            <img class="platform-logo" src="./../img/favicon.png">
            <ul class="no-login-option">
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

        <div v-else class="login-header">
            <ul class="login-option">
                <li>{{user.userName}}</li>
                <router-link to="/contact" tag="li">
                    <a>联系我们</a>
                </router-link>
            </ul>
        </div>
            <img class="home-page-bg" src="./../img/homepage.png">
        </slot>
    </div>
</template>

<script>
    export default {
        name: 'home',
        created () {
            console.log(this.user)
        },
        data () {
            return {
                user: this.$store.state.user
            }
        },
        methods: {
        },
        components: {

        }
    }
</script>

<style lang="scss" scoped="">
    #home {
        font-size: 14px;
        .home-page-bg {
            margin: auto 0;
            width: 100%;
        }
    }

    #home {
        .no-login-option, .login-option {
            position: absolute;
            top: 0;
            right: 0;
            li {
                list-style-type: none;
                display: inline-block;
            }
        }

    }
</style>


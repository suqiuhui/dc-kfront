<template>
    <el-row class="login-wrapper">
        <el-form ref="form">
            <el-form-item label="用户名:">
                <el-input v-model="formData.username" type="text" placeholder="请输入用户名" required>
                </el-input>
            </el-form-item>
            <el-form-item label="密码:">

                <el-input v-model="formData.password" type="password" placeholder="请输入密码" required>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
                <el-button @click="resetForm">重置</el-button>
            </el-form-item>
        </el-form>
    </el-row>
</template>

<script>
    import axios from 'axios'
    import ajax from "../common/ajax";
    export default {
        name: 'SignUp',
        data(){
            return {
                formData:{
                    username:'',
                    password:''
                }

            }
        },
        methods: {
            onSubmit() {
                ajax.ajaxapi('/login', 'post', {
                    username: this.formData.username,
                    password: this.formData.password
                }).then((response)=>{
                    localStorage.setItem('user', JSON.stringify(response));
                    this.$store.dispatch('setUser', response);
                    this.$router.push('/');
                })

            },
            resetForm(){
                this.formData.username = ''
                this.formData.password = ''
            }

        }
    }
</script>
<style lang="scss" scoped>
    .login-wrapper {
        position: fixed;
        width: 50%;
        top: 90px;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
        text-align: center;
    }
</style>


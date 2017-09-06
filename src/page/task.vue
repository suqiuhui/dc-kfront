<template>
    <div id="task">
        <div>this is the task page</div>

<button @click="getTaskList()">吊我</button>
        <ul>
            <li v-for="task in taskList">{{ task.name }}</li>
        </ul>


    </div>
</template>

<script>
    import ajax from '../common/ajax.js'
    export default {
        name: 'task',
        data () {
            return {
                user: {
                    userID: "1",
                    name: "zhangsan@163.com",
                    passWord: "123456"
                },
                taskList: [],
                activeIndex: '4'
            }
        },
        methods: {
            getTaskList () {
                ajax.ajaxapi('/getTaskList', 'post', this.user).then(res => {
                    this.taskList = res.data
                })
            }
        }
    }
</script>

<style lang="scss" scoped="">
    #task {
        font-size: 14px;
    }
</style>


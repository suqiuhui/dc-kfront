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
    import axios from 'axios'
    export default {
        name: 'task',
        data () {
            return {
                user: {
                    userID: "1",
                    name: "zhangsan@163.com",
                    passWord: "123456"
                },
                taskList: undefined,
                activeIndex: '4'
            }
        },
        methods: {
            getTaskList () {
                let that = this
                axios.post('http://172.16.232.18:8089/mockjsdata/1/getTaskList', this.user)
                    .then(function (response) {
                        console.log(response.data.data)
//                        that.taskList = response.data.data
                        that.taskList =  response.data.data
                    })
                    .catch(function (error) {
                        console.log(error)
//                        return error
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


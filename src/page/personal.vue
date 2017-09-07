<template>
    <div id="personal">
        <div>
            this is the personal page
        </div>
        <button @click="logout()">退出</button>
    </div>
</template>

<script>
    export default {
        name: 'personal',
        methods: {
            logout () {
                localStorage.clear();
                this.$store.dispatch('setUser', null);
                this.$router.replace('/')
            }
        }
    }
</script>

<style lang="scss" scoped="">
    #personal {
        font-size: 14px;
    }
</style>


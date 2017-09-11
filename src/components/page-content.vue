<template>
        <div class="content-wrapper">
            <slot>
                <img class="home-page-bg" src="./../img/homepage.png">
            </slot>
        </div>
</template>

<script>
    export default {
        name: 'vBody'
    }
</script>

<style lang="scss" scoped="">
    .content-wrapper {
        font-size: 14px;
    }
</style>


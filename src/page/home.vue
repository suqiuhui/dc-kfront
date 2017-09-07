<template>
    <div id="home">
        <slot>
            <img class="home-page-bg" src="./../img/homepage.png">
        </slot>
    </div>
</template>

<script>
    export default {
        name: 'home'
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

</style>


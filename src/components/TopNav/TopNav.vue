<template>
    <div class="topnav">
        <span class="logo">
            <img src="./../../assets/img/logo.png" alt="">
        </span>
        <span class="search">
            <img src="./../../assets/img/search.png" alt="">
        </span>
    </div>
</template>
<script>
export default {
    name: 'TopNav'
}
</script>
<style lang="stylus" scoped>
    .topnav 
        position fixed
        top 0
        left 0
        width 100%
        height 60px
        background-color #1296DB
        .logo
            img 
                position absolute
                left 18px
                top 50% 
                margin-top -20px
                width 120px
                height 40px
        .search
            height 100%
            width 30px
            line-height 100%
            img 
                position absolute
                right 18px
                top 50%
                margin-top -14px
                width 28px
                height 28px
</style>

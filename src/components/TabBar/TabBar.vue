<template>
        <div class="m-tabbar">
            <span  class="m-tabbar-item is-active" @click="switchTo('/home')">
                <span class="m-tabbar-item-icon">
                <img src="./../../assets/img/home_selected.png" alt="">
                </span> 
                <span class="m-tabbar-item-text">  
                    安利墙
                </span>
            </span> 
            <span class="m-tabbar-item" @click="switchTo('/follow')">
                <span class="m-tabbar-item-icon">
                <img src="./../../assets/img/follow.png" alt="">
                </span> 
                <span class="m-tabbar-item-text">  
                    关注
                </span>
            </span> 
            <span class="m-tabbar-item add" @click="switchTo('/add')">
                <span class="m-tabbar-item-icon">
                <img class="add_icon" src="./../../assets/img/add.png" alt="">
                </span> 
            </span> 
            <span class="m-tabbar-item" @click="switchTo('/notice')">
                <span class="m-tabbar-item-icon">
                <img src="./../../assets/img/notice.png" alt="">
                </span> 
                <span class="m-tabbar-item-text">  
                    通知
                </span>
            </span> 
            <span class="m-tabbar-item" @click="switchTo('/me')">
                <span class="m-tabbar-item-icon">
                <img src="./../../assets/img/me.png" alt="">
                </span> 
                <span class="m-tabbar-item-text">  
                    我
                </span>
            </span> 
        </div>
</template>
<script>
export default {
    name: 'TabBar',
    methods:{
        switchTo(path) {
            this.$router.replace(path)
        }
    }
}
</script>
<style lang="stylus" scoped> 
        .m-tabbar
            display flex
            flex-direction row
            position fixed
            bottom: 0
            left: 0
            right 0
            width 100%
            height 50px
            background #fff
            border-top 1px solid #e4e4e4
            padding 4px 0px
            z-index 999
            .m-tabbar-item
                flex 1
                text-align center
                font-size 14px
                color #8a8a8a
                .m-tabbar-item-icon
                    display block
                    img
                        width 29px
                        height 29px
                    .add_icon
                        width 65px
                        height 65px
                        margin-top -10px

        
            
</style>

<template>
    <div class="v-header">
        <div class="left">
            <img class="left-icon" src="http://www.banmago.cn/backstage/images/header-logo.png" />
        </div>
        <div class="middle">
            <span class="name">李建国</span>，欢迎登陆南北西东环保系统...
        </div>
        <div class="right">
            <a href="javascript:;" class="right-quit" @click="handleClickChange"></a>
            <a href="javascript:;" class="right-change" @click="handleClickQuit"></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-header",
        methods: {
            // 修改密码
            handleClickChange () {
                this.$router.push({path: '/changePassword'})
            },
            // 退出登录
            handleClickQuit () {

            }
        }
    }
</script>

<style lang="stylus" scoped>
    .v-header
        width: 100%
        height: 84px
        background: #519600
        position: relative
        overflow: hidden
        display: flex
        align-items: center
        .left-icon
            witdh: 381px
            height: 36px
            flex: 0 0 381px
            margin-left: 20px
        .middle
            flex: 1
            font-size: 18px
            color: #fff
            text-align: center
            .name
                font-size: 24px
        .right
            width: 240px
            flex: 0 0 240px
            margin-right: 20px
            font-size: 0
            .right-quit,.right-change
                background: url('http://www.banmago.cn/backstage/images/header-img1.png') no-repeat
                width: 112px
                height: 43px
                background-size: 100% 100%
                display: inline-block
            .right-change
                background: url('http://www.banmago.cn/backstage/images/header-img2.png') no-repeat
                margin-left: 15px
</style>
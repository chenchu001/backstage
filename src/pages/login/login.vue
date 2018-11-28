<template>
    <div class="login">
        <div class="login-title">
            <img class="logo" src="http://www.banmago.cn/backstage/images/logo.png" alt="" />
            <p class="title">武汉南北西东环保科技有限公司</p>
            <p class="title-english">Wuhan North South East Environmental Protection Technology Co. Ltd</p>
        </div>
        <div class="login-form">
            <div class="form-title">登录系统丨Login system...</div>
            <div class="form-content">
                <div class="input-username">
                    <el-input placeholder="请输入您的用户名" v-model="username"></el-input>
                    <i class="username-icon"></i>
                </div>
                <div class="input-password">
                    <el-input placeholder="请输入您的密码" v-model="password"></el-input>
                    <i class="password-icon"></i>
                </div>
                <i class="login-btn" @click="login"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data () {
            return {
                username: "",
                password: ""
            }
        },
        methods: {
            login () {
                if (this.username === "") {
                    this.$message({
                        message: '用户名不能为空！',
                        type: 'error'
                    })
                    return
                }
                if (this.password === "") {
                    this.$message({
                        message: '密码不能为空！',
                        type: 'error'
                    })
                    return
                }
                this.$message({
                    message: '登陆成功！',
                    type: 'success'
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .login
        background: url('http://www.banmago.cn/backstage/images/login-bg.jpg') no-repeat
        width: 100%
        height: 100%
        background-size: 100% 100%
        position: relative
        overflow: hidden
        .login-title
            position: absolute
            left: 0
            right: 0
            text-align: center
            top: 10%
            .title
                font-size: 26px
                color: #666
            .title-english
                font-size: 12px
                color: #666
        .login-form
            width: 530px
            height: 380px
            background: rgba(255, 255, 255, .6)
            border-radius: 6px
            position: absolute
            left: 50%
            margin-left: -265px
            top: 30%
            box-shadow: 2px 2px 8px 0 rgba(7,17,27,.1)
            .form-title
                width: 100%
                height: 74px
                line-height: 74px
                background: #6eab24
                border-top-left-radius: 6px
                border-top-right-radius: 6px
                padding-left: 36px
                box-sizing: border-box
                color: #fff
                font-size: 18px
            .form-content
                width: 420px
                margin: 0 auto
                .input-username
                    width: 100%
                    margin-top: 40px
                    position: relative
                    .username-icon
                        background: url('./username-icon.png') no-repeat
                        width: 19px
                        height: 18px
                        background-size: 100% 100%
                        right: 20px
                        top: 50%
                        margin-top: -9px
                        position: absolute
                .input-password
                    margin-top: 30px
                    position: relative
                    .password-icon
                        background: url('./password-icon.png') no-repeat
                        width: 18px
                        height: 22px
                        background-size: 100% 100%
                        right: 21px
                        position: absolute
                        top: 50%
                        margin-top: -11px
                .login-btn
                    display: block
                    margin: 40px auto
                    background: url('http://www.banmago.cn/backstage/images/login-btn.png') no-repeat
                    width: 119px
                    height: 48px
                    background-size: 100% 100%
</style>
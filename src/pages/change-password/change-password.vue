<template>
    <div class="change-password">
        <v-header></v-header>
        <div class="change-content">
            <div class="change-title">
                <span class="breadcrumb-text">当前位置：</span>
                <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-list">
                    <el-breadcrumb-item :to="{ path: '/home' }">管理员首页</el-breadcrumb-item>
                    <el-breadcrumb-item>更改密码</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="change-main">
                <div class="change-caption">更改密码</div>
                <div class="change-form">
                    <div class="form-dialog">
                        <div class="form-old">
                            <span class="text">旧密码</span>
                            <el-input class="input" v-model="inputOld" placeholder="请输入旧密码"></el-input>
                        </div>
                        <div class="form-new">
                            <span class="text">新密码</span>
                            <el-input class="input" v-model="inputNew" placeholder="请输入新密码"></el-input>
                        </div>
                        <div class="form-new-align">
                            <span class="text">确认新密码</span>
                            <el-input class="input" v-model="inputNewAlign" placeholder="请再次输入新密码"></el-input>
                        </div>
                        <el-row class="form-btn">
                            <el-button type="info">取消</el-button>
                            <el-button type="success" @click="handleClickSave">保存</el-button>
                        </el-row>
                    </div>
                </div>
            </div>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import VHeader from 'base/v-header/v-header'
    import VFooter from 'base/v-footer/v-footer'

    export default {
        name: "change-password",
        data () {
            return {
                inputOld: "",
                inputNew: "",
                inputNewAlign: ""
            }
        },
        methods: {
            handleClickSave () {

            }
        },
        components: {VHeader, VFooter} 
    }
</script>

<style lang="stylus" scoped>
    .breadcrumb-list >>> .el-breadcrumb__inner, .breadcrumb-list >>> .el-breadcrumb__inner, .breadcrumb-list >>> a
        color: #b8b8b8 !important
        font-weight: 400 !important
        
    .change-password
        .change-content
            width: 1135px
            margin: 0 auto
            .change-title
                width: 100%
                margin-top: 40px
                margin-bottom: 60px
                .breadcrumb-text
                    display: inline-block
                    vertical-align: middle
                    font-size: 14px
                    color: #b8b8b8
                .breadcrumb-list
                    display: inline-block
                    vertical-align: middle
                    font-size: 14px
            .change-main
                width: 100%
                .change-caption
                    width: 100%
                    height: 44px
                    line-height: 44px
                    font-size: 18px
                    padding-left: 24px
                    box-sizing: border-box
                    color: #fff
                    background: #427309
                .change-form
                    width: 100%
                    border: 1px solid #5aa300
                    height: 490px
                    box-sizing: border-box
                    margin-bottom: 280px
                    .form-dialog
                        width: 510px
                        margin: 100px auto 0
                        .form-btn
                            margin-top: 60px
                            width: 100%
                            text-align: center
                        .form-old,.form-new,.form-new-align
                            width: 100%
                            display: flex
                            align-items: center
                            margin-bottom: 25px
                            .text
                                width: 90px
                                flex: 0 0 90px
                                text-align: right
                                font-size: 14px
                            .input
                                flex: 1
                                margin-left: 20px
</style>
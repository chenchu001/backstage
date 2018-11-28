<template>
    <div class="archives-add">
        <v-header></v-header>
        <div class="add-content">
            <div class="add-title">
                <span class="breadcrumb-text">当前位置：</span>
                <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-list">
                    <el-breadcrumb-item :to="{ path: '/home' }">管理员首页</el-breadcrumb-item>
                    <el-breadcrumb-item><router-link :to="{ path: '/info' }">企业信息管理</router-link></el-breadcrumb-item>
                    <el-breadcrumb-item><router-link :to="{ path: '/archives' }">企业档案管理</router-link></el-breadcrumb-item>
                    <el-breadcrumb-item>录入企业档案</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="add-main">
                <div class="add-caption">录入企业档案信息</div>
                <div class="add-form">
                    <div class="form-dialog">
                        <div class="form-name">
                            <span class="text">企业名称</span>
                            <el-input class="input" v-model="inputName" placeholder="请输入企业名称"></el-input>
                        </div>
                        <div class="form-address">
                            <span class="text">经营地址</span>
                            <el-input class="input" v-model="inputAddress" placeholder="请输入经营地址"></el-input>
                        </div>
                        <div class="form-legal">
                            <span class="text">企业法人</span>
                            <el-input class="input" v-model="inputLegal" placeholder="请输入法人姓名"></el-input>
                        </div>
                        <div class="form-leader">
                            <span class="text">环保负责人</span>
                            <el-input class="input" v-model="inputLeader" placeholder="请输入负责人姓名"></el-input>
                        </div>
                        <div class="form-phone">
                            <span class="text">负责人电话</span>
                            <el-input class="input" v-model="inputPhone" placeholder="请输入负责人电话"></el-input>
                        </div>
                        <div class="form-Deadline">
                            <span class="text">合作期限</span>
                            <!-- <el-input class="input" v-model="inputDeadline" placeholder="请选择合作期限(年)"></el-input> -->
                            <el-date-picker
                                class="input"
                                v-model="inputDeadline"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                            </el-date-picker>
                        </div>
                        <div class="form-remark">
                            <span class="text">特殊备注</span>
                            <el-input class="input" v-model="inputRemark" placeholder="请填写备注信息"></el-input>
                        </div>
                        <el-row class="form-btn">
                            <el-button type="info">取消</el-button>
                            <el-button type="success">保存</el-button>
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
        name: "archives-add",
        data () {
            return {
                inputName: "",
                inputAddress: "",
                inputLegal: "",
                inputLeader: "",
                inputPhone: "",
                inputDeadline: "",
                inputRemark: ""
            }
        },
        components: {VHeader, VFooter}
    }
</script>

<style lang="stylus" scoped>
    .breadcrumb-list >>> .el-breadcrumb__inner, .breadcrumb-list >>> .el-breadcrumb__inner, .breadcrumb-list >>> a
        color: #b8b8b8 !important
        font-weight: 400 !important
        
    .archives-add
        .add-content
            width: 1135px
            margin: 0 auto
            .add-title
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
            .add-main
                width: 100%
                .add-caption
                    width: 100%
                    height: 44px
                    line-height: 44px
                    font-size: 18px
                    padding-left: 24px
                    box-sizing: border-box
                    color: #fff
                    background: #427309
                .add-form
                    width: 100%
                    border: 1px solid #5aa300
                    height: 490px
                    box-sizing: border-box
                    margin-bottom: 280px
                    .form-dialog
                        width: 510px
                        margin: 20px auto 0
                        .form-name,.form-address,.form-legal,.form-leader,.form-phone,.form-Deadline,.form-remark
                            width: 100%
                            display: flex
                            align-items: center
                            margin-bottom: 15px
                            .text
                                width: 90px
                                flex: 0 0 90px
                                text-align: right
                                font-size: 14px
                            .input
                                flex: 1
                                margin-left: 20px
                        .form-btn
                            margin-top: 26px
                            width: 100%
                            text-align: center                     
</style>
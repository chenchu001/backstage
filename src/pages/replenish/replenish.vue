<template>
    <div class="replenish">
        <v-header></v-header>
        <div class="replenish-content">
            <div class="replenish-title">
                <span class="breadcrumb-text">当前位置：</span>
                <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-list">
                    <el-breadcrumb-item :to="{ path: '/home' }">管理员首页</el-breadcrumb-item>
                    <el-breadcrumb-item><router-link :to="{ path: '/ledger' }">运维台账</router-link></el-breadcrumb-item>
                    <el-breadcrumb-item><router-link :to="{ path: '/assign' }">指派工作任务</router-link></el-breadcrumb-item>
                    <el-breadcrumb-item>补录工作轨迹</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="replenish-main">
                <div class="replenish-caption">补录工作轨迹</div>
                <div class="replenish-form">
                    <div class="form-dialog">
                        <!-- 工作任务选择 -->
                        <div class="form-firm">
                            <span class="text">工作任务选择</span>
                            <div class="input-drop" @click="handleClickDrop">
                                <span class="text">{{defaultDrop}}</span>
                                <i class="el-icon-arrow-down icon-drop"></i>
                                <transition name="fade">
                                    <ul class="drop-item" v-show="dropShow">
                                        <li class="drop-list" @click.stop="handleClickDropList(index)" v-for="(item, index) in firmArr">{{item}}</li>
                                    </ul>
                                </transition>
                            </div>
                        </div>
                        <!-- 工作任务状态 -->
                        <div class="form-status">
                            <span class="text">工作任务状态</span>
                            <div class="input-drop" @click="handleClickStatus">
                                <span class="text">{{defaultStatus}}</span>
                                <i class="el-icon-arrow-down icon-drop"></i>
                                <transition name="fade">
                                    <ul class="drop-item" v-show="statusShow">
                                        <li class="drop-list" @click.stop="handleClickStatusList(index)" v-for="(item, index) in statusArr">{{item}}</li>
                                    </ul>
                                </transition>
                            </div>
                        </div>
                        <!-- 工作完成时间 -->
                        <div class="form-date">
                            <span class="text">工作完成时间</span>
                            <el-date-picker
                                class="input"
                                v-model="inputDate"
                                type="date"
                                placeholder="请选择完成时间">
                            </el-date-picker>
                        </div>
                        <!-- 工作轨迹备注 -->
                        <div class="form-hint">
                            <span class="text">工作轨迹备注</span>
                            <el-input class="input" v-model="inputHint" placeholder="请输入工作轨迹备注"></el-input>
                        </div>
                        <el-row class="form-btn">
                            <el-button type="info" @click="handleClickCancel">取消</el-button>
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
        name: "replenish",
        data () {
            return {
                firmArr: ["企业名称001", "企业名称002", "企业名称003"],
                statusArr: ["常规设备检测","复杂设备检查","异常设备修复"],
                defaultDrop: "",
                defaultStatus: "",
                dropShow: false,
                statusShow: false,
                inputDate: "",
                inputHint: ""
            }
        },
        methods: {
            handleClickDrop () {
                this.dropShow = !this.dropShow
            },
            handleClickStatus () {
                this.statusShow = !this.statusShow
            },
            handleClickDropList (index) {
                this.defaultDrop = this.firmArr[index]
                this.dropShow = false
            },
            handleClickStatusList (index) {
                this.defaultStatus= this.statusArr[index]
                this.statusShow = false
            },
            handleClickCancel () {

            },
            handleClickSave () {

            }
        },
        mounted () {
            this.defaultDrop = this.firmArr[0]
            this.defaultStatus = this.statusArr[0]
        },
        components: {VHeader, VFooter}
    }
</script>

<style lang="stylus" scoped>
    .breadcrumb-list >>> .el-breadcrumb__inner, .breadcrumb-list >>> .el-breadcrumb__inner, .breadcrumb-list >>> a
        color: #b8b8b8 !important
        font-weight: 400 !important
        
    .replenish
        .replenish-content
            width: 1135px
            margin: 0 auto
            .replenish-title
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
            .replenish-main
                width: 100%
                .replenish-caption
                    width: 100%
                    height: 44px
                    line-height: 44px
                    font-size: 18px
                    padding-left: 24px
                    box-sizing: border-box
                    color: #fff
                    background: #427309
                .replenish-form
                    width: 100%
                    border: 1px solid #5aa300
                    height: 490px
                    box-sizing: border-box
                    margin-bottom: 280px
                    .form-dialog
                        width: 510px
                        margin: 40px auto 0
                        .form-date, .form-hint
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
                            margin-top: 30px
                            width: 100%
                            text-align: center
                        .form-firm,.form-status
                            width: 100%
                            height: 40px
                            display: flex
                            align-items: center
                            margin-bottom: 15px
                            .text
                                width: 90px
                                flex: 0 0 90px
                                text-align: right
                                font-size: 14px
                            .input-drop
                                flex: 1
                                height: 40px
                                margin-left: 20px
                                border: 1px solid rgba(7, 17, 27, .1)
                                border-radius: 2px
                                padding: 0 10px
                                box-sizing: border-box
                                position: relative
                                display: flex
                                justify-content: space-between
                                align-items: center
                                cursor: pointer
                                background: #fff
                                .text
                                    text-align: left
                                    font-size: 14px
                                    color: #666
                                .icon-drop
                                    text-align: right
                                .drop-item
                                    position: absolute
                                    top: 38px
                                    width: 100%
                                    left: -1px
                                    border: 1px solid rgba(7, 17, 27, .1)
                                    // border-top: none
                                    transition: all .3s
                                    z-index: 99
                                    background: #fff
                                    &.fade-enter-active,&.fade-leave
                                        opacity: 1
                                    &.fade-enter,&.fade-leave-active
                                        opacity: 0
                                    .drop-list
                                        width: 100%
                                        height: 40px
                                        line-height: 40px
                                        font-size: 14px
                                        color: #666
                                        padding: 0 10px
                                        box-sizing: border-box
                                        border-bottom: 1px solid rgba(7, 17, 27, .1)
                                        &:last-child
                                            border-bottom: none
</style>
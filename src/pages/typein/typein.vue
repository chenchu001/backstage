<template>
    <div class="typein">
        <v-header></v-header>
        <div class="typein-content">
            <div class="typein-title">
                <span class="breadcrumb-text">当前位置：</span>
                <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-list">
                    <el-breadcrumb-item :to="{ path: '/home' }">管理员首页</el-breadcrumb-item>
                    <el-breadcrumb-item><router-link :to="{ path: '/ledger' }">运维台账</router-link></el-breadcrumb-item>
                    <el-breadcrumb-item><router-link :to="{ path: '/assign' }">指派工作任务</router-link></el-breadcrumb-item>
                    <el-breadcrumb-item>录入工作任务</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="typein-main">
                <div class="typein-caption">录入工作任务</div>
                <div class="typein-form">
                    <div class="form-dialog">
                        <!-- 所属企业 -->
                        <div class="form-firm">
                            <span class="text">企业名称</span>
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
                        <!-- 工作类型 -->
                        <div class="form-type">
                            <span class="text">工作类型</span>
                            <div class="input-drop" @click="handleClickType">
                                <span class="text">{{defaultType}}</span>
                                <i class="el-icon-arrow-down icon-drop"></i>
                                <transition name="fade">
                                    <ul class="drop-item" v-show="typeShow">
                                        <li class="drop-list" @click.stop="handleClickTypeList(index)" v-for="(item, index) in typeArr">{{item}}</li>
                                    </ul>
                                </transition>
                            </div>
                        </div>
                        <!-- 工作描述 -->
                        <div class="form-description">
                            <span class="text">工作描述</span>
                            <el-input class="input" v-model="inputDescription" placeholder="请输入工作描述"></el-input>
                        </div>
                        <!-- 具体内容 -->
                        <div class="form-content">
                            <span class="text">具体内容</span>
                            <el-input class="input" v-model="inputContent" placeholder="请输入具体内容"></el-input>
                        </div>
                        <!-- 安排时间 -->
                        <div class="form-date">
                            <span class="text">安排日期</span>
                            <el-date-picker
                                class="input"
                                v-model="inputDate"
                                type="date"
                                placeholder="请选择安排时间">
                            </el-date-picker>
                        </div>
                        <!-- 工作地址 -->
                        <div class="form-address">
                            <span class="text">工作地址</span>
                            <el-input class="input" v-model="inputAddress" placeholder="请输入工作地址"></el-input>
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
        name: 'typein',
        data () {
            return {
                firmArr: ["企业名称001", "企业名称002", "企业名称003"],
                typeArr: ["常规设备检测","复杂设备检查","异常设备修复"],
                defaultDrop: "",
                defaultType: "",
                dropShow: false,
                typeShow: false,
                inputDescription: "",
                inputContent: "",
                inputDate: "",
                inputAddress: ""
            }
        },
        methods: {
            handleClickDrop () {
                this.dropShow = !this.dropShow
            },
            handleClickType () {
                this.typeShow = !this.typeShow
            },
            handleClickDropList (index) {
                this.defaultDrop = this.firmArr[index]
                this.dropShow = false
            },
            handleClickTypeList (index) {
                this.defaultType= this.typeArr[index]
                this.typeShow = false
            },
            handleClickCancel () {

            },
            handleClickSave () {
                
            }
        },
        mounted () {
            this.defaultDrop = this.firmArr[0]
            this.defaultType = this.typeArr[0]
        },
        components: {VHeader, VFooter}
    }
</script>

<style lang="stylus" scoped>
    .breadcrumb-list >>> .el-breadcrumb__inner, .breadcrumb-list >>> .el-breadcrumb__inner, .breadcrumb-list >>> a
        color: #b8b8b8 !important
        font-weight: 400 !important
        
    .typein
        .typein-content
            width: 1135px
            margin: 0 auto
            .typein-title
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
            .typein-main
                width: 100%
                .typein-caption
                    width: 100%
                    height: 44px
                    line-height: 44px
                    font-size: 18px
                    padding-left: 24px
                    box-sizing: border-box
                    color: #fff
                    background: #427309
                .typein-form
                    width: 100%
                    border: 1px solid #5aa300
                    height: 490px
                    box-sizing: border-box
                    margin-bottom: 280px
                    .form-dialog
                        width: 510px
                        margin: 40px auto 0
                        .form-description,.form-content,.form-date,.form-address
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
                        .form-firm,.form-type
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
                        .form-btn
                            margin-top: 30px
                            width: 100%
                            text-align: center
</style>
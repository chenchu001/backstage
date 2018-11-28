<template>
    <div class="operate-add">
        <v-header></v-header>
        <div class="add-content">
            <div class="add-title">
                <span class="breadcrumb-text">当前位置：</span>
                <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-list">
                    <el-breadcrumb-item :to="{ path: '/home' }">管理员首页</el-breadcrumb-item>
                    <el-breadcrumb-item><router-link :to="{ path: '/info' }">企业信息管理</router-link></el-breadcrumb-item>
                    <el-breadcrumb-item><router-link :to="{ path: '/operate' }">企业运营管理</router-link></el-breadcrumb-item>
                    <el-breadcrumb-item>录入运营信息</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="add-main">
                <div class="add-caption">录入运营管理信息</div>
                <div class="add-form">
                    <div class="form-dialog">
                        <!-- 所属企业 -->
                        <div class="form-firm">
                            <span class="text">所属企业</span>
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
                        <!-- 运营设备 -->
                        <div class="form-device">
                            <span class="text">运营设备</span>
                            <div class="input-drop" @click="handleClickDevice">
                                <span class="text">{{defaultDevice}}</span>
                                <i class="el-icon-arrow-down icon-drop"></i>
                                <transition name="fade">
                                    <ul class="drop-item" v-show="deviceShow">
                                        <li class="drop-list" @click.stop="handleClickDeviceList(index)" v-for="(item, index) in deviceArr">{{item}}</li>
                                    </ul>
                                </transition>
                            </div>
                        </div>
                        <!-- 当前监测数据 -->
                        <div class="form-number">
                            <span class="text">当前监测数据</span>
                            <el-input class="input" v-model="inputNumber" placeholder="请输入合同编号"></el-input>
                        </div>
                        <!-- 监测时间 -->
                        <div class="form-time">
                            <span class="text">监测时间</span>
                            <el-date-picker
                                class="input"
                                v-model="inputDate"
                                type="date"
                                placeholder="请选择签监测时间">
                            </el-date-picker>
                        </div>
                        <!-- 录入人 -->
                        <div class="form-person">
                            <span class="text">录入人</span>
                            <el-input class="input" v-model="inputPerson" placeholder="请输入录入人姓名"></el-input>
                        </div>
                        <!-- 数据状态 -->
                        <div class="form-status">
                            <span class="text">设备状态</span>
                            <div class="input-drop" @click="handleClickCheck">
                                <span class="text">{{defaultStatus}}</span>
                                <i class="el-icon-arrow-down icon-drop"></i>
                                <transition name="fade">
                                    <ul class="drop-item" v-show="statusShow">
                                        <li class="drop-list" @click.stop="handleClickCheckList(index)" v-for="(item, index) in statusArr">{{item}}</li>
                                    </ul>
                                </transition>
                            </div>
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
        name: 'operate-add',
        data () {
            return {
                firmArr: ["企业名称001", "企业名称002", "企业名称003"],
                deviceArr: ["烟气监测设备", "原子弹监测设备", "中子弹监测设备"],
                statusArr: ["数据正常", "数据异常"],
                defaultDrop: "",
                defaultDevice: "",
                defaultStatus: "",
                dropShow: false,
                deviceShow: false,
                statusShow: false,
                inputNumber: "",
                inputDate: "",
                inputPerson: ""
            }
        },
        methods: {
            handleClickDrop () {
                this.dropShow = !this.dropShow
            },
            handleClickDropList (index) {
                this.defaultDrop = this.firmArr[index]
                this.dropShow = false
            },
            handleClickCheck () {
                this.statusShow = !this.statusShow
            },
            handleClickCheckList (index) {
                this.defaultStatus = this.statusArr[index]
                this.statusShow = false
            },
            handleClickDevice () {
                this.deviceShow = !this.deviceShow
            },
            handleClickDeviceList (index) {
                this.defaultDevice = this.deviceArr[index]
                this.deviceShow = false
            },
            handleClickSave () {

            },
            handleClickCancel () {
                
            }
        },
        mounted () {
            this.defaultDrop = this.firmArr[0]
            this.defaultStatus = this.statusArr[0]
            this.defaultDevice = this.deviceArr[0]
        },
        components: {VHeader, VFooter}
    }
</script>

<style lang="stylus" scoped>
    .breadcrumb-list >>> .el-breadcrumb__inner, .breadcrumb-list >>> .el-breadcrumb__inner, .breadcrumb-list >>> a
        color: #b8b8b8 !important
        font-weight: 400 !important
        
    .operate-add
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
                    padding-bottom: 60px
                    margin-bottom: 280px
                    box-sizing: border-box
                    background: #dfeecb
                    .form-dialog
                        width: 510px
                        margin: 20px auto 0
                        .form-number,.form-person,.form-time
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
                            .input-year
                                margin-left: 20px
                        .form-firm,.form-status,.form-device
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
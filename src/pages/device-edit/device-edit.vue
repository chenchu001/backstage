<template>
    <div class="device-edit" v-show="editShow">
        <div class="edit-main">
            <div class="edit-caption">编辑企业设备信息</div>
            <div class="edit-form">
                <div class="form-dialog">
                    <div class="form-firm">
                        <span class="text">设备所属企业</span>
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
                    <div class="form-number">
                        <span class="text">设备编号</span>
                        <el-input class="input" v-model="inputNumber" placeholder="请输入设备编号"></el-input>
                    </div>
                    <div class="form-name">
                        <span class="text">设备名称</span>
                        <el-input class="input" v-model="inputName" placeholder="请输入设备名称"></el-input>
                    </div>
                    <div class="form-time">
                        <span class="text">安装时间</span>
                        <el-date-picker
                            class="input"
                            v-model="startTime"
                            type="date"
                            placeholder="请选择安装时间">
                        </el-date-picker>
                    </div>
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
</template>

<script>
    export default {
        name: "device-edit",
        props: {
            deviceList: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        data () {
            return {
                firmArr: ["企业名称001", "企业名称002", "企业名称003"],
                statusArr: ["运行正常", "运行失败", "无法运行"],
                dropShow: false,
                statusShow: false,
                editShow: false,
                defaultDrop: "",
                inputNumber: "",
                inputName: "",
                startTime: "",
                defaultStatus: ""
            }
        },
        methods: {
            show () {
                this.editShow = true
            },
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
            handleClickCancel () {
                this.editShow = false
            },
            handleClickSave () {
                console.log(this.inputName)
            }
        },
        watch: {
            deviceList (newVal) {
                this.defaultDrop = newVal.name
                this.defaultStatus = newVal.status
                this.inputName = newVal.title
                this.startTime = newVal.setupTime
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .device-edit
        width: 100%
        height: 100%
        position: fixed
        top: 0
        left: 0
        background: rgba(0, 0, 0, 0.7)
        z-index: 999
        .edit-main
            width: 800px
            height: 444px
            position: absolute
            top: 50%
            left: 50%
            margin-top: -222px
            margin-left: -400px
            .edit-caption
                width: 100%
                height: 44px
                line-height: 44px
                font-size: 18px
                padding-left: 24px
                box-sizing: border-box
                color: #fff
                background: #427309
            .edit-form
                width: 100%
                border: 1px solid #5aa300
                height: 400px
                box-sizing: border-box
                background: #dfeecb
                .form-dialog
                    width: 510px
                    margin: 20px auto 0
                    .form-number,.form-name,.form-time
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
                    .form-btn
                        margin-top: 30px
                        width: 100%
                        text-align: center
</style>
<template>
    <div class="engineer-add">
        <v-header></v-header>
        <div class="add-content">
            <div class="add-title">
                <span class="breadcrumb-text">当前位置：</span>
                <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-list">
                    <el-breadcrumb-item :to="{ path: '/home' }">管理员首页</el-breadcrumb-item>
                    <el-breadcrumb-item><router-link :to="{ path: '/engineer' }">运营工程师管理</router-link></el-breadcrumb-item>
                    <el-breadcrumb-item>录入运维工程师</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="add-main">
                <div class="add-caption">录入运维工程师</div>
                <div class="add-form">
                    <div class="form-dialog">
                        <div class="form-name">
                            <span class="text">姓名</span>
                            <el-input class="input" v-model="inputName" placeholder="请输入姓名"></el-input>
                        </div>
                        <div class="form-number">
                            <span class="text">工号</span>
                            <el-input class="input" v-model="inputNumber" placeholder="请输入工号"></el-input>
                        </div>
                        <div class="form-duty">
                            <span class="text">当前职务</span>
                            <el-input class="input" v-model="inputDuty" placeholder="请输入职务"></el-input>
                        </div>
                        <div class="form-phone">
                            <span class="text">常用电话</span>
                            <el-input class="input" v-model="inputPhone" placeholder="请输入电话"></el-input>
                        </div>
                        <div class="form-phone-one">
                            <span class="text">紧急联系电话</span>
                            <el-input class="input" v-model="inputPhoneOne" placeholder="请输入紧急联系电话"></el-input>
                        </div>
                        <div class="form-sex">
                            <span class="text">性别</span>
                            <div class="input-drop" @click="handleClickSex">
                                <span class="text">{{defaultSex}}</span>
                                <i class="el-icon-arrow-down icon-drop"></i>
                                <transition name="fade">
                                    <ul class="drop-item" v-show="dropShow">
                                        <li class="drop-list" @click.stop="handleClickSexList(index)" v-for="(item, index) in sexArr">{{item}}</li>
                                    </ul>
                                </transition>
                            </div>
                        </div>
                        <div class="form-card">
                            <span class="text">身份证号码</span>
                            <el-input class="input" v-model="inputCard" placeholder="请输入身份证号码"></el-input>
                        </div>
                        <div class="form-year">
                            <span class="text">工作年限</span>
                            <el-input-number class="input-year" v-model="inputYear" @change="handleChange" :min="1" :max="30"></el-input-number>
                        </div>
                        <div class="form-pic">
                            <span class="text">照片</span>
                            <el-upload
                                class="input"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                list-type="picture-card"
                                limit=1
                                :on-preview="handlePictureCardPreview"
                                :on-remove="handleRemove"
                                :on-success="handleUploadSuccess">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                            <el-dialog :visible.sync="dialogVisible">
                                <img width="100%" :src="dialogImageUrl" alt="">
                            </el-dialog>
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
        name: 'engineer-add',
        data () {
            return {
                sexArr: ["男", "女"],
                defaultSex: "男",
                dropShow: false,
                inputName: "",
                inputNumber: "",
                inputDuty: "",
                inputPhone: "",
                inputPhoneOne: "",
                inputYear: "",
                inputCard: "",
                dialogImageUrl: "",
                dialogVisible: false
            }
        },
        methods: {
            handleClickSex () {
                this.dropShow = !this.dropShow
            },
            handleClickSexList (index) {
                this.defaultSex = this.sexArr[index]
                this.dropShow = false
            },
            handleChange (value) {

            },
            handleRemove(file, fileList) {
                console.log(file, fileList)
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url
                this.dialogVisible = true
            },
            handleUploadSuccess (res, file) {
                console.log(file)
            },
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
    
    .engineer-add
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
                    box-sizing: border-box
                    margin-bottom: 280px
                    .form-dialog
                        width: 510px
                        margin: 20px auto 0
                        .form-number,.form-name,.form-duty,.form-phone,.form-phone-one,.form-year,.form-card,.form-pic
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
                        .form-sex
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
                            margin-top: 80px
                            width: 100%
                            text-align: center
</style>
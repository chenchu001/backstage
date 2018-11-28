<template>
    <div class="spare-add">
        <v-header></v-header>
        <div class="add-content">
            <div class="add-title">
                <span class="breadcrumb-text">当前位置：</span>
                <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-list">
                    <el-breadcrumb-item :to="{ path: '/home' }">管理员首页</el-breadcrumb-item>
                    <el-breadcrumb-item><router-link :to="{ path: '/spare' }">备品备件库</router-link></el-breadcrumb-item>
                    <el-breadcrumb-item>录入备品备件</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="add-main">
                <div class="add-caption">录入备品备件</div>
                <div class="add-form">
                    <div class="form-dialog">
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
                        <div class="form-pact">
                            <span class="text">对应合同</span>
                            <div class="input-drop" @click="handleClickPact">
                                <span class="text">{{defaultPact}}</span>
                                <i class="el-icon-arrow-down icon-drop"></i>
                                <transition name="fade">
                                    <ul class="drop-item" v-show="pactShow">
                                        <li class="drop-list" @click.stop="handleClickPactList(index)" v-for="(item, index) in pactArr">{{item}}</li>
                                    </ul>
                                </transition>
                            </div>
                        </div>
                        <div class="form-title">
                            <span class="text">备件名称</span>
                            <el-input class="input" v-model="inpuTitle" placeholder="请输入备件名称"></el-input>
                        </div>
                        <div class="form-number">
                            <span class="text">备件数量</span>
                            <el-input class="input" v-model="inputNumber" placeholder="请输入备件数量"></el-input>
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
        name: 'spare-add',
        data () {
            return {
                firmArr: ["公司1","公司2","公司3"],
                pactArr: ["合同1","合同2","合同3"],
                defaultDrop: "",
                defaultPact: "",
                dropShow: false,
                pactShow: false,
                inputNumber: "",
                inpuTitle: ""
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
            handleClickPact () {
                this.pactShow = !this.pactShow
            },
            handleClickPactList (index) {
                this.defaultPact = this.pactArr[index]
                this.pactShow = false
            },
            handleClickSave () {

            }
        },
        mounted () {
            this.defaultDrop = this.firmArr[0]
            this.defaultPact = this.pactArr[0]
        },
        components: {VHeader, VFooter}
    }
</script>

<style lang="stylus" scoped>
    .breadcrumb-list >>> .el-breadcrumb__inner, .breadcrumb-list >>> .el-breadcrumb__inner, .breadcrumb-list >>> a
        color: #b8b8b8 !important
        font-weight: 400 !important
    
    .spare-add
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
                        .form-title,.form-number
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
                        .form-firm,.form-pact
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
                            margin-top: 60px
                            width: 100%
                            text-align: center
</style>
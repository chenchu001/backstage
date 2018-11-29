<template>
    <div class="assign-person">
        <v-header></v-header>
        <div class="person-content">
            <div class="person-title">
                <span class="breadcrumb-text">当前位置：</span>
                <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-list">
                    <el-breadcrumb-item :to="{ path: '/home' }">管理员首页</el-breadcrumb-item>
                    <el-breadcrumb-item><router-link :to="{ path: '/ledger' }">运维台账</router-link></el-breadcrumb-item>
                    <el-breadcrumb-item><router-link :to="{ path: '/assign' }">指派工作任务</router-link></el-breadcrumb-item>
                    <el-breadcrumb-item>指派任务</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="person-main">
                <div class="person-caption">指派任务</div>
                <div class="person-form">
                    <div class="form-dialog">
                        <div class="form-item1">
                            <span class="text">企业名称</span>
                            <span class="text-right">{{personList.inputName}}</span>
                        </div>
                        <div class="form-item1">
                            <span class="text">工作描述</span>
                            <span class="text-right">{{personList.inputDescription}}</span>
                        </div>
                        <div class="form-item1">
                            <span class="text">具体内容</span>
                            <span class="text-right">{{personList.inputContent}}</span>
                        </div>
                        <div class="form-item1">
                            <span class="text">安排日期</span>
                            <span class="text-right">{{personList.inputTime}}</span>
                        </div>
                        <div class="form-item1">
                            <span class="text">工作地址</span>
                            <span class="text-right">{{personList.inputAddress}}</span>
                        </div>
                        <div class="form-person">
                            <span class="text">指派运维人员</span>
                            <div class="input-drop" @click="handleClickDrop">
                                <span class="text">{{defaultPerson}}</span>
                                <i class="el-icon-arrow-down icon-drop"></i>
                                <transition name="fade">
                                    <ul class="drop-item" v-show="dropShow">
                                        <li class="drop-list" @click.stop="handleClickDropList(index)" v-for="(item, index) in personList.personArr">{{item}}</li>
                                    </ul>
                                </transition>
                            </div>
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
        name: "assign-person",
        data () {
            return {
                personList: {
                    inputName: "企业名称01",
                    inputDescription: "检查氨氮自动监测仪",
                    inputContent: "检查测试氨氮监测仪是否运行正常，数据监测是否异常",
                    inputTime: "2018-11-25",
                    inputAddress: "武汉光谷",
                    personArr: ["张三", "李四", "王五", "赵六"]
                },
                dropShow: false,
                defaultPerson: ""
            }
        },
        methods: {
            handleClickDrop () {
                this.dropShow = !this.dropShow
            },
            handleClickDropList (index) {
                this.defaultPerson = this.personList.personArr[index]
                this.dropShow = false
            },
            handleClickSave () {
                
            }
        },
        mounted () {
            this.defaultPerson = this.personList.personArr[0]
        },
        components: {VHeader, VFooter}
    }
</script>

<style lang="stylus" scoped>
    .breadcrumb-list >>> .el-breadcrumb__inner, .breadcrumb-list >>> .el-breadcrumb__inner, .breadcrumb-list >>> a
        color: #b8b8b8 !important
        font-weight: 400 !important
        
    .assign-person
        .person-content
            width: 1135px
            margin: 0 auto
            .person-title
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
            .person-main
                width: 100%
                .person-caption
                    width: 100%
                    height: 44px
                    line-height: 44px
                    font-size: 18px
                    padding-left: 24px
                    box-sizing: border-box
                    color: #fff
                    background: #427309
                .person-form
                    width: 100%
                    border: 1px solid #5aa300
                    height: 490px
                    box-sizing: border-box
                    margin-bottom: 280px
                    .form-dialog
                        width: 510px
                        margin: 40px auto 0
                        .form-item1
                            width: 100%
                            display: flex
                            align-items: center
                            margin-bottom: 25px
                            .text
                                width: 90px
                                flex: 0 0 90px
                                text-align: right
                                font-size: 14px
                                color: #2c2c2c
                            .text-right
                                font-size: 14px
                                flex: 1
                                margin-left: 20px
                                color: #2c2c2c
                        .form-person
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
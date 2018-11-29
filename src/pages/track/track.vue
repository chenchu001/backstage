<template>
    <div class="v-track">
        <v-header></v-header>
        <div class="track-content">
            <div class="track-title">
                <span class="breadcrumb-text">当前位置：</span>
                <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-list">
                    <el-breadcrumb-item :to="{ path: '/home' }">管理员首页</el-breadcrumb-item>
                    <el-breadcrumb-item><router-link :to="{ path: '/ledger' }">运维台账</router-link></el-breadcrumb-item>
                    <el-breadcrumb-item><router-link :to="{ path: '/assign' }">指派工作任务</router-link></el-breadcrumb-item>
                    <el-breadcrumb-item>查看工作轨迹</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="track-main">
                <div class="track-caption">查看工作轨迹</div>
                <div class="track-form">
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
                        <div class="form-item1">
                            <span class="text">指派运维人员</span>
                            <span class="text-right">{{personList.inputPerson}}</span>
                        </div>
                        <div class="form-item1">
                            <span class="text">当前状态</span>
                            <span class="text-right">{{personList.inputStatus}}</span>
                        </div>
                        <div class="form-item1">
                            <span class="text">运维轨迹</span>
                            <ul class="right-item">
                                <li class="right-list" v-for="(item, index) in personList.trackArr">
                                    {{item}}
                                </li>
                            </ul>
                        </div>
                        <div class="form-item1">
                            <span class="text">签收文件</span>
                            <img @click="handleClickPreview" class="img-right" :src="personList.picUrl" alt="" />
                        </div>
                        <div class="form-item1">
                            <span class="text">客户评分</span>
                            <div class="rate-right">
                                <el-rate
                                    v-model="personList.rateValue"
                                    disabled>
                                </el-rate>
                            </div>
                        </div>
                        <div class="form-item1">
                            <span class="text">客户评价</span>
                            <span class="text-right">{{personList.rateText}}</span>
                        </div>
                        <el-row class="form-btn">
                            <el-button type="success" @click="handleClickReturn">返回</el-button>
                        </el-row>
                    </div>
                </div>
            </div>
        </div>
        <v-footer></v-footer>
        <!-- 预览 -->
        <el-dialog :visible.sync="previewVisible">
            <img width="100%" :src="previewImg" alt="">
        </el-dialog>
    </div>
</template>

<script>
    import VHeader from 'base/v-header/v-header'
    import VFooter from 'base/v-footer/v-footer'

    export default {
        name: 'v-track',
        data () {
            return {
                personList: {
                    inputName: "企业名称01",
                    inputDescription: "检查氨氮自动监测仪",
                    inputContent: "检查测试氨氮监测仪是否运行正常，数据监测是否异常",
                    inputTime: "2018-11-25",
                    inputAddress: "武汉光谷",
                    inputPerson: "张三",
                    inputStatus: "仪器检测中",
                    trackArr: ["2018-12-01  08:30  从公司出发前往客户公司地址", "2018-12-01  09:10  到达客户公司，进入工作现场", "2018-12-01  09:20  与相关负责人交接，开始进行设备监测开始进行设备监测"],
                    picUrl: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
                    rateValue: 3.7,
                    rateText: "非常满意非常满意非常满意非常满意非常满意非常满意非常满意非常满意非常满意非常满意非常满意非常满意非常满意非常满意非常满意非常满意非常满意非常满意非常满意"
                },
                previewVisible: false
            }
        },
        methods: {
            handleClickReturn () {
                this.$router.go(-1)
            },
            handleClickPreview () {
                this.previewVisible = true
                this.previewImg = this.personList.picUrl
            }
        },
        components: {VHeader, VFooter}
    }
</script>

<style lang="stylus" scoped>
    .breadcrumb-list >>> .el-breadcrumb__inner, .breadcrumb-list >>> .el-breadcrumb__inner, .breadcrumb-list >>> a
        color: #b8b8b8 !important
        font-weight: 400 !important
    
    .v-track
        .track-content
            width: 1135px
            margin: 0 auto
            .track-title
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
            .track-main
                width: 100%
                .track-caption
                    width: 100%
                    height: 44px
                    line-height: 44px
                    font-size: 18px
                    padding-left: 24px
                    box-sizing: border-box
                    color: #fff
                    background: #427309
                .track-form
                    width: 100%
                    border: 1px solid #5aa300
                    padding-bottom: 80px
                    box-sizing: border-box
                    margin-bottom: 280px
                    .form-dialog
                        width: 510px
                        margin: 40px auto 0
                        .form-btn
                            margin-top: 40px
                            width: 100%
                            text-align: center
                        .form-item1
                            width: 100%
                            display: flex
                            align-items: center
                            margin-bottom: 25px
                            &:nth-child(8)
                                align-items: flex-start
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
                                line-height: 150%
                            .rate-right
                                flex: 1
                                margin-left: 20px
                            .right-item
                                flex: 1
                                margin-left: 20px
                                font-size: 14px
                                .right-list
                                    background: #6da517
                                    color: #fff
                                    text-align: left
                                    border-radius: 3px
                                    box-sizing: border-box
                                    line-height: 140%
                                    padding: 10px 14px
                                    margin-bottom: 12px
                                    font-size: 14px
                            .img-right
                                width: 120px
                                height: 120px
                                margin-left: 20px
</style>
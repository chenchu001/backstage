<template>
    <div class="finish">
        <v-header></v-header>
        <div class="finish-content">
            <div class="finish-title">
                <span class="breadcrumb-text">当前位置：</span>
                <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-list">
                    <el-breadcrumb-item :to="{ path: '/home' }">管理员首页</el-breadcrumb-item>
                    <el-breadcrumb-item><router-link :to="{ path: '/ledger' }">运维台账</router-link></el-breadcrumb-item>
                    <el-breadcrumb-item>已完成工作</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="finish-main">
                <div class="finish-caption">
                    <div class="left">
                        <i class="icon"></i>
                        <span class="text">已完成工作</span>
                    </div>
                    <div class="right">
                        <el-button type="success" size="small" @click="handleClickReturn">返回控制台</el-button>
                    </div>
                </div>
                <div class="finish-table">
                    <el-table :data="tableData" border>
                        <el-table-column prop="name" label="企业名称"></el-table-column>
                        <el-table-column prop="content" label="工作内容"></el-table-column>
                        <el-table-column prop="time" label="工作时间" width="120"></el-table-column>
                        <el-table-column prop="status" label="当前状态" width="120"></el-table-column>
                        <el-table-column prop="evaluate" label="客户评价" width="220"></el-table-column>
                        <el-table-column prop="operation" label="操作" width="120">
                            <template slot-scope="scope">
                                <el-row>
                                    <el-button type="primary" size="mini">
                                        <router-link :to="'/assignPerson/' + scope.row.id">
                                        <span class="el-icon-view"></span>查看明细
                                        </router-link>
                                    </el-button>
                                </el-row>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="paging">
                        <div class="block">
                            <el-pagination
                                @current-change="handleCurrentChange"
                                background
                                layout="prev, pager, next"
                                :total="totalNum">
                            </el-pagination>
                        </div>
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
        name: 'finish',
        data () {
            return {
                tableData: [
                    {
                        name: '唯行科技',
                        id: "01",
                        content: '上海市普陀区金沙江路1518弄',
                        time: '2019-10-10',
                        status: '已经完成',
                        evaluate: '非常满意'
                    },
                    {
                        name: '唯道科技',
                        id: "02",
                        content: '上海市普陀区金沙江路1518弄',
                        time: '2019-10-10',
                        status: '已经完成',
                        evaluate: '非常满意'
                    },
                    {
                        name: '唯行科技',
                        id: "01",
                        content: '上海市普陀区金沙江路1518弄',
                        time: '2019-10-10',
                        status: '已经完成',
                        evaluate: '非常满意'
                    },
                    {
                        name: '唯行科技',
                        id: "01",
                        content: '上海市普陀区金沙江路1518弄',
                        time: '2019-10-10',
                        status: '已经完成',
                        evaluate: '非常满意'
                    },
                    {
                        name: '唯行科技',
                        id: "01",
                        content: '上海市普陀区金沙江路1518弄',
                        time: '2019-10-10',
                        status: '已经完成',
                        evaluate: '非常满意'
                    },
                    {
                        name: '唯行科技',
                        id: "01",
                        content: '上海市普陀区金沙江路1518弄',
                        time: '2019-10-10',
                        status: '已经完成',
                        evaluate: '非常满意'
                    },
                    {
                        name: '唯行科技',
                        id: "01",
                        content: '上海市普陀区金沙江路1518弄',
                        time: '2019-10-10',
                        status: '已经完成',
                        evaluate: '非常满意'
                    },
                    {
                        name: '唯行科技',
                        id: "01",
                        content: '上海市普陀区金沙江路1518弄',
                        time: '2019-10-10',
                        status: '已经完成',
                        evaluate: '非常满意'
                    },
                    {
                        name: '唯行科技',
                        id: "01",
                        content: '上海市普陀区金沙江路1518弄',
                        time: '2019-10-10',
                        status: '已经完成',
                        evaluate: '非常满意'
                    },
                    {
                        name: '唯行科技',
                        id: "01",
                        content: '上海市普陀区金沙江路1518弄',
                        time: '2019-10-10',
                        status: '已经完成',
                        evaluate: '非常满意'
                    }
                ],
                totalNum: 200
            }
        },
        methods: {
            handleClickReturn () {
                this.$router.push({
                    path: '/ledger'
                })
            },
            // 获取分页当前页
            handleCurrentChange (val) {
                console.log(`当前页: ${val}`)
            }
        },
        components: {VHeader, VFooter}
    }
</script>

<style lang="stylus" scoped>
    .breadcrumb-list >>> .el-breadcrumb__inner, .breadcrumb-list >>> .el-breadcrumb__inner, .breadcrumb-list >>> a
        color: #b8b8b8 !important
        font-weight: 400 !important
    .finish-table >>> tr td, .finish-table >>> tr th
        text-align: center
    .finish-table >>> thead tr th
        background: #427309
        color: #fff
    .finish-table a
        color: #fff
        
    .finish
        .finish-content
            width: 1135px
            margin: 0 auto
            .finish-title
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
            .finish-main
                width: 100%
                .finish-caption
                    width: 100%
                    height: 55px
                    background: #72a931
                    border-top-left-radius: 6px
                    border-top-right-radius: 6px
                    display: flex
                    padding: 0 20px
                    box-sizing: border-box
                    align-items: center
                    justify-content: space-between
                    .left
                        .icon
                            background: url('http://www.banmago.cn/backstage/images/ledger-img4.png') no-repeat
                            width: 37px
                            height: 36px
                            background-size: 100% 100%
                            display: inline-block
                            vertical-align: middle
                        .text
                            display: inline-block
                            vertical-align: middle
                            font-size: 18px
                            color: #fff
                            margin-left: 14px
                .finish-table
                        width: 100%
                        margin-top: 8px
                        .paging
                            width: 100%
                            text-align: center
                            margin-top: 20px
                            margin-bottom: 100px
</style>
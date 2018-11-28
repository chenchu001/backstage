<template>
    <div class="spare">
        <v-header></v-header>
        <div class="spare-content">
            <div class="spare-title">
                <span class="breadcrumb-text">当前位置：</span>
                <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-list">
                    <el-breadcrumb-item :to="{ path: '/home' }">管理员首页</el-breadcrumb-item>
                    <el-breadcrumb-item>备品备件库</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="spare-main">
                <div class="spare-caption">
                    <div class="left">
                        <i class="icon"></i>
                        <span class="text">备品备件库管理</span>
                    </div>
                    <div class="right">
                        <el-button type="warning" size="small" @click="handleClickAdd">录入备品备件信息</el-button>
                        <el-button type="success" size="small" @click="handleClickReturn">返回控制台</el-button>
                    </div>
                </div>
                <div class="spare-table">
                    <el-table :data="tableData" border>
                        <el-table-column prop="name" label="企业名称"></el-table-column>
                        <el-table-column prop="number" label="合同编号" width="320"></el-table-column>
                        <el-table-column prop="title" label="备件名称" width="140"></el-table-column>
                        <el-table-column prop="count" label="备件数量"></el-table-column>
                        <el-table-column prop="remain" label="剩余数量" width="140"></el-table-column>
                        <el-table-column prop="operation" label="操作" width="200">
                            <template slot-scope="scope">
                                <el-row>
                                    <el-button type="primary" size="mini" @click="handleClick(scope.row,scope.$index)">
                                        <span class="el-icon-edit"></span>编辑
                                    </el-button>
                                    <el-button type="warning" size="mini">
                                        <router-link :to="'/spareDetail/' + scope.$index">
                                        <span class="el-icon-edit-outline"></span>使用记录
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
        name: 'spare',
        data () {
            return {
                tableData: [
                    {
                        name: "唯行科技",
                        number: 1001,
                        title: "太阳能三角板",
                        count: 888,
                        remain: 333
                    },
                    {
                        name: "唯行科技",
                        number: 1002,
                        title: "太阳能三角板",
                        count: 888,
                        remain: 333
                    },
                    {
                        name: "唯行科技",
                        number: 1003,
                        title: "太阳能三角板",
                        count: 888,
                        remain: 333
                    },
                    {
                        name: "唯行科技",
                        number: 1001,
                        title: "太阳能三角板",
                        count: 888,
                        remain: 333
                    },
                    {
                        name: "唯行科技",
                        number: 1001,
                        title: "太阳能三角板",
                        count: 888,
                        remain: 333
                    },
                    {
                        name: "唯行科技",
                        number: 1001,
                        title: "太阳能三角板",
                        count: 888,
                        remain: 333
                    },
                    {
                        name: "唯行科技",
                        number: 1001,
                        title: "太阳能三角板",
                        count: 888,
                        remain: 333
                    },
                    {
                        name: "唯行科技",
                        number: 1001,
                        title: "太阳能三角板",
                        count: 888,
                        remain: 333
                    },
                    {
                        name: "唯行科技",
                        number: 1001,
                        title: "太阳能三角板",
                        count: 888,
                        remain: 333
                    },
                    {
                        name: "唯行科技",
                        number: 1001,
                        title: "太阳能三角板",
                        count: 888,
                        remain: 333
                    }
                ],
                totalNum: 200,
                dialogVisible: false,
                index: 0,
                list: {}
            }
        },
        methods: {
            // 返回
            handleClickReturn () {
                this.$router.push({
                    path: 'home'
                })
            },
            handleClickAdd () {
                this.$router.push({
                    path: 'spareAdd'
                })
            },
            // 编辑
            handleClick (row, index) {
                // this.archivesList = row
                console.log(index)
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
    .spare-table >>> tr td, .spare-table >>> tr th
        text-align: center
    .spare-table >>> thead tr th
        background: #427309
        color: #fff
    .spare-table a
        color: #fff
        
    .spare
        .spare-content
            width: 1135px
            margin: 0 auto
            .spare-title
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
            .spare-main
                width: 100%
                .spare-caption
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
                            background: url('http://www.banmago.cn/backstage/images/home-img3.png') no-repeat
                            width: 36px
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
                .spare-table
                    width: 100%
                    margin-top: 8px
                    .paging
                        width: 100%
                        text-align: center
                        margin-top: 20px
                        margin-bottom: 100px
</style>
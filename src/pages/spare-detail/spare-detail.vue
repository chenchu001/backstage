<template>
    <div class="spare-detail">
        <v-header></v-header>
        <div class="detail-content">
            <div class="add-title">
                <span class="breadcrumb-text">当前位置：</span>
                <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-list">
                    <el-breadcrumb-item :to="{ path: '/home' }">管理员首页</el-breadcrumb-item>
                    <el-breadcrumb-item><router-link :to="{ path: '/spare' }">备品备件库</router-link></el-breadcrumb-item>
                    <el-breadcrumb-item>使用记录</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="add-main">
                <div class="add-caption">
                    <div class="left">
                        <i class="icon"></i>
                        <span class="text">备品备件使用记录</span>
                    </div>
                    <div class="right">
                        <el-button type="success" size="small" @click="handleClickReturn">返回备件列表</el-button>
                    </div>
                </div>
                <div class="detail-table">
                    <el-table :data="tableData" border>
                        <el-table-column prop="name" label="企业名称"></el-table-column>
                        <el-table-column prop="number" label="合同编号"></el-table-column>
                        <el-table-column prop="title" label="备件名称"></el-table-column>
                        <el-table-column prop="count" label="使用数量" width="140"></el-table-column>
                        <el-table-column prop="person" label="使用人" width="140"></el-table-column>
                        <el-table-column prop="time" label="使用时间"></el-table-column>
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
        name: 'spare-detail',
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
            }
        },
        methods: {
            // 返回
            handleClickReturn () {
                this.$router.push({
                    path: '/spare'
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
    .detail-table >>> tr td, .detail-table >>> tr th
        text-align: center
    .detail-table >>> thead tr th
        background: #427309
        color: #fff
        
    .spare-detail
        .detail-content
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
                .add-form
                    width: 100%
                    border: 1px solid #5aa300
                    padding-bottom: 60px
                    box-sizing: border-box
                    margin-bottom: 280px
                    .form-dialog
                        width: 510px
                        margin: 20px auto 0
                .detail-table
                    width: 100%
                    margin-top: 8px
                    .paging
                        width: 100%
                        text-align: center
                        margin-top: 20px
                        margin-bottom: 100px
</style>
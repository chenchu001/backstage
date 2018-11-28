<template>
    <div class="operate">
        <v-header></v-header>
        <div class="operate-content">
            <div class="operate-title">
                <span class="breadcrumb-text">当前位置：</span>
                <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-list">
                    <el-breadcrumb-item :to="{ path: '/home' }">管理员首页</el-breadcrumb-item>
                    <el-breadcrumb-item><router-link :to="{ path: '/info' }">企业信息管理</router-link></el-breadcrumb-item>
                    <el-breadcrumb-item>企业运营管理</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="operate-main">
                <div class="operate-caption">
                    <div class="left">
                        <i class="icon"></i>
                        <span class="text">企业运营管理</span>
                    </div>
                    <div class="right">
                        <el-button type="warning" size="small" @click="handleClickAdd">录入运营信息</el-button>
                        <el-button type="success" size="small" @click="handleClickReturn">返回控制台</el-button>
                    </div>
                </div>
                <div class="contract-table">
                    <el-table :data="tableData" border>
                        <el-table-column prop="name" label="企业名称"></el-table-column>
                        <el-table-column prop="title" label="设备名称" width="320"></el-table-column>
                        <el-table-column prop="type" label="监测数据类型" width="140"></el-table-column>
                        <el-table-column prop="number" label="监测数据值"></el-table-column>
                        <el-table-column prop="result" label="监测结果" width="120"></el-table-column>
                        <el-table-column prop="checkTime" label="监测时间"></el-table-column>
                        <el-table-column prop="operation" label="操作" width="180">
                            <template slot-scope="scope">
                                <el-row>
                                    <el-button type="primary" size="mini" @click="handleClick(scope.row)">
                                        <span class="el-icon-edit"></span>编辑
                                    </el-button>
                                    <el-button type="danger" size="mini" @click.stop.prevent="deleteRow(scope.$index, tableData)">
                                        <span class="el-icon-delete"></span>删除
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
        <!-- 对话框 -->
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :show-close=false :lock-scroll="false">
            <span>确定删除该条信息？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteSure">确 定</el-button>
            </span>
        </el-dialog>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import VHeader from 'base/v-header/v-header'
    import VFooter from 'base/v-footer/v-footer'

    export default {
        name: "operate",
        data () {
            return {
                tableData: [
                    {
                        name: '唯行科技',
                        title: '太阳能核弹',
                        type: 'success',
                        number: '111',
                        result: '数值正常',
                        checkTime: '2018-09-01'
                    },
                    {
                        name: '唯道科技',
                        title: '太阳能原子弹',
                        type: 'Transfering',
                        number: '222',
                        result: '数值超标',
                        checkTime: '2018-09-01'
                    },
                    {
                        name: '唯一科技',
                        title: '太阳能氢弹',
                        type: 'Creating',
                        number: '333',
                        result: '数值过低',
                        checkTime: '2018-09-01'
                    },
                    {
                        name: '唯一科技',
                        title: '太阳能氢弹',
                        type: 'Creating',
                        number: '333',
                        result: '数值过低',
                        checkTime: '2018-09-01'
                    },
                    {
                        name: '唯一科技',
                        title: '太阳能氢弹',
                        type: 'Creating',
                        number: '333',
                        result: '数值过低',
                        checkTime: '2018-09-01'
                    },
                    {
                        name: '唯一科技',
                        title: '太阳能氢弹',
                        type: 'Creating',
                        number: '333',
                        result: '数值过低',
                        checkTime: '2018-09-01'
                    },
                    {
                        name: '唯一科技',
                        title: '太阳能氢弹',
                        type: 'Creating',
                        number: '333',
                        result: '数值过低',
                        checkTime: '2018-09-01'
                    },
                    {
                        name: '唯一科技',
                        title: '太阳能氢弹',
                        type: 'Creating',
                        number: '333',
                        result: '数值过低',
                        checkTime: '2018-09-01'
                    },
                    {
                        name: '唯一科技',
                        title: '太阳能氢弹',
                        type: 'Creating',
                        number: '333',
                        result: '数值过低',
                        checkTime: '2018-09-01'
                    },
                    {
                        name: '唯一科技',
                        title: '太阳能氢弹',
                        type: 'Creating',
                        number: '333',
                        result: '数值过低',
                        checkTime: '2018-09-01'
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
                    path: 'info'
                })
            },
            handleClickAdd () {
                this.$router.push({
                    path: 'operateAdd'
                })
            },
            // 编辑
            handleClick (row) {
                
            },
            // 删除
            deleteRow (index, rows) {
                this.dialogVisible = true
                this.index = index
                this.list = rows
            },
            // 确认删除
            deleteSure () {
                this.list.splice(this.index, 1)
                this.dialogVisible = false
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
    .contract-table >>> tr td, .contract-table >>> tr th
        text-align: center
    .contract-table >>> thead tr th
        background: #427309
        color: #fff
        
    .operate
        .operate-content
            width: 1135px
            margin: 0 auto
            .operate-title
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
            .operate-main
                width: 100%
                .operate-caption
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
                            background: url('./icon1.png') no-repeat
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
                .contract-table
                    width: 100%
                    margin-top: 8px
                    .paging
                        width: 100%
                        text-align: center
                        margin-top: 20px
                        margin-bottom: 100px
</style>
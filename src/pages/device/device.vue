<template>
    <div class="device">
        <v-header></v-header>
        <div class="device-content">
            <div class="device-title">
                <span class="breadcrumb-text">当前位置：</span>
                <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-list">
                    <el-breadcrumb-item :to="{ path: '/home' }">管理员首页</el-breadcrumb-item>
                    <el-breadcrumb-item><router-link :to="{ path: '/info' }">企业信息管理</router-link></el-breadcrumb-item>
                    <el-breadcrumb-item>企业设备管理</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="device-main">
                <div class="contract-caption">
                    <div class="left">
                        <i class="icon"></i>
                        <span class="text">企业设备管理</span>
                    </div>
                    <div class="right">
                        <el-button type="warning" size="small" @click="handleClickAdd">录入设备信息</el-button>
                        <el-button type="success" size="small" @click="handleClickReturn">返回控制台</el-button>
                    </div>
                </div>
                <div class="contract-table">
                    <el-table :data="tableData" border>
                        <el-table-column prop="name" label="企业名称"></el-table-column>
                        <el-table-column prop="title" label="设备名称" width="320"></el-table-column>
                        <el-table-column prop="setupTime" label="安装时间" width="140"></el-table-column>
                        <el-table-column prop="status" label="设备状态"></el-table-column>
                        <el-table-column prop="recentTime" label="最近检测时间" width="120"></el-table-column>
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
        <!-- 修改 -->
        <device-edit ref="deviceEdit" :deviceList="deviceList"></device-edit>
    </div>
</template>

<script>
    import VHeader from 'base/v-header/v-header'
    import VFooter from 'base/v-footer/v-footer'
    import DeviceEdit from 'pages/device-edit/device-edit'

    export default {
        name: "device",
        data () {
            return {
                tableData: [
                    {
                        name: '唯行科技',
                        title: '太阳能核弹',
                        setupTime: '2018-09-01',
                        status: '安装完成',
                        recentTime: '2018-11-27'
                    },
                    {
                        name: '唯道科技',
                        title: '太阳能核弹',
                        setupTime: '2018-09-01',
                        status: '正在安装',
                        recentTime: '2018-11-27'
                    },
                    {
                        name: '唯一科技',
                        title: '太阳能核弹',
                        setupTime: '2018-09-01',
                        status: '安装完成',
                        recentTime: '2018-11-27'
                    },
                    {
                        name: '唯行科技',
                        title: '太阳能核弹',
                        setupTime: '2018-09-01',
                        status: '安装完成',
                        recentTime: '2018-11-27'
                    },
                    {
                        name: '唯行科技',
                        title: '太阳能核弹',
                        setupTime: '2018-09-01',
                        status: '安装完成',
                        recentTime: '2018-11-27'
                    },
                    {
                        name: '唯行科技',
                        title: '太阳能核弹',
                        setupTime: '2018-09-01',
                        status: '安装完成',
                        recentTime: '2018-11-27'
                    },
                    {
                        name: '唯行科技',
                        title: '太阳能核弹',
                        setupTime: '2018-09-01',
                        status: '安装完成',
                        recentTime: '2018-11-27'
                    },
                    {
                        name: '唯行科技',
                        title: '太阳能核弹',
                        setupTime: '2018-09-01',
                        status: '安装完成',
                        recentTime: '2018-11-27'
                    },
                    {
                        name: '唯行科技',
                        title: '太阳能核弹',
                        setupTime: '2018-09-01',
                        status: '安装完成',
                        recentTime: '2018-11-27'
                    },
                    {
                        name: '唯行科技',
                        title: '太阳能核弹',
                        setupTime: '2018-09-01',
                        status: '安装完成',
                        recentTime: '2018-11-27'
                    }
                ],
                totalNum: 200,
                dialogVisible: false,
                index: 0,
                list: {},
                deviceList: {}
            }
        },
        methods: {
            handleClickAdd () {
                this.$router.push({
                    path: 'deviceAdd'
                })
            },
            // 编辑
            handleClick (row) {
                console.log(111)
                this.deviceList = row
                this.$refs.deviceEdit.show()
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
            // 返回
            handleClickReturn () {
                this.$router.push({
                    path: 'info'
                })
            },
            // 获取分页当前页
            handleCurrentChange (val) {
                console.log(`当前页: ${val}`)
            }
        },
        components: {VHeader, VFooter, DeviceEdit}
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
        
    .device
        .device-content
            width: 1135px
            margin: 0 auto
            .device-title
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
            .device-main
                width: 100%
                .contract-caption
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
<template>
    <div class="archives">
        <v-header></v-header>
        <div class="archives-content">
            <div class="archives-title">
                <span class="breadcrumb-text">当前位置：</span>
                <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-list">
                    <el-breadcrumb-item :to="{ path: '/home' }">管理员首页</el-breadcrumb-item>
                    <el-breadcrumb-item><router-link :to="{ path: '/info' }">企业信息管理</router-link></el-breadcrumb-item>
                    <el-breadcrumb-item>企业档案管理</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="archives-main">
                <div class="archives-caption">
                    <div class="left">
                        <i class="icon"></i>
                        <span class="text">企业档案管理</span>
                    </div>
                    <div class="right">
                        <el-button type="warning" size="small" @click="handleClickAdd">录入企业档案</el-button>
                        <el-button type="success" size="small" @click="handleClickReturn">返回控制台</el-button>
                    </div>
                </div>
                <div class="archives-table">
                    <el-table :data="tableData" border>
                        <el-table-column prop="name" label="企业名称"></el-table-column>
                        <el-table-column prop="address" label="地址" width="320"></el-table-column>
                        <el-table-column prop="type" label="企业类型" width="140"></el-table-column>
                        <el-table-column prop="business" label="主营业务"></el-table-column>
                        <el-table-column prop="deadline" label="合约期限" width="140"></el-table-column>
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
        <v-footer></v-footer>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :show-close=false :lock-scroll="false">
            <span>确定删除该条信息？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteSure">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 修改 -->
        <archives-edit ref="archivesEdit" :archivesList="archivesList"></archives-edit>
    </div>
</template>

<script>
    import VHeader from 'base/v-header/v-header'
    import VFooter from 'base/v-footer/v-footer'
    import ArchivesEdit from 'pages/archives-edit/archives-edit'

    export default {
        name: "archives",
        data () {
            return {
                tableData: [
                    {
                        name: '唯行科技',
                        address: '上海市普陀区金沙江路1518弄',
                        type: '国企',
                        business: '互联网',
                        deadline: '2019-10-10'
                    }, {    
                    name: '唯道科技',
                    address: '上海市普陀区金沙江路1518弄',
                    type: '国企',
                    business: '互联网',
                    deadline: '2019-10-10'
                    }, {
                        name: '唯物科技',
                        address: '上海市普陀区金沙江路1518弄',
                        type: '国企',
                        business: '互联网',
                        deadline: '2019-10-10'
                    }, {
                        name: '唯心科技',
                        address: '上海市普陀区金沙江路1518弄',
                        type: '国企',
                        business: '互联网',
                        deadline: '2019-10-10'
                    }, {
                        name: '唯佛科技',
                        address: '上海市普陀区金沙江路1518弄',
                        type: '国企',
                        business: '互联网',
                        deadline: '2019-10-10'
                    }, {
                        name: '唯流科技',
                        address: '上海市普陀区金沙江路1518弄',
                        type: '国企',
                        business: '互联网',
                        deadline: '2019-10-10'
                    }, {
                        name: '唯一科技',
                        address: '上海市普陀区金沙江路1518弄',
                        type: '国企',
                        business: '互联网',
                        deadline: '2019-10-10'
                    }, {
                        name: '唯行科技',
                        address: '上海市普陀区金沙江路1518弄',
                        type: '国企',
                        business: '互联网',
                        deadline: '2019-10-10'
                    }, {
                        name: '唯行科技',
                        address: '上海市普陀区金沙江路1518弄',
                        type: '国企',
                        business: '互联网',
                        deadline: '2019-10-10'
                    }, {
                        name: '唯行科技',
                        address: '上海市普陀区金沙江路1518弄',
                        type: '国企',
                        business: '互联网',
                        deadline: '2019-10-10'
                    }
                ],
                totalNum: 200,
                dialogVisible: false,
                index: 0,
                list: {},
                archivesList: {}
            }
        },
        methods: {
            // 编辑
            handleClick (row) {
                this.archivesList = row
                this.$refs.archivesEdit.show()
            },
            // 删除
            deleteRow (index, rows) {
                console.log(index)
                console.log(rows)
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
            },
            // 添加
            handleClickAdd () {
                this.$router.push({
                    path: 'archivesAdd'
                })
            },
            // 返回
            handleClickReturn () {
                this.$router.push({
                    path: 'info'
                })
            }
        },
        components: {VHeader, VFooter, ArchivesEdit}
    }
</script>

<style lang="stylus" scoped>
    .breadcrumb-list >>> .el-breadcrumb__inner, .breadcrumb-list >>> .el-breadcrumb__inner, .breadcrumb-list >>> a
        color: #b8b8b8 !important
        font-weight: 400 !important
    .archives-table >>> tr td, .archives-table >>> tr th
        text-align: center
    .archives-table >>> thead tr th
        background: #427309
        color: #fff
        
    .archives
        .archives-content
            width: 1135px
            margin: 0 auto
            .archives-title
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
            .archives-main
                width: 100%
                .archives-caption
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
                .archives-table
                    width: 100%
                    margin-top: 8px
                    .paging
                        width: 100%
                        text-align: center
                        margin-top: 20px
                        margin-bottom: 100px
</style>
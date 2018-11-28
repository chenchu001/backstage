<template>
    <div class="contract">
        <v-header></v-header>
        <div class="contract-content">
            <div class="contract-title">
                <span class="breadcrumb-text">当前位置：</span>
                <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-list">
                    <el-breadcrumb-item :to="{ path: '/home' }">管理员首页</el-breadcrumb-item>
                    <el-breadcrumb-item><router-link :to="{ path: '/info' }">企业信息管理</router-link></el-breadcrumb-item>
                    <el-breadcrumb-item>企业合同管理</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="contract-main">
                <div class="contract-caption">
                    <div class="left">
                        <i class="icon"></i>
                        <span class="text">企业合同管理</span>
                    </div>
                    <div class="right">
                        <el-button type="warning" size="small" @click="handleClickAdd">录入企业合同</el-button>
                        <el-button type="success" size="small" @click="handleClickReturn">返回控制台</el-button>
                    </div>
                </div>
                <div class="contract-table">
                    <el-table :data="tableData" border>
                        <el-table-column prop="number" label="合同编号"></el-table-column>
                        <el-table-column prop="firm" label="所属企业" width="320"></el-table-column>
                        <el-table-column prop="date" label="签订日期" width="140"></el-table-column>
                        <el-table-column prop="content" label="合同内容(图)">
                            <template slot-scope="scope">
                                <img @click="handleClickPreview(scope.row.content)" class="contract-img" :src="scope.row.content" alt="" />
                            </template>
                        </el-table-column>
                        <el-table-column prop="status" label="当前状态" width="120"></el-table-column>
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
        <!-- 预览 -->
        <el-dialog :visible.sync="previewVisible">
            <img width="100%" :src="previewImg" alt="">
        </el-dialog>
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
        name: "contract",
        data () {
            return {
                tableData: [
                    {
                        number: '00001',
                        firm: '唯行科技',
                        date: '2018-09-01',
                        content: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543315334826&di=a4d369cded094c92266e2b6e855d71be&imgtype=0&src=http%3A%2F%2Fwww.zxyyzp.com%2Fuploads%2F2015131%2F201501312044007676.jpg',
                        status: '正在合作'
                    }, {    
                    number: '00002',
                    firm: '唯行科技',
                    date: '2018-09-01',
                    content: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543315334826&di=a4d369cded094c92266e2b6e855d71be&imgtype=0&src=http%3A%2F%2Fwww.zxyyzp.com%2Fuploads%2F2015131%2F201501312044007676.jpg',
                    status: '结束合作'
                    }, {
                    number: '00003',
                    firm: '唯行科技',
                    date: '2018-09-01',
                    content: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543315334826&di=a4d369cded094c92266e2b6e855d71be&imgtype=0&src=http%3A%2F%2Fwww.zxyyzp.com%2Fuploads%2F2015131%2F201501312044007676.jpg',
                    status: '正在合作'
                    }, {
                    number: '00004',
                    firm: '唯行科技',
                    date: '2018-09-01',
                    content: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543315334826&di=a4d369cded094c92266e2b6e855d71be&imgtype=0&src=http%3A%2F%2Fwww.zxyyzp.com%2Fuploads%2F2015131%2F201501312044007676.jpg',
                    status: '正在合作'
                    }, {
                    number: '00005',
                    firm: '唯行科技',
                    date: '2018-09-01',
                    content: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543315334826&di=a4d369cded094c92266e2b6e855d71be&imgtype=0&src=http%3A%2F%2Fwww.zxyyzp.com%2Fuploads%2F2015131%2F201501312044007676.jpg',
                    status: '正在合作'
                    }, {
                    number: '00006',
                    firm: '唯行科技',
                    date: '2018-09-01',
                    content: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543315334826&di=a4d369cded094c92266e2b6e855d71be&imgtype=0&src=http%3A%2F%2Fwww.zxyyzp.com%2Fuploads%2F2015131%2F201501312044007676.jpg',
                    status: '正在合作'
                    }, {
                    number: '00007',
                    firm: '唯行科技',
                    date: '2018-09-01',
                    content: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543315334826&di=a4d369cded094c92266e2b6e855d71be&imgtype=0&src=http%3A%2F%2Fwww.zxyyzp.com%2Fuploads%2F2015131%2F201501312044007676.jpg',
                    status: '正在合作'
                    }, {
                    number: '00008',
                    firm: '唯行科技',
                    date: '2018-09-01',
                    content: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543315334826&di=a4d369cded094c92266e2b6e855d71be&imgtype=0&src=http%3A%2F%2Fwww.zxyyzp.com%2Fuploads%2F2015131%2F201501312044007676.jpg',
                    status: '正在合作'
                    }, {
                    number: '00009',
                    firm: '唯行科技',
                    date: '2018-09-01',
                    content: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543315334826&di=a4d369cded094c92266e2b6e855d71be&imgtype=0&src=http%3A%2F%2Fwww.zxyyzp.com%2Fuploads%2F2015131%2F201501312044007676.jpg',
                    status: '正在合作'
                    }, {
                    number: '00010',
                    firm: '唯行科技',
                    date: '2018-09-01',
                    content: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543315334826&di=a4d369cded094c92266e2b6e855d71be&imgtype=0&src=http%3A%2F%2Fwww.zxyyzp.com%2Fuploads%2F2015131%2F201501312044007676.jpg',
                    status: '正在合作'
                    }
                ],
                totalNum: 200,
                previewImg: "",
                previewVisible: false,
                dialogVisible: false,
                index: 0,
                list: {}
            }
        },
        methods: {
            // 编辑
            handleClick (row) {
                this.archivesList = row
            },
            // 删除
            deleteRow (index, rows) {
                this.dialogVisible = true
                this.index = index
                this.list = rows
            },
            handleClickAdd () {
                this.$router.push({
                    path: 'contractAdd'
                })
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
            // 预览
            handleClickPreview (imgUrl) {
                this.previewVisible = true
                this.previewImg = imgUrl
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
    .contract-img
        width: 80px
        
    .contract
        .contract-preview
            position: fixed
            width: 100%
            min-height: 100%
            top: 0
            right: 0
            background: rgba(0, 0, 0, .8)
            z-index: 99
            img
                width: 500px
                display: block
                margin: 0 auto
        .contract-content
            width: 1135px
            margin: 0 auto
            .contract-title
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
            .contract-main
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
                .contract-table
                    width: 100%
                    margin-top: 8px
                    .paging
                        width: 100%
                        text-align: center
                        margin-top: 20px
                        margin-bottom: 100px
</style>
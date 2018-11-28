<template>
    <div class="engineer">
        <v-header></v-header>
        <div class="engineer-content">
            <div class="engineer-title">
                <span class="breadcrumb-text">当前位置：</span>
                <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-list">
                    <el-breadcrumb-item :to="{ path: '/home' }">管理员首页</el-breadcrumb-item>
                    <el-breadcrumb-item>运维工程师管理</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="engineer-main">
                <div class="engineer-caption">
                    <div class="left">
                        <i class="icon"></i>
                        <span class="text">运维工程师管理</span>
                    </div>
                    <div class="right">
                        <el-button type="warning" size="small" @click="handleClickAdd">录入运维工程师</el-button>
                        <el-button type="success" size="small" @click="handleClickReturn">返回控制台</el-button>
                    </div>
                </div>
                <div class="engineer-table">
                    <el-table :data="tableData" border>
                        <el-table-column prop="name" label="工程师姓名"></el-table-column>
                        <el-table-column prop="number" label="工号" width="320"></el-table-column>
                        <el-table-column prop="year" label="工作年限" width="140"></el-table-column>
                        <el-table-column prop="pic" label="照片">
                            <template slot-scope="scope">
                                <img @click="handleClickPreview(scope.row.pic)" class="contract-img" :src="scope.row.pic" alt="" />
                            </template>
                        </el-table-column>
                        <el-table-column prop="phone" label="联系电话" width="140"></el-table-column>
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
        name: 'engineer',
        data () {
            return {
                tableData: [
                    {
                        name: "陈楚",
                        number: 1001,
                        year: 10,
                        pic: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
                        phone: 13545059999
                    },
                    {
                        name: "陈楚",
                        number: 1002,
                        year: 10,
                        pic: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
                        phone: 13545059999
                    },
                    {
                        name: "陈楚",
                        number: 1003,
                        year: 10,
                        pic: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
                        phone: 13545059999
                    },
                    {
                        name: "陈楚",
                        number: 1004,
                        year: 10,
                        pic: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
                        phone: 13545059999
                    },
                    {
                        name: "陈楚",
                        number: 1005,
                        year: 10,
                        pic: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
                        phone: 13545059999
                    },
                    {
                        name: "陈楚",
                        number: 1006,
                        year: 10,
                        pic: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
                        phone: 13545059999
                    },
                    {
                        name: "陈楚",
                        number: 1007,
                        year: 10,
                        pic: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
                        phone: 13545059999
                    },
                    {
                        name: "陈楚",
                        number: 1008,
                        year: 10,
                        pic: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
                        phone: 13545059999
                    },
                    {
                        name: "陈楚",
                        number: 1009,
                        year: 10,
                        pic: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
                        phone: 13545059999
                    },
                    {
                        name: "陈楚",
                        number: 1010,
                        year: 10,
                        pic: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
                        phone: 13545059999
                    }
                ],
                totalNum: 200,
                dialogVisible: false,
                index: 0,
                list: {},
                previewImg: "",
                previewVisible: false
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
            // 确认删除
            deleteSure () {
                this.list.splice(this.index, 1)
                this.dialogVisible = false
            },
            // 返回
            handleClickReturn () {
                this.$router.push({
                    path: 'home'
                })
            },
            handleClickAdd () {
                this.$router.push({
                    path: 'engineerAdd'
                })
            },
            // 预览
            handleClickPreview (imgUrl) {
                console.log(imgUrl)
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
    .engineer-table >>> tr td, .engineer-table >>> tr th
        text-align: center
    .engineer-table >>> thead tr th
        background: #427309
        color: #fff
    .contract-img
        width: 60px
        height: 60px
        
    .engineer
        .engineer-content
            width: 1135px
            margin: 0 auto
            .engineer-title
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
            .engineer-main
                width: 100%
                .engineer-caption
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
                            background: url('http://www.banmago.cn/backstage/images/home-img2.png') no-repeat
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
                .engineer-table
                    width: 100%
                    margin-top: 8px
                    .paging
                        width: 100%
                        text-align: center
                        margin-top: 20px
                        margin-bottom: 100px
</style>
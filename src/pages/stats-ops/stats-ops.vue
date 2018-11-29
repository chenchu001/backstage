<template>
    <div class="stats-ops">
        <v-header></v-header>
        <div class="ops-content">
            <div class="ops-title">
                <span class="breadcrumb-text">当前位置：</span>
                <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-list">
                    <el-breadcrumb-item :to="{ path: '/home' }">管理员首页</el-breadcrumb-item>
                    <el-breadcrumb-item><router-link :to="{path: '/stats'}">数据统计</router-link></el-breadcrumb-item>
                    <el-breadcrumb-item>运维工作统计</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="ops-main">
                <div class="ops-caption">
                    <div class="left">
                        <i class="icon"></i>
                        <span class="text">运维工作统计</span>
                    </div>
                    <div class="right">
                        <el-button type="success" size="small" @click="handleClickReturn">返回控制台</el-button>
                    </div>
                </div>
                <div class="ops-item">
                    <li class="ops-list" v-for="(item, index) in opsArr" :key="index" @click="handleClickList(index)">
                        <img class="img" :src="item.imgSrc" alt="" />
                        <span class="count">{{item.count}}</span>
                        <span class="text">{{item.text}}</span>
                    </li>
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
        name: 'stats-ops',
        data () {
            return {
                opsArr: [
                    {
                        id: 0,
                        imgSrc: "http://www.banmago.cn/backstage/images/ops-img1.png",
                        text: "带开始工作",
                        count: 10
                    },
                    {
                        id: 1,
                        imgSrc: "http://www.banmago.cn/backstage/images/ops-img2.png",
                        text: "进行中工作",
                        count: 20
                    },
                    {
                        id: 2,
                        imgSrc: "http://www.banmago.cn/backstage/images/ops-img3.png",
                        text: "已完成工作",
                        count: 30
                    },
                    {
                        id: 3,
                        imgSrc: "http://www.banmago.cn/backstage/images/ops-img4.png",
                        text: "常规工作",
                        count: 40
                    },
                    {
                        id: 4,
                        imgSrc: "http://www.banmago.cn/backstage/images/ops-img5.png",
                        text: "数据异常工作",
                        count: 50
                    },
                    {
                        id: 5,
                        imgSrc: "http://www.banmago.cn/backstage/images/ops-img6.png",
                        text: "部件更换",
                        count:60
                    }
                ]
            }
        },
        methods: {
            // 返回
            handleClickReturn () {
                this.$router.push({
                    path: '/stats'
                })
            },
            handleClickList (index) {

            }
        },
        components: {VHeader, VFooter}
    }
</script>

<style lang="stylus" scoped>
    .breadcrumb-list >>> .el-breadcrumb__inner, .breadcrumb-list >>> .el-breadcrumb__inner, .breadcrumb-list >>> a
        color: #b8b8b8 !important
        font-weight: 400 !important
        
    .ops-content
        width: 1135px
        margin: 80px auto 120px
        .ops-title
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
        .ops-main
            width: 100%
            .ops-caption
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
                        background: url('http://www.banmago.cn/backstage/images/stats-img1.png') no-repeat
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
            .ops-item
                width: 650px
                margin: 78px auto 0
                display: flex
                flex-wrap: wrap
                justify-content: space-between
                .ops-list
                    position: relative
                    margin-bottom: 58px
                    cursor: pointer
                    .img
                        width: 176px
                        height: 179px
                    .count
                        position: absolute
                        width: 100%
                        text-align: center
                        left: 0
                        top: 26%
                        font-size: 50px
                        color: #fff
                    .text
                        position: absolute
                        width: 100%
                        left: 0
                        top: 64%
                        right: 0
                        text-align: center
                        color: #fff
                
</style>
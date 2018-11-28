<template>
    <div class="info">
        <v-header></v-header>
        <div class="info-content">
            <div class="info-title">
                <span class="breadcrumb-text">当前位置：</span>
                <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-list">
                    <el-breadcrumb-item :to="{ path: '/home' }">管理员首页</el-breadcrumb-item>
                    <el-breadcrumb-item>企业信息管理</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <ul class="info-item">
                <li class="info-list" v-for="(item, index) in infoArr" :key="index" @click="handleClickList(index)">
                    <img class="img" :src="item.imgSrc" alt="" />
                    <span class="text">{{item.text}}</span>
                </li>
            </ul>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import VHeader from 'base/v-header/v-header'
    import VFooter from 'base/v-footer/v-footer'

    export default {
        name: "info",
        data () {
            return {
                infoArr: [
                    {
                        id: 0,
                        imgSrc: "http://www.banmago.cn/backstage/images/info-img1.png",
                        text: "企业档案管理"
                    },
                    {
                        id: 1,
                        imgSrc: "http://www.banmago.cn/backstage/images/info-img2.png",
                        text: "企业合同管理"
                    },
                    {
                        id: 2,
                        imgSrc: "http://www.banmago.cn/backstage/images/info-img3.png",
                        text: "企业设备管理"
                    },
                    {
                        id: 3,
                        imgSrc: "http://www.banmago.cn/backstage/images/info-img4.png",
                        text: "企业运营管理"
                    },
                ]
            }
        },
        methods: {
            handleClickList (index) {
                if (index === 0) {
                    this.$router.push({path: '/archives'})
                }
                if (index === 1) {
                    this.$router.push({path: '/contract'})
                }
                if (index === 2) {
                    this.$router.push({path: '/device'})
                }
                if (index === 3) {
                    this.$router.push({path: '/operate'})
                }
            }
        },
        components: {VHeader, VFooter}
    }
</script>

<style lang="stylus" scoped>
    .breadcrumb-list >>> .el-breadcrumb__inner, .breadcrumb-list >>> .el-breadcrumb__inner
        color: #b8b8b8 !important
        font-weight: 400 !important
        
    .info
        .info-content
            width: 1135px
            margin: 0 auto
            .info-title
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
            .info-item
                display: flex
                width: 100%
                flex-wrap: wrap
                padding-bottom: 480px
                .info-list
                    width: 230px
                    height: 342px
                    background: url('http://www.banmago.cn/backstage/images/home-bg.png') no-repeat
                    background-size: 100% 100%
                    margin-right: 70px
                    margin-bottom: 44px
                    position: relative
                    cursor: pointer
                    &:nth-child(4), &:nth-child(8)
                        margin-right: 0
                    &:nth-child(5), &:nth-child(6), &:nth-child(7), &:nth-child(8)
                        margin-bottom: 0
                    .img
                        position: absolute
                        width: 130px
                        height: 130px
                        left: 50px
                        top: 75px
                    .text
                        position: absolute
                        bottom: 0
                        font-size: 24px
                        color: #fff
                        left: 0
                        right: 0
                        text-align: center
                        height: 56px
                        line-height: 50px
</style>
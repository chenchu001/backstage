<template>
    <div class="home">
        <v-header></v-header>
        <div class="home-content">
            <ul class="home-item">
                <li class="home-list" v-for="(item, index) in homeArr" :key="index" @click="handleClickList(index)">
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
        name: "home",
        data () {
            return {
                homeArr: [
                    {
                        id: 0,
                        imgSrc: "http://www.banmago.cn/backstage/images/home-img1.png",
                        text: "企业信息管理"
                    },
                    {
                        id: 1,
                        imgSrc: "http://www.banmago.cn/backstage/images/home-img2.png",
                        text: "运维工程师管理"
                    },
                    {
                        id: 2,
                        imgSrc: "http://www.banmago.cn/backstage/images/home-img3.png",
                        text: "备品备件库"
                    },
                    {
                        id: 3,
                        imgSrc: "http://www.banmago.cn/backstage/images/home-img4.png",
                        text: "运维台账"
                    },
                    {
                        id: 4,
                        imgSrc: "http://www.banmago.cn/backstage/images/home-img5.png",
                        text: "实验室管理"
                    },
                    {
                        id: 5,
                        imgSrc: "http://www.banmago.cn/backstage/images/home-img6.png",
                        text: "运维车辆"
                    },
                    {
                        id: 6,
                        imgSrc: "http://www.banmago.cn/backstage/images/home-img7.png",
                        text: "预警管理"
                    },
                    {
                        id: 7,
                        imgSrc: "http://www.banmago.cn/backstage/images/home-img8.png",
                        text: "数据统计"
                    }
                ]
            }
        },
        methods: {
            handleClickList (index) {
                if (index === 0) {
                    this.$router.push({path: '/info'})
                }
                if (index === 1) {
                    this.$router.push({path: '/engineer'})
                }
                if (index === 2) {
                    this.$router.push({path: '/spare'})
                }
                if (index === 3) {
                    this.$router.push({path: '/ledger'})
                }
                if (index === 7) {
                    this.$router.push({path: '/stats'})
                }
            }
        },
        components: {VHeader, VFooter}
    }
</script>

<style lang="stylus" scoped>
    .home-content
        width: 1135px
        margin: 80px auto 120px
        .home-item
            display: flex
            width: 100%
            flex-wrap: wrap
            .home-list
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
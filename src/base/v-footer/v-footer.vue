<template>
    <div class="v-footer">
        <img class="img" src="http://www.banmago.cn/backstage/images/footer-img1.png" alt="" />
        &nbsp;&nbsp;|&nbsp;&nbsp; 
        <span class="time">{{time}}</span>
    </div>
</template>

<script>
    export default {
        name: "v-footer",
        data () {
            return {
                time: ""
            }
        },
        methods: {
            getTime () {
                let Date1 = new Date()
                let myYear = Date1.getFullYear()
                let myMonth = Date1.getMonth()
                let myDate = Date1.getDate()
                let myHours = Date1.getHours()
                let myMinutes = Date1.getMinutes() 
                let mySeconds = Date1.getSeconds()
                if(myMinutes<10) {
                    myMinutes = '0' + myMinutes
                }
                if(mySeconds<10) {
                    mySeconds = "0" + mySeconds
                }
                this.time = myYear + '年' + (myMonth+1) + '月' + myDate + '日 '+ myHours + ":" + myMinutes + ":" + mySeconds
                let _this = this
                setTimeout(() => {
                    _this.getTime()
                }, 1000)
            }
        },
        mounted () {
            this.getTime()
        }
    }
</script>

<style lang="stylus" scoped>
    .v-footer
        width: 100%
        height: 42px
        background: #5a9b0e
        display: flex
        align-items: center
        justify-content: center
        color: #fff
        font-size: 14px
        .img
            witdh: 222px
            height: 23px
</style>
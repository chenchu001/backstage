<template>
    <div class="archives-edit" v-show="editShow">
        <div class="edit-main">
            <div class="edit-caption">编辑企业档案信息</div>
            <div class="edit-form">
                <div class="form-dialog">
                    <div class="form-name">
                        <span class="text">企业名称</span>
                        <el-input class="input" v-model="inputName" placeholder="请输入企业名称"></el-input>
                    </div>
                    <div class="form-address">
                        <span class="text">经营地址</span>
                        <el-input class="input" v-model="inputAddress" placeholder="请输入经营地址"></el-input>
                    </div>
                    <div class="form-legal">
                        <span class="text">企业法人</span>
                        <el-input class="input" v-model="inputLegal" placeholder="请输入法人姓名"></el-input>
                    </div>
                    <div class="form-leader">
                        <span class="text">环保负责人</span>
                        <el-input class="input" v-model="inputLeader" placeholder="请输入负责人姓名"></el-input>
                    </div>
                    <div class="form-phone">
                        <span class="text">负责人电话</span>
                        <el-input class="input" v-model="inputPhone" placeholder="请输入负责人电话"></el-input>
                    </div>
                    <div class="form-Deadline">
                        <span class="text">合作期限</span>
                        <!-- <el-input class="input" v-model="inputDeadline" placeholder="请选择合作期限(年)"></el-input> -->
                        <el-date-picker
                            class="input"
                            v-model="inputDeadline"
                            type="daterange"
                            range-separator="至"
                            :start-placeholder="startDate"
                            :end-placeholder="endDate">
                        </el-date-picker>
                    </div>
                    <div class="form-remark">
                        <span class="text">特殊备注</span>
                        <el-input class="input" v-model="inputRemark" placeholder="请填写备注信息"></el-input>
                    </div>
                    <el-row class="form-btn">
                        <el-button type="info" @click="handleClickCancel">取消</el-button>
                        <el-button type="success" @click="handleClickSave">保存</el-button>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "archives-edit",
        props: {
            archivesList: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        data () {
            return {
                editShow: false,
                inputName: "",
                inputAddress: "",
                inputLegal: "",
                inputLeader: "",
                inputPhone: "",
                startDate: "2018-09-06",
                endDate: "2018-10-06",
                inputDeadline: "",
                inputRemark: ""
            }
        },
        watch: {
            archivesList (newVal) {
                this.inputName = newVal.name
            }
        },
        methods: {
            show () {
                this.editShow = true
            },
            handleClickCancel () {
                this.editShow = false
            },
            handleClickSave () {
                console.log(this.inputName)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .archives-edit
        width: 100%
        height: 100%
        position: fixed
        top: 0
        left: 0
        background: rgba(0, 0, 0, 0.7)
        z-index: 999
        .edit-main
            width: 800px
            height: 534px
            position: absolute
            top: 50%
            left: 50%
            margin-top: -267px
            margin-left: -400px
            .edit-caption
                width: 100%
                height: 44px
                line-height: 44px
                font-size: 18px
                padding-left: 24px
                box-sizing: border-box
                color: #fff
                background: #427309
            .edit-form
                width: 100%
                border: 1px solid #5aa300
                height: 490px
                box-sizing: border-box
                background: #dfeecb
                .form-dialog
                    width: 510px
                    margin: 20px auto 0
                    .form-name,.form-address,.form-legal,.form-leader,.form-phone,.form-Deadline,.form-remark
                        width: 100%
                        display: flex
                        align-items: center
                        margin-bottom: 15px
                        .text
                            width: 90px
                            flex: 0 0 90px
                            text-align: right
                        .input
                            flex: 1
                            margin-left: 20px
                    .form-btn
                        margin-top: 26px
                        width: 100%
                        text-align: center
</style>
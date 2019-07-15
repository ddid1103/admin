<template>
    <div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="日期" prop="date1">
                <el-date-picker type="date" disabledDate placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item label="姓名" prop="username">
                <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="品名" prop="type">
                <el-input v-model="ruleForm.type"></el-input>
            </el-form-item>
            <el-form-item label="价格" prop="price">
                <el-input v-model="ruleForm.price"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    name: 'addGoods',
    props: {
        // dialogFormVisible: Boolean
    },
    data () {
        return {
            ruleForm: {
                date1: '',
                username: '',
                price: '',
                type: ''
            },
            rules:{
                date1: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
                username: [{required: true, message: '请输入姓名', trigger: 'blur' }],
                price: [{required: true, message: '请输入价格', trigger: 'blur' },{
                    validator: (rule, value, callback)=>{
                        if( /^\d{1,}$/.test(value) == false ){
                            callback(new Error('请输入数字'))
                        }else{
                            callback()
                        }
                    }
                }],
                type: [{required: true, message: '请输入0-5间的数字', trigger: 'blur' },{
                    validator: (rule, value, callback)=>{
                        if( /^[0-5]$/.test(value) == false ){
                            callback(new Error('请输入0-5间数字'))
                        }else{
                            callback()
                        }
                    }
                }]
            }
        }
    },
    methods: {
        resetForm () {
            this.$emit("changeDialogFormVisible")
        },
        submitForm () {
            
        }
    }
}
</script>
<style lang="less">
    
</style>
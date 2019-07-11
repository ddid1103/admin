<template>
    <div class="login">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
             <h3 class="title">系统登录</h3>
            <el-form-item label="用户名" prop="username">
                <el-input prefix-icon="el-icon-user" type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="pass">
                <el-input prefix-icon="el-icon-cherry" type="password" v-model="ruleForm.pass" autocomplete="off" show-password></el-input>
            </el-form-item>

            <el-form-item label="确认密码" prop="checkPass">
                <el-input prefix-icon="el-icon-cherry" type="password" v-model="ruleForm.checkPass" autocomplete="off" show-password></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    name: 'login',
    data () {
        return {
            ruleForm: {
                username: '',
                pass: '',
                checkPass: '',
            },
            rules: {
                username: [
                    {required: true, message: '用户名不能为空', trigger: 'blur'},
                    {validator: (rule, value, callback)=>{
                        if( /^[a-zA-Z]\d{3,}/g.test(value) == false ){
                            callback(new Error('首字母必须是字母'))
                        }else{
                            callback()
                        }
                    }, }
                    ],
                pass: [{required: true, message: '密码不能为空', trigger: 'blur'},
                    {validator: (rule, value, callback)=>{
                        if(/^\d{5,}$/.test(value)==false){
                            callback(new Error('数字不能少于五位'))
                        }else{
                            callback()
                        }
                    },}
                    ],
                checkPass: [{required: true, message: '验证密码不能为空', trigger: 'blur'},
                            {validator: (rule, value, callback)=>{
                                if(value != this.ruleForm.pass){
                                    callback(new Error('两次密码必须一致'))
                                }else{
                                    callback()
                                }
                            }}
                         ],
            }
        }
    },
    methods: {
        submitForm(formName){
            this.$refs[formName].validate((valid)=>{
                if(valid){
                    this.$router.push("/admin/home")
                }
            })
        },
        resetForm(formName){
            this.$refs.formName.resetFields()
        }
    }
}
</script>
<style lang="less" scoped>
    .login{
        width:450px;
        position:absolute;
        left:50%;
        top:50%;
        margin-left: -250px;
        margin-top: -176px;
      
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 16px;
        .title{
            text-align: center;
        }

    }
</style>
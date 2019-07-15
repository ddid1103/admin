<template>
    <div class="login-wrapper">
        <el-card class="login">
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
        </el-card>
    </div>
</template>
<script>
// import { Message } from 'element-ui';
export default {
    name: 'login',
    data () {
        return {
            ruleForm: {
                username: 'admin',
                pass: '00000',
                checkPass: '00000',
            },
            rules: {
                username: [
                    {required: true, message: '用户名不能为空', trigger: 'blur'},
                    {validator: (rule, value, callback)=>{
                        if( /[a-zA-Z]{3,}/g.test(value) == false ){
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
                    // this.$router.push("/admin/home")
                // this.$axios.post("https://www.daxunxun.com/users/login",{username:18703649753,password:123456})
                //     .then(data => console.log(data))
                    // Message.success( '登录成功2秒钟后跳转', 2000, ()=>{
                    //     this.$router.push("/admin/home")
                    // })
                    this.$axios.get('https://www.easy-mock.com/mock/5d26e144f329754f68b5bf21/example/login')
                               .then((data)=>{
                                    if(data.data.err == 0){
                                        this.$message({
                                            showClose: true,
                                            message: '登录成功2秒钟后跳转',
                                            duration: 2000,
                                            type: 'success',
                                            onClose: () => {
                                                this.$router.push("/admin/home")
                                            }
                                        })
                                    }else{
                                        this.$message({
                                            showClose: true,
                                            message: '登录失败',
                                            duration: 2000,
                                            type: 'err',
                                        })   
                                    }
                               })
                    // this.$message({
                    //         showClose: true,
                    //         message: '登录成功3秒钟后跳转',
                    //         duration: 3000,
                    //         type: 'success',
                    //         onClose: () => {
                    //             this.$router.push("/admin/home")
                    //         }
                    //     })
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
.login-wrapper{//#app需设置height:100%
    width: 100%;
    height: 100%;
    background-color: #3669c9;
    overflow: hidden;
    background: url(http://qnimage.hydrodent.cn/2019-07-08_5d23046aefe24.jpg) no-repeat;
    background-size: 100% 100%;
    // height: 200px;
    // width: 200px;
    // background: red;
    .login{
        width:450px;
        position:absolute;
        left:50%;
        top:50%;
        margin-left: -250px;
        margin-top: -176px;
        padding: 16px;
        border: 1px solid #ccc;
        border-radius: 16px;
        .title{
            text-align: center;
        }

    }
}

</style>
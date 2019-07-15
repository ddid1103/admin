<template>
    <div class="addList">
        <el-row style="margin-top:20px;">
            <el-col :span="14" :offset="4">
                <header class="form-header">选择食品种类</header>
                <el-form :model="categoryForm" status-icon :rules="rules" ref="categoryForm" label-width="110px" class="form">
                    <el-row class="category_select">
                        <el-form-item label="食品种类" prop="categorySelect" >
                            <el-select v-model="categoryForm.categorySelect" placeholder="请选择食品种类" style="width:100%;">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-row>
                    <transition name="fade">
                    <el-row class="add_category_row" v-show="!showAddCategory">
                        <div class="add_category"> 
                            <el-form-item label="食品种类" prop="name">
                                <el-input type="password" v-model="categoryForm.name" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="种类描述" prop="description">
                                <el-input type="password" v-model="categoryForm.description" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitcategoryForm('categoryForm')">提交</el-button>
                            </el-form-item> 
                        </div>      
                    </el-row>
                   </transition>
                    <div class="add_category_button" @click="addCategoryFun">
                        <span class="el-icon-caret-bottom .edit_icon" v-if="showAddCategory"></span>
                        <span class="el-icon-caret-top .edit_icon" v-else></span>
                        <span>添加食品种类</span>
                    </div>
                </el-form>
                <header class="form-header">添加食品</header>
                <el-form ref="foodForm" :model="foodForm" :rules="foodrules" label-width="80px">
                    <el-form-item label="食品名称" prop="name">
                        <el-input v-model="foodForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="食品活动" prop="activity">
                        <el-input v-model="foodForm.activity"></el-input>
                    </el-form-item>
                    <el-form-item label="活动时间">
                        <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="foodForm.date1" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                        <el-time-picker placeholder="选择时间" v-model="foodForm.date2" style="width: 100%;"></el-time-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="食品特点">
                        <el-select v-model="foodForm.attributes" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                   
                    <el-form-item label="食品规格">
                        <el-radio-group >
                            <el-radio label="单规格"></el-radio>
                            <el-radio label="多规格"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'addList',
    data () {
        return {
            imageUrl: '',
            categoryForm: {
                categorySelect: '',
                name: '',
                description: '',
            },
            foodForm: {
                name: '',
                activity: '',
                date1: '',
                date2: '',
            },
            rules: {
                categorySelect: [{}],
                name: [{}],
                checkPass: [{}]
            },
            foodrules: {
                name: [{}],
                date1: [{}],
                date2: [{}]
            },
            showAddCategory: true,
        }
    },
    methods: {
        addCategoryFun () {
            this.showAddCategory = !this.showAddCategory
            
        },
        submitcategoryForm () {

        },
        onSubmit () {

        },
        handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
    
}
</script>
<style lang="less">
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
    .fade-enter-active, .fade-leave-active{
        transition: opacity 400ms;
    }
    .addList{
        .form-header{
            margin-bottom: 10px;
        }
        .form{
            min-width: 400px;
            margin-bottom: 30px;
            &:hover{
                box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
                border-radius: 6px;
                transition: all 400ms;
            }
            .category_select{
                padding: 10px 30px 10px 10px;
                border: 1px solid #eaeefb;
                border-top-left-radius: 6px;
                border-top-right-radius: 6px;
            }
            .add_category_row{
                overflow: hidden;
                transition: all 400ms;
                background: #f9fafc;
                .add_category{
                    background: #f9fafc;
                    padding: 10px 30px 0px 10px;
                    border: 1px solid #eaeefb;
                    border-top: none;
                    transition: all 400ms;
                }
            }
            .add_category_button{
                padding: 10px 30px 10px 10px;
                border: 1px solid #eaeefb;
                border-top: none;
                border-bottom-left-radius: 6px;
                border-bottom-right-radius: 6px;
                transition: all 400ms;
                &:hover{
                    background: #f9fafc;
                    cursor: pointer;
                    span, .edit_icon{
                        color: #20a0ff;
                    }
                    // transition: all 400ms;
                }
                span{
                    font-size:14px;
                    color: #999;
                    transition: all 400ms;
                }
                .edit_icon{
                    color: #ccc;
                    transition: all 400ms;
                }
            }
        }
    }
</style>
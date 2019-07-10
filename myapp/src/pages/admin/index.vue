<template>
    <el-container>
        <el-header>这里是xx后台管理系统</el-header>
        <el-container>
            <el-aside width="200px" >
                
                <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <!-- <el-submenu index="1">
                    <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                    </template>
                    <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu> -->
                <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <router-link tag="span" to="/admin/user"  slot="title">用户管理</router-link>
                </el-menu-item>
                <el-menu-item index="2" >
                    <i class="el-icon-document"></i>
                    <router-link tag="span" to="/admin/movie" slot="title">电影管理</router-link>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-setting"></i>
                    <router-link tag="span" to="/admin/cinema" slot="title">影院管理</router-link>
                </el-menu-item>
                </el-menu>
            
            </el-aside>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>

</template>
<script>
export default {
    name: 'admin',
    data () {
        return {
            
        }
    },
    methods: {
       
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    
    }

}
</script>
<style lang="less" scoped>
    .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    padding-left:60px;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
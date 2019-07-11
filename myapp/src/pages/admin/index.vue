<template>
    <el-container>
        <el-header>这里是xx后台管理系统</el-header>
        <el-container>
            <el-aside width="200px" >
              <el-menu
                :default-active="activeIndex"
                background-color="#545c64"
                class="el-menu-vertical-demo"
                text-color="#fff"
                active-text-color="#ffd04b"
                router
                style="height:100vh;width:230px;float:left;overflow-y:auto;"
              >
                <Navleft :navData="navData"></Navleft>
              </el-menu>
                 
            </el-aside>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>

</template>
<script>
import menuData from "@/components/aside/rootMenu"
import Navleft from '@/components/aside/Navleft'
export default {
    name: 'admin',
    components: {
      Navleft
    },
    data () {
        return {
            activeIndex: 'aa',
            navData: menuData.menuData
        }
    },
    methods: {
       
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    
    },
    mounted(){
      // let start = window.location.href.lastIndexOf('/');
      // let path = window.location.href.slice(start+1);
      // this.activeIndex = path;
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
    // background-color: #D3DCE6;
    background-color: rgb(84, 92, 100);
    color: #333;
    text-align: center;
    line-height: 200px;
    height: calc(100vh);
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
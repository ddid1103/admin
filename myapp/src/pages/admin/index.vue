<template>
    <el-container style="height:100%;">
        <el-header @><head-top></head-top></el-header>
        <el-container>
            <el-aside width="200px" >
              <el-menu
                :default-active="activeIndex"
                background-color="#545c64"
                class="el-menu-vertical-demo"
                text-color="#fff"
                active-text-color="#ffd04b"
                router
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
import HeadTop from '@/components/HeadTop'
export default {
    name: 'admin',
    components: {
      Navleft,
      HeadTop
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
    .el-menu-vertical-demo{
      border: none; 
    }
 
    .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    padding-left:20px;
    line-height: 60px;
  }
  
  .el-aside {
    // background-color: #D3DCE6;
    background-color: rgb(84, 92, 100);
    color: #333;
    text-align: center;
    line-height: 200px;
    // height: calc(100vh);
    // height: calc(100vh - 60px);
    // min-height: 100%;
   
  }
  
  .el-main {
    height: 100%;
    overflow: auto;
    background-color: #fff;
    color: #333;
    text-align: center;
    padding: 0;
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
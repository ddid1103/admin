<template>
    <div class="navleft">
        <template v-for="item in navData">
     <!--<el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        > -->

         <!-- 最后一级菜单 -->
        <el-menu-item
          v-if="!item.childs&&item.entity "
          :key="item.entity.id"
          :data="item"
          :index="item.entity.name"
          :route="item.entity.value"
          >
            <i :class="item.entity.icon"></i>
            <span slot="title">{{item.entity.alias}}</span>
        </el-menu-item>   
           <!-- 此菜单下还有子菜单 -->
        <el-submenu 
        v-if="item.childs&&item.entity"
        :data="item"
        :index="item.entity.name" 
        :key="item.entity.id">
            <template slot="title">
                <i :class="item.entity.icon"></i>
                <span>{{item.entity.alias}}</span>
            </template>
            <navleft :navData="item.childs"></navleft>
        </el-submenu>
           
    <!-- </el-menu> -->
    </template>
    </div>
</template>
<script>

// console.log(menuData)
export default {
    name: 'navleft',
     props: ['navData'],
    data () {
        return {
           
        }
    },
    computed: {
       
    },
    mounted () {
        
    }
 }
</script>
<style lang="less">
    .el-menu-vertical-demo{
        text-align: left;
    }
   
</style>
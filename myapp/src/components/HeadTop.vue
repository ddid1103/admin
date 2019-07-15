<template>
    <div class="headWrapper">
        <h5>这里是<i>白雪公主</i>后台管理系统</h5>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index"
            :to="$route.path"
            >{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-dropdown>
            <div class="el-dropdown-link">
            </div>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="home">首页</el-dropdown-item>
                <el-dropdown-item command="signout">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<script>
export default {
    name: 'headTop',
    methods: {
        home () {
            thia.$router.path("/admin/home")
        },
        signout () {

        }
    },
    mounted () {
        console.log(this.$route)
    }

}
</script>
<style lang="less">
    .headWrapper{
        display: flex;
        height: 60px;
        align-items: center;
        h5{
            margin-right: 60px;
            i{
                font-style: normal;
                color:#fff;
            }
        }
        .el-icon-arrow-right{
            color: #eee;
        }
        .bread{
            flex: 1;
        }
        .el-dropdown-link {
            cursor: pointer;
            height: 46px;
            width: 46px;
            border-radius: 50%;
            background: pink;
            background: url("http://img0.imgtn.bdimg.com/it/u=445718494,2067117980&fm=26&gp=0.jpg") no-repeat;
            background-size: 100% 100%;
            margin-right: 30px;
       }
        .el-icon-arrow-down {
            font-size: 12px;
        }
    }
</style>
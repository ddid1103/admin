<template>
    <div class="goods">
        <div class="header">
            <el-row class="goods-search">
            <el-col :span="6" class="grid">
                <el-input v-model="input" placeholder="请输入内容" size="mini"></el-input>
            </el-col>
            <el-col :span="1" class="grid">
                <el-button type="success" icon="el-icon-search" size="mini">搜索</el-button>
            </el-col>
        </el-row>
        </div>
        <el-card shadow="never" class="container">
            <el-button type="success" size="mini" round class="addGoods" @click="addGoods">添加商品</el-button>
            <el-table
                :data="tableData.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)"
                border
                height="390"
                style="width: 100%"
                v-loading="loading"
                element-loading-text="拼命加载中"
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(0, 0, 0, 0.8)"
                >
                <!--勾选框-->
            <el-table-column type="selection" width="55">
            </el-table-column>
                <el-table-column
                    fixed
                    prop="_id"
                    label="id"
                    align="center"
                    width="80">
                </el-table-column>
                <el-table-column
                    sortable
                    prop="ctime"
                    label="日期"
                    align="center"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    align="center"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="type"
                    label="type"
                    align="center"
                    width="140"
                    >
                    <template slot-scope="scope">
                        {{scope.row.typeName[scope.row.type]}}
                    </template>
                </el-table-column>
                <el-table-column
                    prop="price"
                    label="价格"
                    align="center"
                    width="90"
                    >
                </el-table-column>
                <el-table-column
                    prop="imgPath"
                    label="图片"
                    align="center"
                    width="100"
                    >
                    <template slot-scope="scope">
                        <img :src="scope.row.imgPath" class="head_pic">
                    </template>
                </el-table-column>
                <el-table-column
                    prop="imgPath"
                    label="图片"
                    align="center"
                    width="100"
                    >
                    <template slot-scope="scope">
                        <img :src="scope.row.imgPath" class="head_pic">
                    </template>
                </el-table-column>
                 <el-table-column
                    prop="imgPath"
                    label="图片"
                    align="center"
                    width="100"
                    >
                    <template slot-scope="scope">
                        <img :src="scope.row.imgPath" class="head_pic">
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="180" align="center" fixed="right">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        
                        <el-popover
                        :ref="`popover-${scope.$index}`" 
                        placement="top"
                        width="120"
                       >
                        <p>确定删除吗？</p>
                        <div style="text-align: right; margin: 0">
                            <el-button size="mini" type="text" @click="scope._self.$refs[`popover-${scope.$index}`].doClose()">取消</el-button>
                            <el-button type="primary" size="mini" @click="handleDelete(scope)"
                            >确定</el-button>
                        </div>
                        <el-button
                        size="mini"
                        type="danger"
                        slot="reference"
                        v-popover:popoverDel
                        >删除</el-button>
                        </el-popover>

                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
            :page-size="pageSize"
            class="pagination"
            background
            layout="prev, pager, next"
            :current-page="currentPage"
            @current-change="handleCurrentChange"
            :total="38">
            </el-pagination>
            <el-dialog title="添加商品" :visible.sync="dialogFormVisible">
                <add-goods @changeDialogFormVisible="handleAddCancel"></add-goods>
                <!-- <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div> -->
            </el-dialog>
        </el-card>
        <div class="footer">
            bottom
        </div>
    </div>
</template>
<script>
import AddGoods from '@/components/addgoods/AddGoods'
export default {
    name: 'goods',
    components: {
        AddGoods
    },
    data() {
        return {
            loading: true,
            tableData: [],
            currentPage: 1,
            pageSize: 4,
            visible: false,
            input: '',
            dialogFormVisible: false
        }
      },
      methods: {
          handleCurrentChange(val){
            //   this.$axios.get('https://www.easy-mock.com/mock/5d26e144f329754f68b5bf21/example/getproduct')
            //   .then((data)=>{
            //       console.log(data)
            //       this.tableData=data.data.data.slice((val-1)*3,val*3)
            //       this.loading=false
            //   })
            this.currentPage = val
          },
          handleEdit(index,row){//index是下标，row是这一行的所有信息
            //   console.log(row)
          },
          handleDelete(scope){
              let arr = []
              this.tableData.map((item,index)=>{
                  if( item._id == scope.row._id ){
                    this.tableData.splice(index,1)
                  }
              })
              scope._self.$refs[`popover-${scope.$index}`].doClose()
              console.log(this.tableData)
          },
          addGoods () {
              this.dialogFormVisible = true
          },
          handleAddCancel(){
              this.dialogFormVisible = false
          }
      },
      created () {
          this.$axios.get('https://www.easy-mock.com/mock/5d26e144f329754f68b5bf21/example/getproduct')
              .then((data)=>{
                //   console.log(data)
                  this.tableData=data.data.data
                  this.loading=false
              })
      }
}
</script>
<style lang="less" scoped>
    .goods{
        .header{
            height: 8vh;
            overflow:hidden;
            .goods-search{
                margin: 10px 0 0 20px;
            }
        }
        .container{
            height: calc(84vh - 60px);
            background-color: #EFF2F7;
            // overflow: scroll;
            .head_pic{
                width: 60px;
                height: 50px;
            }
            .pagination{
                margin-top: 20px;
            }
            .addGoods{
                margin-right:2000px;
                margin-bottom:2px;
            }
        }
        .footer{
            height: 8vh;
        }
    }
</style>
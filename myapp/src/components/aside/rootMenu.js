export default {
    menuData: [
        {
          //一级
          entity: {
            id: 0,
            name: "aa",
            icon: "el-icon-message",
            alias: "一级菜单",
            value: "/admin/home"
          }
        },
        {
          //一级
          entity: {
            id: 1,
            name: "systemManage",
            icon: "el-icon-message",
            alias: "两级菜单"
          },
          //二级
          childs: [
            {
              entity: {
                id: 3,
                name: "authManage",
                icon: "el-icon-loading",
                alias: "权限管理",
                value: { path: "/admin/root" }
              }
            },
            {
              entity: {
                id: 4,
                name: "roleManage",
                icon: "el-icon-bell",
                alias: "角色管理",
                value: "/admin/user"
              }
            },
            {
              entity: {
                id: 2,
                name: "menuManage",
                icon: "el-icon-edit",
                alias: "菜单管理",
                value: "/system/menu"
              }
            },
            {
              entity: {
                id: 5,
                name: "groupManage",
                icon: "el-icon-mobile-phone\r\n",
                alias: "分组管理",
                value: "/system/group"
              }
            }
          ]
        },
        {
          //一级
          entity: {
            id: 6,
            name: "userManage",
            icon: "el-icon-news",
            alias: "图标管理"
          },
          //二级
          childs: [
            {
              entity: {
                id: 7,
                name: "accountManage",
                icon: "el-icon-phone-outline\r\n",
                alias: "饼状图",
                value: ""
              },
              //三级
              childs: [
                {
                  entity: {
                    id: 14,
                    name: "emailManage",
                    icon: "el-icon-sold-out\r\n",
                    alias: "饼一",
                    value: "admin/echart/bin/1"
                  }
                },
                {
                  entity: {
                    id: 13,
                    name: "passManage",
                    icon: "el-icon-service\r\n",
                    alias: "饼二",
                    value: "admin/echart/bin/2"
                  }
                }
              ]
            },
            {
              entity: {
                id: 8,
                name: "integralManage",
                icon: "el-icon-picture",
                alias: "积分管理",

                value: "/user/integral"
              }
            }
          ]
        },
        {
          //一级
          entity: {
            id: 40,

            name: "contentManage",
            icon: "el-icon-rank",
            alias: "四级菜单"
          },
          //二级
          childs: [
            {
              entity: {
                id: 41,
                name: "classifyManage2",
                icon: "el-icon-printer",
                alias: "分类管理"
              },
              //三级
              childs: [
                {
                  entity: {
                    id: 42,
                    name: "classifyManage3",
                    icon: "el-icon-printer",
                    alias: "分类管理"
                  },
                  //四级
                  childs: [
                    {
                      entity: {
                        id: 43,
                        name: "classifyManage4",
                        icon: "el-icon-printer",
                        alias: "分类管理",
                        value: "/content/classify"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
}



// export default {
//     'menuData': [
//         {   
//             'id':'001',
//             'name': '首页',
//             'path': '/home' 
//         },
//         {   
//             'id':'002',
//             'name': '设置',
//             'path': '/setting' 
//          },
//          {
//             'id':'003',
//             'name': '用户管理',
//             'path': '/user',
//             'children': [
//                 {
//                     'name': '用户添加',
//                     'path': '/user/add'
//                 },
//                 {
//                     'name': '管理员管理',
//                     'path': '/user/root'
//                 }   
//             ] 
//          },
//          {
//             'id':'004',
//             'name': '图标管理',
//             'path': '/echart',
//             'children': [
//                 {
//                     'name': '饼状图',
//                     'path': '/echart/bing'
//                 },
//                 {
//                     'name': '折线图',
//                     'path': '/echart/zhe'
//                 }   
//             ] 
//          },
//     ]
// }
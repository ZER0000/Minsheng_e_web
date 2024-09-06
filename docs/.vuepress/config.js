module.exports = {
  title: '民生e方案平台',
  description: 'XXX',
  base: '/Minsheng_e_web/',
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    subSidebar: 'auto',
    nav: [
      // { text: "首页", link: "/" },
      { text: "补充/修订模块内容", link: "/" },
      { text: "权限配置", link: "/" },
      { text: "导出方案", link: "/" },
      
      {
        // text: "补充/修订模块内容",
        // items: [
        //   { text: "申请部门", link: "/" },
        //   { text: "申请人", link: "" },
        //   { text: "申请类型", link: "" }
        // ]
      }
    ],
    sidebar: [
      {
        title: "民生银行简介",
        path: "/",
        collapsable: true,  // 是否折叠
        children: [
          { title: "□网点建设及人员情况", path: "/handbook/民生银行简介_网点建设及人员情况" },
          { title: "□理念定位", path: "/handbook/民生银行简介_理念定位" },
          { title: "□荣誉奖章", path: "/handbook/民生银行简介_荣誉奖章" }
        ],
      },
      {
        title: "民生银行北京分行",
        path: "/",
        collapsable: true,  // 是否折叠
        children: [
          { title: "□网点建设及人员情况", path: "/handbook/民生银行北京分行_网点建设及人员情况" },
          { title: "□荣誉奖章", path: "/handbook/民生银行北京分行_荣誉奖章" },
          { title: "□特色优势", path: "/handbook/民生银行北京分行_特色优势" }
        ],
      },
      {
        title: "客群特色",
        path: "/",
        collapsable: true,  // 是否折叠
        children: [
          { title: "□战略客群", path: "/" },
          { title: "□同业客群", path: "/" },
          { title: "□机构客群", path: "/handbook/客群特色_机构客群" },
          { title: "□小微客群", path: "/" },
          { title: "□个人客群", path: "/" },
          { title: "□私银客群", path: "/" }
        ],
      },
      {
        title: "产品服务",
        path: "/",
        collapsable: true,  // 是否折叠
        children: [
          { title: "□供应链", path: "/handbook/产品服务_供应链" },
          { title: "□代发工资", path: "/" },
          { title: "□商户收单", path: "/" },
          { title: "□贷款授信", path: "/" },
          { title: "□年金托管", path: "/handbook/产品服务_年金托管" },
        ],
      },
      {
        title: "保值增值",
        path: "/",
        collapsable: true,  // 是否折叠
        children: [
          { title: "□公司资金存放", path: "/" },
          { title: "□个人理财", path: "/" },
          { title: "□保险", path: "/" },
          { title: "□基金", path: "/" },
        ],
      },
      {
        title: "民生工程",
        path: "/",
        collapsable: true,  // 是否折叠
        children: [
          { title: "□第三代社保卡", path: "/" },
          { title: "□医保移动支付", path: "/" },
        ],
      },
      {
        title: "党团共建公益交流",
        path: "/",
        collapsable: true,  // 是否折叠
        children: [
          { title: "□民生美术馆", path: "/" },
          { title: "□河南滑县", path: "/" },
        ],
      },
      {
        title: "民生银行北京分行介绍",
        path: "/handbook/1",
        collapsable: true,
        children: [
          { title: "第一篇", path: "/handbook/1" },
          { title: "第二篇", path: "/handbook/2" },
        ]
      }
    ]
  }
}

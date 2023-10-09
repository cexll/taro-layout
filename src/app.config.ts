export default {
  pages: [
    'pages/index/index',
    'pages/cate/index',
    'pages/cart/index',
    'pages/my/index'
  ],
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        selectedIconPath: 'assets/images/tabbar_home_on.png',
        iconPath: 'assets/images/tabbar_home.png',
        text: '首页'
      },
      {
        pagePath: 'pages/cate/index',
        selectedIconPath: 'assets/images/tabbar_cate_on.png',
        iconPath: 'assets/images/tabbar_cate.png',
        text: '分类'
      },
      {
        pagePath: 'pages/cart/index',
        selectedIconPath: 'assets/images/tabbar_cart_on.png',
        iconPath: 'assets/images/tabbar_cart.png',
        text: '购物车'
      },
      {
        pagePath: 'pages/my/index',
        selectedIconPath: 'assets/images/tabbar_my_on.png',
        iconPath: 'assets/images/tabbar_my.png',
        text: '个人中心'
      }
    ],
    color: '#000',
    selectedColor: '#DC143C',
    backgroundColor: '#ffffff',
    borderStyle: 'white',
    custom: true
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  rn: {
    screenOptions: {
      // 设置页面的options，参考https://reactnavigation.org/docs/stack-navigator/#options
      shadowOffset: { width: 0, height: 0 },
      borderWidth: 0,
      elevation: 0,
      shadowOpacity: 1,
      borderBottomWidth: 0
    }
  }
};

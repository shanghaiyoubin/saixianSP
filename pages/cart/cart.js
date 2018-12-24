const app = getApp()
Page({
  data: {
    staticImg: app.globalData.staticImg,
    goods: [
      {
        code: "0001",
        goodsName: '赛鲜牛肉煎小排',
        goodsApply: '肉质鲜美',
        goodsPrice: '178.99',
        num: '1',
      },
      {
        code: "0002",
        goodsName: '名字你工作',
        goodsApply: '适用于各种型号的车辆',
        goodsPrice: '500',
        num: '1',
      },
      {
        code: "0003",
        goodsName: '汽车玻璃水大瓶雨刷精车用雨刮水清洁剂清洗液除油膜 2L……',
        goodsApply: '适用于各种型号的车辆',
        goodsPrice: '100',
        num: '1',
      },
      {
        code: "0004",
        goodsName: '汽车玻璃水大瓶雨刷精车用雨刮水清洁剂清洗液除油膜 2L……',
        goodsApply: '适用于各种型号的车辆',
        goodsPrice: '100',
        num: '1',
      }

      ,
      {
        code: "0005",
        goodsName: '汽车玻璃水大瓶雨刷精车用雨刮水清洁剂清洗液除油膜 2L……',
        goodsApply: '适用于各种型号的车辆',
        goodsPrice: '200',
        num: '2',
      },

    ],
    totalPrice: '0.00',
    num: '0',
  },
  onLoad: function (options) {
    console.log(1)
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        console.log("onLoad=====");

        var userInfo = res.userInfo;
        that.setData({
          nickName: userInfo.nickName,
          avatarUrl: userInfo.avatarUrl,
        })
      }, fail: function () {
        wx.showModal({
          title: '提示',
          content: '您点击了拒绝授权,将无法正常显示个人信息,点击确定重新获取授权。',
          success: function (res) {
            if (res.confirm) {
              wx.openSetting({
                success: (res) => {
                  if (res.authSetting["scope.userInfo"]) {
                    ////如果用户重新同意了授权登录哈哈哈
                    wx.getUserInfo({
                      success: function (res) {
                        console.log(res)
                        var userInfo = res.userInfo;
                        that.setData({
                          nickName: userInfo.nickName,
                          avatarUrl: userInfo.avatarUrl,
                        })
                      }
                    })
                  }
                }, fail: function (res) {

                }
              })

            }
          }
        })
      }, complete: function (res) {


      }
    })
   
  },
  // 单个选中
  change: function (e) {
    var that = this;
    const index = e.currentTarget.dataset.index; // 获取data- 传进来的index
    var goods = that.data.goods; // 获取购物车列表
    var selectAllStatus = that.data.selectAllStatus; //获取全选状态
    const selected = goods[index].selected; // 获取当前商品的选中状态
    goods[index].selected = !selected; // 改变状态
    goods[index]['selected'] = !selected;
    //判断有一个没有选中，全选取消
    var j = 0;
    for (var i = 0; i < goods.length; i++) {
      if (goods[i].selected == true) {
        j++;
        continue;
      } else {
        selectAllStatus = false;
      }
    }
    if (j == goods.length) {
      selectAllStatus = true;
    }
    //如果都选中，全选也选中实现
    that.setData({
      goods: goods,
      selectAllStatus: selectAllStatus,
    });
    //调用计算数目方法
    that.countNum()
    //计算金额
    that.count()
  },
  // 全选事件
  selectAll: function (e) {
    var that = this;
    var selectAllStatus = that.data.selectAllStatus; // 是否全选状态
    selectAllStatus = !selectAllStatus;
    var goods = that.data.goods;
    for (var i = 0; i < goods.length; i++) {
      goods[i].selected = selectAllStatus;
      goods[i]['selected'] = selectAllStatus; // 改变所有商品状态
    }
    that.setData({
      selectAllStatus: selectAllStatus,
      goods: goods
    });
    //调用计算数目方法
    that.countNum()
    //计算金额
    that.count()
  },
  //加法
  addtion: function (e) {
    console.log(e)
    var that = this
    //得到下标
    var index = e.currentTarget.dataset.index
    //得到点击的值
    var num = e.currentTarget.dataset.num
    //默认99件最多
    if (num < 100) {
      num++
    }
    //把新的值给新的数组
    var newList = that.data.goods
    newList[index].num = num



    //把新的数组传给前台
    that.setData({
      goods: newList
    })
    //调用计算数目方法
    that.countNum()
    //计算金额
    that.count()
  },
  //减法
  subtraction: function (e) {
    var that = this
    //得到下标
    var index = e.currentTarget.dataset.index
    //得到点击的值
    var num = e.currentTarget.dataset.num
    //把新的值给新的数组
    var newList = that.data.goods
    //当1件时，点击移除
    if (num == 1) {
      num == 1
    } else {
      num--
      newList[index].num = num
    }
    //把新的数组传给前台
    that.setData({
      goods: newList
    })
    //调用计算数目方法
    that.countNum()
    //计算金额
    that.count()
  },
  //计算数量
  countNum: function () {
    var that = this
    //遍历数组，把既选中的num加起来
    var newList = that.data.goods
    var allNum = 0
    for (var i = 0; i < newList.length; i++) {
      if (newList[i].selected) {
        allNum += parseInt(newList[i].num)
      }
    }
    that.setData({
      num: allNum
    })
  },
  //计算金额方法
  count: function () {
    var that = this
    //选中的订单，数量*价格加起来
    var goodsPrice = parseFloat(that.data.goods.goodsPrice)
    var newList = that.data.goods
    var newCount = 0.00
    for (var i = 0; i < newList.length; i++) {
      if (newList[i].selected) {
        newCount += newList[i].goodsPrice * newList[i].num
      }
    }
    that.setData({
      // newCount: newCount.toFixed(2),
      totalPrice: newCount,
    })
  },
})
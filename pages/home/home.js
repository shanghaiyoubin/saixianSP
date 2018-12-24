//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    vertical2:true,
    autoplay2: false,
    interval2: 1000,
    duration2: 500,
    circular2:true

  },
  /**
   * 接口调用成功处理
   */
  successFun: function (res, selfObj) {
    console.log(res)
    selfObj.setData({
      expressData: res,
    })
  },
  /**
   * 接口调用失败处理
   */
  failFun: function (res, selfObj) {
    console.log('failFun', res)
  },
  onLoad: function () {
    // var params = {
    //   mtype: app.addressPath.Address.Mtype,
    //   appVersionNumber: app.addressPath.Address.AppVersionNumber,
    //   promotionId: '2',
    //   showType: 'PERSON',
    // }
    var url = app.addressPath.Address.SX_Select;
    var params = app.addressPath.params;
        params={
          promotionId:'2',
          showType:'PERSON',
        }
    //@todo 网络请求API数据
    app.request.requestGetApi(url, params, this, this.successFun, this.failFun);





    var that = this;
    // banner
    wx.request({
      url: 'http://test.cyberfresh.cn/m/mobile/guess/guesslike?mtype=wx&promotionId=2&appVersionNumber=2.2.2&showType=PERSON', 
      
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res)
        console.log(res.data.data.commodity)
        that.setData({
          movies: res.data.data.commodity
        });
      
         

      }
    });
    wx.request({
      url: 'http://test.cyberfresh.cn/m/classify/get_home_classify',
      data: {
        mtype: 'WX',
        showType: 'SOGO'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res)

        that.setData({
          classifycon: res.data.data
        });



      }
    });


  },
 
})

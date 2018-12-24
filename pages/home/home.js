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
    autoplay2: true,
    interval2: 5000,
    duration2: 500,
    circular2:true

  },
  /**
   * 接口调用成功处理
   */
  successFun: function (res, selfObj) {
    console.log(res)
    if (selfObj == "banner"){
      this.setData({
        bannerdetail: res,
      })
      }else if (selfObj == "classification"){
      this.setData({
        classfication_info: res,
      })
    } else if (selfObj == "broadcast"){
      this.setData({
        broadcast_info: res,
      })
    }
    
  },
  /**
   * 接口调用失败处理
   */
  failFun: function (res, selfObj) {
    console.log('failFun', res)
  },
  onLoad: function () {
  //banner
    var url = app.addressPath.Address.SX_banner;
    var params = app.addressPath.params;
        params={
          showType:'SOGO',
        }
    //@todo 网络请求API数据
    app.request.requestGetApi(url, params, "banner", this.successFun, this.failFun);
    //分类列表
    var url2 = app.addressPath.Address.SX_classification;
    var params2 = app.addressPath.params;
    params2 = {
      showType: 'SOGO',
    }
    //@todo 网络请求API数据
    app.request.requestPostApi(url2, params2, "classification", this.successFun, this.failFun);
    // 赛鲜播报
    var url3 = app.addressPath.Address.SX_broadcast;
    var params3 = app.addressPath.params;
    params3 = {
      showType: 'SOGO',
    }
    //@todo 网络请求API数据
    app.request.requestPostApi(url3, params3, "broadcast", this.successFun, this.failFun);




    var that = this;
    // banner
    // wx.request({
    //   url: 'http://test.cyberfresh.cn/m/mobile/guess/guesslike?mtype=wx&promotionId=2&appVersionNumber=2.2.2&showType=PERSON', 
      
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success(res) {
    //     console.log(res)
    //     console.log(res.data.data.commodity)
    //     that.setData({
    //       movies: res.data.data.commodity
    //     });
      
         

    //   }
    // });
    // wx.request({
    //   url: 'http://test.cyberfresh.cn/m/classify/get_home_classify',
    //   data: {
    //     mtype: 'WX',
    //     showType: 'SOGO'
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success(res) {
    //     console.log(res)

    //     that.setData({
    //       classifycon: res.data.data
    //     });



    //   }
    // });


  },
 
})

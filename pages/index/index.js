//index.js
//获取应用实例
const app = getApp()
const order = ['red', 'yellow', 'blue', 'green', 'red']
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
  upper(e) {
    console.log(e)
  },
  lower(e) {
    console.log(e)
  },
  scroll(e) {
    console.log(e)
  },
  tap(e) {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
    console.log("mqwhrejkh")
  },
 
  onLoad: function () {
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

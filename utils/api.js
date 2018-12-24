// API请求接口类封装


/**
 * POST请求API
 * @param  {String}   url         接口地址
 * @param  {Object}   params      请求的参数
 * @param  {Object}   sourceObj   来源对象
 * @param  {Function} successFun  接口调用成功返回的回调函数
 * @param  {Function} failFun     接口调用失败的回调函数
 * @param  {Function} completeFun 接口调用结束的回调函数(调用成功、失败都会执行)
 */
function requestPostApi(url, params, sourceObj, successFun, failFun, completeFun) {
  requestApi(url, params, 'POST', sourceObj, successFun, failFun, completeFun)
}

/**
 * GET请求API
 * @param  {String}   url         接口地址
 * @param  {Object}   params      请求的参数
 * @param  {Object}   sourceObj   来源对象
 * @param  {Function} successFun  接口调用成功返回的回调函数
 * @param  {Function} failFun     接口调用失败的回调函数
 * @param  {Function} completeFun 接口调用结束的回调函数(调用成功、失败都会执行)
 */
function requestGetApi(url, params, sourceObj, successFun, failFun, completeFun) {
  requestApi(url, params, 'GET', sourceObj, successFun, failFun, completeFun)
}

/**
 * 请求API
 * @param  {String}   url         接口地址
 * @param  {Object}   params      请求的参数
 * @param  {String}   method      请求类型
 * @param  {Object}   sourceObj   来源对象
 * @param  {Function} successFun  接口调用成功返回的回调函数
 * @param  {Function} failFun     接口调用失败的回调函数
 * @param  {Function} completeFun 接口调用结束的回调函数(调用成功、失败都会执行)
 */
function requestApi(url, params, method, sourceObj, successFun, failFun, completeFun) {
  if (method == 'POST') {
    var contentType = 'application/x-www-form-urlencoded'
  } else {
    var contentType = 'application/json'
  }
  wx.request({
    url: url,
    method: method,
    data: params,
    header: { 'Content-Type': contentType },
    success: function (res) {
      typeof successFun == 'function' && successFun(res.data, sourceObj)
    },
    fail: function (res) {
      typeof failFun == 'function' && failFun(res.data, sourceObj)
    },
    complete: function (res) {
      typeof completeFun == 'function' && completeFun(res.data, sourceObj)
    }
  })
}

module.exports = {
  requestPostApi,
  requestGetApi
}

// function request(url, params, method, onStart, onSuccess, onFailed) {
//   onStart(); //request start
//   wx.request({
//     url: url,
//     data: dealParams(params),
//     method: method,
//     header: { 'content-type': 'application/json' },
//     success: function (res) {
//       if (res.data) {
//         // /** start 根据需求 接口的返回状态码进行处理 */
//         // if (res.data.error_code == 0) {
//           onSuccess(res.data); //request success
//         // } else {
//         //   onFailed(res.data.msg); //request failed
//         // }
//         // /** end 处理结束*/
//       }
//     },

//     fail: function (error) {
//       onFailed(error); //failure for other reasons
//     }
//   })
// }

// /**
//  * function: 根据需求处理请求参数：添加固定参数配置等
//  * @params 请求参数
//  */
// function dealParams(params) {
//   return params;
// }

// module.exports = {
//   Address: add.Address,
//   postRequest: postRequest,
//   getRequest: getRequest,
// }

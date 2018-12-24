var IS_DEBUG = true
var DOMAIN = ''

if (IS_DEBUG) {
  DOMAIN = "http://test.cyberfresh.cn/"
}
else {
  DOMAIN = "http://beta.cyberfresh.cn/"
}

var Address = {
  // banner
  SX_banner: DOMAIN + 'm/banner/queryBannerForWeb',
  // 九个分类列表
  SX_classification: DOMAIN + 'm/classify/get_home_classify',
  // 赛鲜播报
  SX_broadcast: DOMAIN + 'm/roll/get_roll_order',
  // 赛鲜精选
  SX_Select: DOMAIN + 'm/mobile/guess/guesslike', 
 
  GET_MODEl_INFO_BY_ID: DOMAIN + 'apiMiapp/GetModelInfoById', // 参数id
}

var params = {
  mtype: 'wx',
  appVersionNumber: '2.2.2',
}
module.exports = {
  params: params
}

module.exports = {
  Address: Address
}
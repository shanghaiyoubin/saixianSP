var IS_DEBUG = true
var DOMAIN = ''

if (IS_DEBUG) {
  DOMAIN = "http://test.cyberfresh.cn/"
}
else {
  DOMAIN = "http://beta.cyberfresh.cnv"
}

var Address = {
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
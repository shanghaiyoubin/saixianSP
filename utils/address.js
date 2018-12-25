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
 //购物车列表
  Card_list: DOMAIN + '/m/auth/cart/select_commodity_by_customer_type',

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
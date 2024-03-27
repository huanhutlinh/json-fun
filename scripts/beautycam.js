let obj = {
	"meta": {
		"code": 0,
		"msg": "",
		"error": "",
		"request_uri": "/vip/user_info",
		"reqid": "00b9dec585a1002b3006b2e392507ecd"
	},
	"response": {
		"status": 1,
		"agreement_status": 2,
		"agreement_platform": 1,
		"expire_date": "2099-08-12",
		"expire_time": "2099-08-12 21:41:05",
		"period_type": 0,
		"product_type": 0,
		"permission": [],
		"type": 3,
		"ad_vip_type": 4,
		"discount_status": 0
	}
}

$done({ body: JSON.stringify(obj) });
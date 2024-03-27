let obj = {
	"result": {
		"activated": true,
		"vipType": "VIP_SUBSCRIBER",
		"products": [
			{
				"productId": "com.linecorp.b612.vip.oneyear",
				"originalTransactionId": "500001670605343",
				"startDate": 1711111904000,
				"expireDate": 4090222602000,
				"managed": false,
				"status": "ACTIVE"
			}
		],
		"tickets": []
	}
}

$done({ body: JSON.stringify(obj) });
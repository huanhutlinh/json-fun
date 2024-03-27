let obj = {
	"result": {
		"activated": true,
		"vipType": "VIP_SUBSCRIBER",
		"products": [{
			"productId": "com.campmobile.snow.subscribe.oneyear",
			"originalTransactionId": "500001670933822",
			"startDate": 1711134788000,
			"expireDate": 4090222602000,
			"managed": false,
			"status": "ACTIVE"
		}],
		"tickets": []
	}
}

$done({ body: JSON.stringify(obj) });
let obj = {
	"result": {
		"activated": true,
		"products": [
			{
				"productId": "com.snowcorp.soda.subscribe.oneyear",
				"startDate": 1711124921000,
				"expireDate": 4090222602000,
				"managed": false,
				"status": "ACTIVE"
			}
		]
	}
}

$done({ body: JSON.stringify(obj) });
let obj = {
	"result": {
		"activated": true,
		"products": [
			{
				"productId": "com.snowcorp.epik.subscribe.plan.oneyear",
				"startDate": 1710298667000,
				"expireDate": 4090187294000,
				"managed": false,
				"status": "ACTIVE"
			}
		]
	}
}


$done({ body: JSON.stringify(obj) });
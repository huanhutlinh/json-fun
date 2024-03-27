let obj = {
	"result": {
		"activated": true,
		"products": [{
			"productId": "com.linecorp.Foodie.subscribe.oneyear",
			"startDate": 1711183879000,
			"expireDate": 4090190461000,
			"managed": false,
			"status": "ACTIVE"
		}]
	}
}
$done({ body: JSON.stringify(obj) })
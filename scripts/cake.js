let obj = {
	"result": "SUCCESS",
	"data": {
		"status": "ACTIVE",
		"productId": "me.mycake.plus.subscription.1year",
		"date": "2099-04-04",
		"paymentScheduled": false
	}
}

$done({ body: JSON.stringify(obj) })
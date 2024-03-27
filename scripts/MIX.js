let obj = {
	"data": {
		"errorCode": 0,
		"sandbox": 0,
		"isTrialPeriod": 0,
		"purchaseTime": 1711131663,
		"expireTime": 4090242063,
		"appleExpireTime": 4090242063,
		"originalTransactionId": "500001670892060",
		"productId": "com.vstudio.MIX.subscription.auto.year.88",
		"appleVip": 1,
		"operationVip": 0,
		"giftVip": 0
	},
	"status": 200,
	"message": "ok",
	"serverTime": 1711384661.0718,
	"exetime": "1711384659729-1711384661071"
}

$done({ body: JSON.stringify(obj) });
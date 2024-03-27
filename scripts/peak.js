let obj = {
	"metaResponse": {
		"code": 0
	},
	"response": {
		"class": "UserModuleBillingResponse",
		"bbuid": "AbjtVxDjpQ",
		"usedIntroOfferPeriod": false,
		"modules": [{
			"class": "BillingModuleResponse",
			"name": "com.brainbow.module.peak.PeakModule",
			"subscription": {
				"bbuid": "AbjtVxDjpQ",
				"endTime": 4090192918000,
				"startTime": 1711081740470,
				"pro": true,
				"status": 0,
				"statusdate": 0,
				"source": {
					"cancelable": false,
					"id": "com.brainbow.peak.substd1wtrial_0823.twelvemonths",
					"provider": "itunes",
					"type": "trial"
				}
			},
			"class": "BillingModuleResponse"
		}],
		"is_in_billing_retry": false,
		"class": "UserModuleBillingResponse"
	}
}

$done({body: JSON.stringify(obj)});
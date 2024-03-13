let obj = {
	"taxCountry": null,
	"regionName": null,
	"zipCode": null,
	"taxPercentage": 0.0,
	"price": {
		"amount": 4799,
		"currency": {
			"code": "USD"
		}
	},
	"tax": {
		"amount": 0,
		"currency": {
			"code": "USD"
		}
	},
	"expiresAt": "2099-08-12T19:24:12+00:00",
	"upgradable": true,
	"recurringFrequency": 12,
	"productPlanId": "70101326-6cde-4328-ac99-61683a331ada",
	"packageId": null,
	"name": "12 months",
	"frequency": 12,
	"frequencyUnit": "month",
	"startingBonus": 0,
	"displayFrequency": 0,
	"status": "active",
	"type": "trial",
	"renewable": true,
	"orders": [{
		"taxCountry": null,
		"regionName": null,
		"zipCode": null,
		"taxPercentage": 0.0,
		"price": {
			"amount": 1249000,
			"currency": {
				"code": "VND"
			}
		},
		"tax": {
			"amount": 0,
			"currency": {
				"code": "VND"
			}
		},
		"expiresAt": "2023-12-07T13:24:22+00:00",
		"nextPaymentDetails": {
			"paymentProvider": {
				"id": "6dc5014a-b13c-4062-8cba-bd64a981c429",
				"code": "apple_store",
				"isActive": true,
				"name": "AppleStore",
				"setupConfig": {
					"appId": "com.surfshark.vpnclient.ios"
				},
				"currencies": [],
				"defaultCurrency": "USD",
				"category": null,
				"upgradable": false,
				"recurring": false,
				"invoiceable": false,
				"type": "app",
				"forceCurrency": true
			},
			"paymentToken": "500001556035332",
			"scheme": "apple_store",
			"cardType": null,
			"cardLastNumber": null,
			"cardExpiredYear": null,
			"cardExpiredMonth": null,
			"email": null,
			"createdAt": "2023-11-28T13:24:22+00:00",
			"updatedAt": "2023-11-28T13:24:23+00:00"
		},
		"changedPaymentDetails": false,
		"paymentProvider": {
			"id": "6dc5014a-b13c-4062-8cba-bd64a981c429",
			"code": "apple_store",
			"isActive": true,
			"name": "AppleStore",
			"setupConfig": {
				"appId": "com.surfshark.vpnclient.ios"
			},
			"currencies": [],
			"defaultCurrency": "USD",
			"category": null,
			"upgradable": false,
			"recurring": false,
			"invoiceable": false,
			"type": "app",
			"forceCurrency": true
		},
		"paymentDetails": {
			"paymentProvider": {
				"id": "6dc5014a-b13c-4062-8cba-bd64a981c429",
				"code": "apple_store",
				"isActive": true,
				"name": "AppleStore",
				"setupConfig": {
					"appId": "com.surfshark.vpnclient.ios"
				},
				"currencies": [],
				"defaultCurrency": "USD",
				"category": null,
				"upgradable": false,
				"recurring": false,
				"invoiceable": false,
				"type": "app",
				"forceCurrency": true
			},
			"paymentToken": "500001556035332",
			"scheme": "apple_store",
			"cardType": null,
			"cardLastNumber": null,
			"cardExpiredYear": null,
			"cardExpiredMonth": null,
			"email": null,
			"createdAt": "2023-11-28T13:24:22+00:00",
			"updatedAt": "2023-11-28T13:24:23+00:00"
		},
		"upgrade": false,
		"originalOrderId": null,
		"frequency": 12,
		"frequencyUnit": "month",
		"trial": false,
		"status": "cancel",
		"orderIntent": {
			"type": "init_default",
			"items": []
		},
		"invoiceNumber": null,
		"invoiceBusiness": false,
		"customerId": "5a1f97c2-1617-422b-9578-3034aa07cfe3",
		"id": "e94b5cc5-c232-4f55-a301-fa58b213d5f7",
		"createdAt": "2023-11-28T13:24:22+00:00",
		"updatedAt": "2023-12-07T13:25:14+00:00"
	}],
	"pricingInformation": {
		"taxCountry": null,
		"regionName": null,
		"zipCode": null,
		"taxPercentage": 0.0,
		"price": {
			"amount": 4799,
			"currency": {
				"code": "USD"
			}
		},
		"tax": {
			"amount": 0,
			"currency": {
				"code": "USD"
			}
		},
		"intents": [{
			"type": "init_default",
			"items": []
		}],
		"items": [],
		"customerId": "5a1f97c2-1617-422b-9578-3034aa07cfe3",
		"id": "cf3618d3-3f39-449d-8d1f-52022d8ae1fc",
		"createdAt": "2023-11-28T13:24:22+00:00",
		"updatedAt": "2023-11-28T13:24:22+00:00"
	},
	"promotable": false,
	"source": "vpn",
	"paymentDetails": null,
	"customerId": "5a1f97c2-1617-422b-9578-3034aa07cfe3",
	"id": "fd7b6617-2834-4666-83bd-a303f9b13fd0",
	"createdAt": "2023-11-28T13:24:22+00:00",
	"updatedAt": "2023-12-07T13:44:03+00:00",
	"taxData": null,
	"recurringPrice": {
		"amount": 4799,
		"currency": {
			"code": "USD"
		}
	}
}

$done({body: JSON.stringify(obj)});
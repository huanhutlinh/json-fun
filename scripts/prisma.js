const obj = {
	"status": "ok",
	"is_valid": true,
	"expiration_date": "2099-09-19T14:02:25Z",
	"expiration_date_unix": 4093509745,
	"is_trial": false,
	"processing_count": 0,
	"is_introductory_used": true,
	"product_id": "premium.discount.annual",
	"promotional_offer_id": "",
	"is_grace_period": false,
	"auto_renew_enabled": false,
	"is_in_billing_retry_period": false,
	"subscription_type": "annual",
	"platform": "ios",
	"device_user_info": {
		"auth_type": "apple",
		"subscription_valid": true
	}
}

$done({ body: JSON.stringify(obj) });
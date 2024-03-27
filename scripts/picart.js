let obj = {
	"status": "success",
	"response": [{
		"status": "SUBSCRIPTION_PURCHASED",
		"is_trial": false,
		"order_id": "500001670925151",
		"expire_date": 1711738893000,
		"purchase_date": 4090222602000,
		"subscription_id": "com.picsart.studio.subscription_plus_yearly",
		"original_order_id": "500001670925151",
		"plan_meta": {
			"permissions": ["premium_tools_standard", "premium_tools_ai"],
			"level": 2000,
			"storage_limit_in_mb": 20480,
			"id": "com.picsart.studio.subscription_plus_yearly",
			"frequency": "yearly",
			"type": "renewable",
			"scope_id": "full",
			"product_id": "subscription_plus_yearly",
			"description": "plus",
			"tier_id": "gold_old",
			"auto_renew_product_id": "com.picsart.studio.subscription_plus_yearly"
		},
		"limitation": {
			"max_count": 5,
			"limits_exceeded": false
		},
		"is_eligible_for_introductory": false,
		"reason": "ok"
	}]
}

$done({ body: JSON.stringify(obj) });
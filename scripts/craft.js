let obj = JSON.parse($response.body);

obj.teams[0].subscriptionInfo.expirationTime = 4090223230000;

$done({body: JSON.stringify(obj)});
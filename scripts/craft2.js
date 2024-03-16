let obj = {
    "userId": "872a33fa-5081-50a8-f82a-77467bed1dc8",
    "profileImgUrl": "https://renderserver.craft.do/api/logo?type=u&colorIdx=6&caption=M",
    "email": "crackhub@privaterelay.appleid.com",
    "firstName": "Dev",
    "lastName": "Crack",
    "market": "EN",
    "spaces": [{
        "id": "872a33fa-5081-50a8-f82a-77467bed1dc8",
        "name": "Crack’s Space",
        "logoUrl": "https://renderserver.craft.do/api/spacelogo?seed=2333085985",
        "properties": {},
        "tier": "V2_Plus",
        "role": "owner",
        "teamId": "fcb2ba76-f608-b308-77ba-39f2ead7fdbb",
        "teamVisiblity": "private",
        "contributors": [{
            "id": "872a33fa-5081-50a8-f82a-77467bed1dc8",
            "email": "crackhub@privaterelay.appleid.com",
            "firstName": "Dev",
            "lastName": "Crack",
            "profileImgUrl": "https://renderserver.craft.do/api/logo?type=u&colorIdx=6&caption=M",
            "role": "owner"
        }],
        "limits": {
            "maxStorageMB": 1048576
        }
    }],
    "creationTime": 1710247863725,
    "teams": [{
        "id": "fcb2ba76-f608-b308-77ba-39f2ead7fdbb",
        "name": "Crack’s Team",
        "logoUrl": "https://renderserver.craft.do/api/logo?type=t&colorIdx=4&caption=LT",
        "tier": "V2_Plus",
        "members": [{
            "id": "872a33fa-5081-50a8-f82a-77467bed1dc8",
            "email": "crackhub@privaterelay.appleid.com",
            "firstName": "Dev",
            "lastName": "Crack",
            "profileImgUrl": "https://renderserver.craft.do/api/logo?type=u&colorIdx=6&caption=M",
            "role": "admin"
        }],
        "role": "admin",
        "status": {
            "isOverAllocationLimitActive": false,
            "hasOverAllocatedMembers": false,
            "gracePeriod": {
                "isActive": false
            },
            "trialSeatPeriod": {
                "isActive": false
            },
            "trialInfo": {
                "v2": {
                    "isTrialActive": true,
                    "isAlreadyUsed": true,
                    "activeTrialType": "AppStore",
                    "usedTypes": ["AppStore"]
                }
            }
        },
        "isPrivate": true,
        "subscriptionInfo": {
            "provider": "AppStore",
            "rawType": "AppStore",
            "subscriptionId": "23ea2cf3-c6d9-4edf-56b0-605a51812aec",
            "renewPeriod": "Yearly",
            "expirationTime": 4090223230000,
            "autoRenewStatus": false
        },
        "limits": {
            "isExportDisabled": false,
            "disableBigFormatCards": false,
            "disableIndocStats": false,
            "disablePrinting": false,
            "disableStats": false
        },
        "features": {
            "arePermissionsEnabled": false
        }
    }],
    "userFeatures": {
        "experiment_10_monetization": true
    }
}

$done({body: JSON.stringify(obj)});
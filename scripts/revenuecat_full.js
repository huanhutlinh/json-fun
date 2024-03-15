/***********************************
> Script URL        https://gist.githubusercontent.com/ddgksf2013/dbb1695cd96743eef18f3fac5c6fe227/raw/revenuecat.js
# ======== Unlock List ======== #
https://appraven.net/collection/77299969
***********************************/

// ========= Dynamic ID ========= //
const mapping = {
	'%E4%BA%8B%E7%BA%BF': ['pro', 'xyz.jiaolong.eventline.pro.lifetime'],
	'%E5%85%83%E6%B0%94%E8%AE%A1%E6%97%B6': ['plus'],
	'%E6%9F%A5%E5%A6%86%E5%A6%86': ['Pro access'],
	'%E7%9B%AE%E6%A0%87%E5%9C%B0%E5%9B%BE': ['pro'],
	'%E8%A8%80%E5%A4%96%E7%AD%86%E8%A8%98/': ['Premium'],
	'%E8%AC%8E%E5%BA%95%E6%99%82%E9%90%98': ['Entitlement.Pro'],
	'%E8%AC%8E%E5%BA%95%E9%BB%91%E8%86%A0': ['Entitlement.Pro'],
	'%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
	'1Blocker': ['premium'],
	'AI%20Art%20Generator/': ['Unlimited Access'],
	'Airmail': ['Airmail Premium'],
	'alcohol.tracker': ['pro', 'drinklog_lifetime'],
	'apollo': ['all', 'com.ziheng.apollo.onetime'],
	'Alpenglow': ['newPro'],
	'andyworks-calculator': ['patron'],
	'Anybox': ['pro'],
	'Aphrodite': ['all'],
	'apollo': ['all'],
	'APTV': ['pro'],
	'audiomack': ['Premium1'],
	'Awesome%20Habits': ['premium'],
	'BlackBox': ['plus', 'app.filmnoir.appstore.purchases.lifetime'],
	'Blackout/': ['premium', 'blackout_299_lt'],
	'Blurer': ['paid_access'],
	'Budget%20Flow': ['full_access', 'com.fabian.hasse.haushaltsbuch.upgrade.combined'],
	'Budgetify/': ['premium', 'budgetify_3999_lt'],
	'card/': ['vip'],
	'CardPhoto': ['premium'],
	'ChatGPTApp': ['Advanced'],
	'com.dison.diary': ['vip'],
	'Cookie': ['allaccess', 'app.ft.Bookkeeping.lifetime'],
	'CountDuck': ['premium', 'Lifetime'],
	'CPUMonitor': ['Pro'],
	'Currency': ['plus'],
	'Darkroom': ['co.bergen.Darkroom.entitlement.allToolsAndFilters'],
	'DayPoem': ['Pro Lifetime'],
	'Decision': ['com.nixwang.decision.entitlements.pro'],
	'Dedupe/': ['Pro', 'com.curiouscreatorsco.Dedupe.pro.lifetime.notrial.39_99'],
	'Echo': ['PLUS'],
	'Email%20Me': ['premium'],
	'Emphasis/': ['premium'],
	'EraseIt/': ['ProVersionLifeTime'],
	'Everlog': ['premium'],
	'FaceMa/': ['Pro access'],
	'fastdiet': ['premium'],
	'Fileball': ['filebox_pro'],
	'Fin': ['premium', 'com.circles.fin.premium.yearly'],
	'FinancialNote': ['category'],
	'Focused%20Work': ['Pro'],
	'FormScanner/': ['Pro', 'formscanner_lifetime'],
	'G%20E%20I%20S%20T': ['memorado_premium'],
	'Gear': ['pro', 'com.gear.app.yearly'],
	'GetFace': ['Pro access'],
	'GoodThing/': ['pro', 'goodhappens_basic_year'],
	'GoToSleep': ['Pro'],
	'Grow': ['grow.pro', 'grow_lifetime'],
	'Happy%3ADays': ['pro', 'happy_999_lifetime'],
	'HTTPBot': ['pro'],
	'ImageX': ['imagex.pro.ios', 'imagex.pro.ios.lifetime'],
	'intervalFlow': ['All Access', 'wodtimer_lf_free'],
	'IPTVUltra': ['premium'],
	'iRead': ['vip'],
	'jinduoduo_calculator': ['jinduoduoapp', 'mobile_vip'],
	'jizhi': ['jizhi_vip'],
	'kegel': ['kegel_pro'],
	'Ledger': ['Pro', 'com.lifetime.pro'],
	'LemonKeepAccounts/': ['vip'],
	'Locket': ['Gold'],
	'LUTCamera': ['ProVersion', 'com.uzero.funforcam.monthlysub'],
	'MetadataEditor': ['unlimited_access'],
	'mizframa': ['premium', 'mf_20_lifetime2'],
	'money_manager': ['premium'],
	'MoneyThings': ['Premium'],
	'MOZE': ['premium'],
	'multitimer_app': ['premium', 'timus_lt'],
	'MusicMate': ['premium', 'mm_lifetime_68_premium'],
	'My%20Jump%20Lab': ['lifetime'],
	'My%20Tim': ['Pro'],
	'MyThings': ['pro', 'xyz.jiaolong.MyThings.pro.infinity'],
	'NeatNook/': ['com.neatnook.pro', 'com.neatnook.pro.forever'],
	'Noto': ['pro'],
	'Ochi': ['Pro'],
	'OffScreen': ['Entitlement.Pro'],
	'One4Wall': ['lifetime', 'lifetime_key'],
	'OneBox': ['all'],
	'OneWidget': ['allaccess'],
	'Overdue': ['Pro'],
	'Paku': ['pro'],
	'PastePal': ['premium'],
	'PDF%20Viewer': ['sub.pro'],
	'Percento': ['premium'],
	'Period%20Calendar': ['Premium', 'com.lbrc.PeriodCalendar.premium.yearly'],
	'Photom': ['premium', 'pixelmator_photo_pro_subscription_v1_pro_offer'],
	'PhotoRoom': ['business'],
	'Pillow': ['premium'],
	'PinPaper': ['allaccess'],
	'Planny': ['premium'],
	'Pomodoro': ['Plus', 'com.MINE.PomodoroTimer.plus.yearly'],
	'Precious/': ['Pro'],
	'reader': ['vip2', 'com.valo.reader.vip2.year'],
	'Record2Text/': ['Pro access'],
	'Reels%20Editor': ['Unlimited Access'],
	'ScannerPro': ['plus'],
	'ScientificCalculator': ['premium', 'com.simpleinnovation.calculator.ai.premium.yearly.base'],
	'server_bee': ['Pro'],
	'ShellBean/': ['pro', 'com.ningle.shellbean.subscription.year'],
	'simple-': ['patron'],
	'SimpleScan/': ['premium', 'com.atlantia.SimpleScan.Purchases.Lifetime'],
	'Spark': ['premium'],
	'Spektr': ['premium'],
	'streaks': ['patron'],
	'streamer/': ['Premium'],
	'Stress': ['StressWatch Pro'],
	'Tangerine': ['Premium'],
	'Tasks': ['Pro'],
	'tiimo': ['full_access'],
	'To%20Me/': ['Premium'],
	'totowallet': ['all', 'com.ziheng.totowallet.yearly'],
	'TouchRetouchBasic': ['premium'],
	'universal/': ['Premium', 'remotetv.yearly.07'],
	'UTC': ['Entitlement.Pro'],
	'vibes': ['patron'],
	'VSCO': ['pro', 'vscopro_global_1299_monthly_notrial'],
	'WhiteCloud': ['allaccess'],
	'widget_art': ['all'],
	'WidgetCat': ['MiaoWidgetPro'],
	'WidgetSmith': ['Premium'],
	'Wozi': ['wozi_pro_2023']
};

var ua = $request.headers["User-Agent"] || $request.headers["user-agent"],
	obj = JSON.parse($response.body);

var ddgksf2013 = {
	is_sandbox: !1,
	ownership_type: "PURCHASED",
	billing_issues_detected_at: null,
	period_type: "normal",
	expires_date: "2099-12-18T01:04:17Z",
	grace_period_expires_date: null,
	unsubscribe_detected_at: null,
	original_purchase_date: "2022-09-08T01:04:18Z",
	purchase_date: "2022-09-08T01:04:17Z",
	store: "app_store"
},
	ddgksf2021 = {
		grace_period_expires_date: null,
		purchase_date: "2022-09-08T01:04:17Z",
		product_identifier: "com.ddgksf2013.premium.yearly",
		expires_date: "2099-12-18T01:04:17Z"
	};

const match = Object.keys(mapping).find(e => ua.includes(e));
if (match) {
	let [e, s] = mapping[match];
	s ? (ddgksf2021.product_identifier = s, obj.subscriber.subscriptions[s] = ddgksf2013) : obj.subscriber.subscriptions["com.ddgksf2013.premium.yearly"] = ddgksf2013, obj.subscriber.entitlements[e] = ddgksf2021
} else obj.subscriber.subscriptions["com.ddgksf2013.premium.yearly"] = ddgksf2013, obj.subscriber.entitlements.pro = ddgksf2021;

$done({ body: JSON.stringify(obj) });
function setOrUpdateHeader(headers, headerName, headerValue) {
	const lowercaseHeaderName = headerName.toLowerCase();
	if (lowercaseHeaderName in headers) {
		headers[lowercaseHeaderName] = headerValue;
	} else {
		headers[headerName] = headerValue;
	}
}

const modifiedHeaders = $request.headers;
setOrUpdateHeader(modifiedHeaders, "X-RevenueCat-ETag", "");

$done({ headers: modifiedHeaders });
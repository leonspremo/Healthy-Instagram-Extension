 chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	var appBanners = document.getElementsByClassName(request);
 	setInterval(function(){for (var i = 0; i < appBanners.length; i ++) {
        appBanners[i].style.display = 'none';
        }},100)	
 })

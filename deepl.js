function jumpTextSearch() {
	return function(info, tab) {
		var str = info.selectionText;
		var url = 'https://www.deepl.com/translator#auto/ja/'+encodeURIComponent(str.replace(/[\/\\\|]/g,"\\$&"))+'';
		chrome.windows.create({
			url: url,
			type: 'popup',
			top: 5,
            left: 0,
			width: Math.round(screen.availWidth/2), 
			height: Math.round(screen.availHeight/2),
			focused: true,
		});
		//window.open(url,null);
	};
};

var parentId = chrome.contextMenus.create({
	//"title" : chrome.i18n.getMessage('extContextmenu'),
	"title" : "D_DeepL",
	"type" : "normal",
	"contexts" : ["selection"],
	"onclick" : jumpTextSearch()
});


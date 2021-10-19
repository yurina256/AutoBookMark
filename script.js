function bookmark(link,title){
    console.log("bookmark");
    console.log(link,title);
    chrome.bookmarks.create({
        'parentId': bookmarkBar.id,
        'title':title,
        'url':link
    });
};
//hoge
window.alert(location.pathname);
console.log("hogehuga");
chrome.storage.local.get([location.pathname], function (result) {
    if(result[location.pathname] == undefined){
        chrome.storage.local.set({[location.pathname]:1}, function () {
        });
    }else{
        chrome.storage.local.set({[location.pathname]:result[location.pathname]+1}, function () {
        });
        console.log(result[location.pathname]);
        if(result[location.pathname] == 1){bookmark(location.pathname,document.title);}
    }
    });
const QUERY_KEY = 'WT.mc_id';

console.log('main.js');

chrome.contextMenus.onClicked.addListener(function (itemData) {
    console.log('addListener');
    console.log(itemData);

    const url = new URL(itemData.linkUrl);

    let text;

    if (itemData.menuItemId.endsWith("+text")) {
        url.searchParams.append(QUERY_KEY, itemData.menuItemId.replace("+text", ""));

        text = itemData.linkText + "\n" + url.href;
    } else {
        url.searchParams.append(QUERY_KEY, itemData.menuItemId);
        text = url.href;
    }

    var copyFrom = document.createElement("textarea");
    copyFrom.textContent = text;
    document.body.appendChild(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    copyFrom.blur();
    document.body.removeChild(copyFrom);
});

function copyTextToClipboard(text) {
    var copyFrom = document.createElement("textarea");
    copyFrom.textContent = text;
    document.body.appendChild(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    copyFrom.blur();
    document.body.removeChild(copyFrom);
}
var old_value = 'Null';
var new_value = 'Null';

function onGot(item) {
  old_value = item["old_value"];
  new_value = item["new_value"];
  downloadJSAtOnload();
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function restoreOptions() {
    let gettingItem = browser.storage.local.get(["old_value","new_value"])
    gettingItem.then(onGot, onError);
}

function downloadJSAtOnload() {
  console.log("dasda")
    var root = document.getRootNode(),
        iter = document.createNodeIterator(root, NodeFilter.SHOW_TEXT),
        textnode;

    // print all text nodes
    while (textnode = iter.nextNode()) {
        var textData = textnode.textContent
        console.log(textData)
        var reg = new RegExp(old_value, "ig");
        textnode.textContent = textData.replace(reg, new_value);
    }
}

setInterval(function() {
    restoreOptions()
}, 5000);
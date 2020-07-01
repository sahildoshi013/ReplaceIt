function saveOptions(e) {
    let contentToStore = {};
    contentToStore["old_value"] = document.querySelector("#old_value").value;
    contentToStore["new_value"] = document.querySelector("#new_value").value;
    console.log(contentToStore)
    browser.storage.local.set(contentToStore);
    e.preventDefault();
}

function onGot(item) {
  console.log(item);
  document.querySelector("#saved_old_value").innerText = item["old_value"] || 'Null';
    document.querySelector("#saved_new_value").innerText = item["new_value"] || 'Null';
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function restoreOptions() {
	let gettingItem = browser.storage.local.get(["old_value","new_value"])
	gettingItem.then(onGot, onError);
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions)
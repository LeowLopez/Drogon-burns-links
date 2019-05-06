function popup() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "dracarys"});
   });
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("Drogon").addEventListener("click", popup);
});
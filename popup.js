buttonStats = true;

function popup() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "dracarys"});//send to content.js (injected on actual page)
    });

	if(buttonStats == true){
		buttonDracarys.innerHTML = "Recuperar";
		buttonStats = false;
	}
	else{
		buttonDracarys.innerHTML = "Dracarys!";
		buttonStats = true;
	}
}

document.addEventListener("DOMContentLoaded", function() {
	buttonDracarys = document.getElementById("Drogon");
	buttonDracarys.addEventListener("click", popup);
});
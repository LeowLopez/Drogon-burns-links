function renameButton(when){

	chrome.storage.sync.get("status", function(buttonName){//get button name on storage
		
		if(when == "clickPopup"){//Every click on popup extension
			if(buttonName.status){//had saved some status (if true)
				buttonStatus = buttonName.status;//recover status (button name)
			} else buttonStatus = "dracarys";//First click on popup extension (nothing saved)	
		}
		
		if(buttonStatus == "recover"){
			buttonDracarys.innerHTML = "Recuperar";
		} else buttonDracarys.innerHTML = "Dracarys!";

		chrome.storage.sync.set({"status": buttonStatus});//save button name on storage
	})	
}

function popup() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "dracarys"});//send to content.js (injected on actual page)
    });

	if(buttonStatus == "recover"){
		buttonStatus = "dracarys";
	} else buttonStatus = "recover";
	
    renameButton();
}

document.addEventListener("DOMContentLoaded", function() {
	buttonDracarys = document.getElementById("Drogon");
	renameButton("clickPopup");
	buttonDracarys.addEventListener("click", popup);
});
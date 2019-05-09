function renameButton(){

	chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
		var activeTab = tabs[0];
	    	chrome.tabs.sendMessage(activeTab.id, {"message": "DaenerysIsHere"}, function(response){//send to content.js (injected on actual page)
			//console.log(response.answer);
			buttonAnswer = response.answer;
				
			if(buttonAnswer == "FireAndBlood"){
				buttonDracarys.innerHTML = "Backup";
			} else buttonDracarys.innerHTML = "Dracarys!";
		});
	});
		
}

function popup() {
	chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    		var activeTab = tabs[0];
    		chrome.tabs.sendMessage(activeTab.id, {"message": "dracarys"});
    	});
	
   	renameButton();
}

document.addEventListener("DOMContentLoaded", function() {
	buttonDracarys = document.getElementById("Drogon");
	renameButton();
	buttonDracarys.addEventListener("click", popup);
});
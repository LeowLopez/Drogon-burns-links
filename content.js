dracarys = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	if(request.message === "dracarys"){
		DracarysOrNot();
	}
	else if((request.message === "DaenerysIsHere") && (dracarys == false)){
		console.log(request.message);
		sendResponse({answer:"imNotYourPrincess"});
	}
	else if((request.message === "DaenerysIsHere") && (dracarys == true)){
		console.log(request.message);
		sendResponse({answer:"FireAndBlood"});		
	}else {
		console.log("Dragon is not a slave");		
	}
});


function DracarysOrNot(){

	if(dracarys == false){
		links = document.querySelectorAll("a");
		linkNumbers = links.length;
		Oldlinks = new Array(linkNumbers);//to save the old class
		
		for(i = 0; i < linkNumbers; i++){
			Oldlinks[i] = links[i].className;//saving
			links[i].className = "Burning";//renaming class
		}
		dracarys = true;

	}

	else{//recover the class

		for(i = 0; i < linkNumbers; i++){
			links[i].className = Oldlinks[i];//renaming class
		}
		dracarys = false;
	}
}

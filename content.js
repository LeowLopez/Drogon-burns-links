dracarys = false;

chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {
        if( request.message === "dracarys" ) {
         DracarysOrNot();
        }
      }
);


function DracarysOrNot(){

	if(dracarys == false){
		links = document.querySelectorAll("a");
		linkNumbers = links.length;
		Oldlinks = new Array(linkNumbers);//to save the old class
		
		for(i = 0; i < linkNumbers; i++){
			Oldlinks[i] = links[i].className;//saving
			links[i].className = "Burning";//renaming class
			console.log(i);
		}
		dracarys = true;

	}

	else{//recover the class

		for(i = 0; i < linkNumbers; i++){
			links[i].className = Oldlinks[i];//renaming class
			console.log(i);
		}
		dracarys = false;
	}
}

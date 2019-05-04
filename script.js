document.addEventListener("DOMContentLoaded", function() {
	dracarys = false;
	dracarysButton = document.getElementById("Drogon");
	dracarysButton.addEventListener("click", DracarysOrNot);
});

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
		dracarysButton.value = "Recuperar/Recover";
		dracarys = true;
		console.log(dracarys);
	}

	else{//recover the class

		for(i = 0; i < linkNumbers; i++){
			links[i].className = Oldlinks[i];//renaming class
			console.log(i);
		}
		dracarysButton.value = "Dracarys!";
		dracarys = false;
		console.log(dracarys);
	}
}

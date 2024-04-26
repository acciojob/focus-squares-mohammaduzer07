function focusSquare() {
	
	//your JS code here. If required.
	let square1 = document.getElementById('square1');
	let square2 = document.getElementById('square2');
	let square3 = document.getElementById('square3');
	let AllSquare = document.querySelectorAll(".square");
	
	function resetColor() {
		square1.style.backgroundColor = "#E6E6FA";
		square2.style.backgroundColor = "#E6E6FA";
		square3.style.backgroundColor = "#E6E6FA";
	}
	
	square1.addEventListener("mouseover", ()=>{
		square2.style.backgroundColor = "#6F4E37";
		square3.style.backgroundColor = "#6F4E37";
	});
	
	square2.addEventListener("mouseover", ()=> {
		square1.style.backgroundColor = "#6F4E37";
		square3.style.backgroundColor = "#6F4E37";
	});
	
	square3.addEventListener("mouseover", ()=>{
		square1.style.backgroundColor = "#6F4E37";
		square2.style.backgroundColor = "#6F4E37";
	});
	
	AllSquare.forEach((square) => {
		square.addEventListener("mouseout", resetColor);
	});
}
focusSquare();
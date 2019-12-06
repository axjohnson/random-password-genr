//generate password
function generate(){

	//set length
	let complexity = document.getElementById("slider").value;

	let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()_+";

	let password = "";

	//create loop for password char
	for(let i = 0; i <= complexity; i++) {
		password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));	
	}

	//add password to display
	document.getElementById("display").value = password;

 console.log(generate)
}	

//length display
// document.getElementById("length").innerHTML = "Length: 25";
// console.log(what)
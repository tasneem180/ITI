// for make any input live 
const inputs = document.querySelectorAll(".input");


function addcolor(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcolor(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcolor);
	input.addEventListener("blur", remcolor);
});

// second for password validation 

var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

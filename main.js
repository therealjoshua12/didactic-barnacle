canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

img_width = 250;
img_height = 200;

var img_image;

img_x = 260;
img_y = 50;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image; // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if ((keyPressed >= 97 && keyPressed <= 122) || (keyPressed >= 65 && keyPressed <= 90)) {
		aplhabetkey();
		document.getElementById("d1").innerHTML = "You pressed alphabet key"
		console.log("alphabet key");
	}
	else if  (keyPressed >= 48 && keyPressed <= 57) {
		numberkey();
		document.getElementById("d1").innerHTML = "You pressed number key";
		console.log("number key");
	}
	else if  (keyPressed >= 37 && keyPressed <= 40) {
		arrowkey();
		document.getElementById("d1").innerHTML = "You pressed arrow key";
		console.log("arrow key");
	}
    else if (keyPressed >= 13 && keyPressed <= 16) {
		otherkey();
		document.getElementById("d1").innerHTML = "You pressed other key";
		console.log("other key");
	}
	else if ((keyPressed >= 17) || (keyPressed <= 18) || (keyPressed >= 27)) {
		specialkey();
		document.getElementById("d1").innerHTML = "You pressed special key";
		console.log("special key");
	}
}

function aplhabetkey() {
	img_image = "Alpkey.png";
	add();

}

function numberkey() {
	img_image = "numkey.png";
	add();
}

function arrowkey() {
	img_image = "Arrkey.png";
	add();
}

function specialkey() {
	img_image = "spkey.png";
	add();
}

function otherkey() {
	img_image = "otherkey.png";
	add();
}
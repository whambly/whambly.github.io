// JavaScript source code
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello dere world!';

//document.querySelector('html').onclick = function() {
//	alert('Ouch! stop poking me.');
//}

let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');	//You retrieve the value of the image's src attribute.

	if (mySrc === './images/updated-google-images.png') {
		myImage.setAttribute('src','./images/firefox_th.jpg');
	}
	else {
		myImage.setAttribute('src','./images/updated-google-images.png');
	}
}

let myButton = document.querySelector('button');

function setUserName() {
	let myName = prompt('Pleez enter your name: ')
	localStorage.setItem('name', myName);		//We use localStorage's setItem() function to create and store a data item called 'name'
	myHeading.textContent = 'Is Moz://a Godzilla, ' + myName + ' ?';
}

if (!localStorage.getItem('name')) {
	setUserName();
}
else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Is Mox://a really cool, ' + storedName + '... previous name.';
}

myButton.onclick = function() {
	setUserName();
}
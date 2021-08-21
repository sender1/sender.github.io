
const myHeading3 = document.querySelector('h3');
myHeading3.textContent = 'SUPERNOVA H3 HEADING';


let myImage = document.querySelector('img');

	myImage.onclick = function() {
		let mySrc = myImage.getAttribute('src');
		if(mySrc === 'img/image3-ant.png') {
		  myImage.setAttribute('src','img/bioluminiszenz.jpg');
		} else {
		  myImage.setAttribute('src','img/image3-ant.png');
		}
	}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();        // Dialog nochmals anzeigen falls keine Name eingegeben wird: myname = null
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}
  
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}


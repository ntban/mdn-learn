const myHeading = document.querySelector('h1');
myHeading.textContent = 'Changed heading: Hello world!';

if (localStorage.getItem('name') == '') {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    if(storedName){
        myHeading.textContent = 'storedName: ' + storedName;
    }
}

let myVariable = document.querySelector('h1');
myVariable.onclick = function () {
    alert('Ouch! Stop poking me!');
}

let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/image.jpg') {
        myImage.setAttribute('src', 'images/knifeduck.png');
    } else {
        myImage.setAttribute('src', 'images/crydog.png');
    }
};


let myButton = document.querySelector('button');
myButton.onclick = function () {
    setUserName();
};

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (myName != '') {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Helloworld ' + myName;
    }
}

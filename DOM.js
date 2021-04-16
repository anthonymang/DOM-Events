// DOM Elements (aka nodes)

// getElementById()
// document is referring to the HTML page
const title = document.getElementById('title');
console.log(title.textContent);

// querySelector()
const containerDiv = document.querySelector('.container');
console.log(containerDiv);

//  title using querySelector
const title2 = document.querySelector('#title')
console.log(title2);

// grab first container 2
const contDivTwo = document.querySelector('.container-2');
console.log(contDivTwo); 

// grab p one
const paragraphOne = document.querySelector('#one');
console.log(paragraphOne);
// grab text content of pOne and change it
console.log(paragraphOne.textContent)
paragraphOne.textContent = "Good Afternoon"
console.log(paragraphOne.textContent);

// grab p two
const paragraphTwo = document.querySelector('#two');
console.log(paragraphTwo);
paragraphTwo.textContent = "Changing the DOM is fun.";
console.log(paragraphTwo.textContent);
const p2Text = paragraphTwo.textContent;
console.log(p2Text);

// grab p three
const paragraphThree = document.querySelector('.three');
console.log(paragraphThree);
paragraphThree.textContent = "I will never stop changing the DOM";


// grab image
const image = document.getElementById('nothing');
// console.log('image');
image.src = 'https://media.istockphoto.com/photos/feet-of-soccer-player-tread-on-soccer-ball-for-kickoff-in-the-stadium-picture-id992892836?k=6&m=992892836&s=612x612&w=0&h=CkqH_pw1zVZFdac7Z0x8dYt1FbBYROKJtHSFy-6PjgU='
// image.setAttribute('alt', "Soccer Player with Foot on Ball");
image.alt = "Soccer Player with Foot on Ball";

// grab ul
const unordered = document.querySelector('ul').nodeType;
console.log(unordered);
// unordered.nodeType = 'ol';

// grab list item
const itemOne = document.querySelector(".listItem");
console.log(itemOne);

// .getElementsByClassName();
// .querySelectorAll();
const containerTwoList = document.getElementsByClassName('container-2'); //returns HTML collection
console.log(containerTwoList);

const containerTwoListQS = document.querySelectorAll('.container-2');
console.log(containerTwoListQS);
console.log(containerTwoListQS.item(2));

// Array.from the NodeList
const containerTwoArray = Array.from(containerTwoListQS);
console.log(containerTwoArray);

// for loop for array
for (i=0; i<containerTwoArray.length; i+=1) {
    let element = containerTwoArray[i];
    console.log(element);
}

// creating elements
const newDiv = document.createElement('div');
// add content to element
newDiv.textContent = 'New Element';
// append this new element 
    // 1. grab an element from the page (this will be parent)
    // 2. append the element as a child to parent
const body = document.querySelector('body');
body.append(newDiv);

// create an image
const newImage = document.createElement('img');
newImage.src = "https://wswd-wordpress-production.s3.amazonaws.com/content/uploads/2019/11/27165841/Nowadays-NYC-Fb.jpg";
const div1 = document.querySelector(".container");
div1.append(newImage);

// create function for creating elements and adding them to page

function makeNewTextElement(type, content, location) {
    const newElement = document.createElement(type);
    newElement.textContent = content;
    const newLocation = document.querySelector(location);
    newLocation.append(content);
}

makeNewTextElement("p", "This is an new element", "body");
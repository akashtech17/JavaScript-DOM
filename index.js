// // console.log(this,window);

// // console.log(window.innerWidth); // width of the website 
// // console.log(window.innerHeight); // height if the website
// // // window.open('https://www.cssmatic.com/');
// // // window.close('https://www.cssmatic.com/');
// // window.moveTo(500,100) //- move the current window
// // // window.resizeTo(); // - resize the current window


// // window.alert('Hello'); //Alerts
// // window.prompt(); //Prompts for value
// // window.print(); //Print current window
// // console.log(); // Helps to print data to console

// // BOM - Browser Object Model
// // # Screen Obj 
// console.log(window.screen) // Returns the visitor's  Screen info

// // #Location Obj
// // location.href="https://google.com";

// // OR

// // window.location.assign(url);
// // window.location=url;
// // window.location.href=url;


// // # History Obj
// // history.back(); //- same as clicking back in the browser
// // history.forward(); //- same as clicking forward in the browser
 
// // // # Navigator Obj
// // navigator.appVersion;
// // navigator.platform;
// // navigator.webdriver;
// // navigator.product; //  returns the product name of the browser engine
// // navigator.cookieEnabled;
// /****************************************************************************/


// // Change h1 text using JavaScript
// document.getElementById("change").innerText="gokul"; 
// document.body.children[0].children[0].innerText="learn HTML DOM in JavaScript - Tamil🐛";

// find the text in the document programmatically.
/*console.log(window.find("HTML DOM")); */ 
 // SELECTING THE TEXT ON THE PAGE 

//  /****************************************************************************/

//  // DOM Properties & Methods

//  // Object Example
//   let person ={
//     name:"RDX_Akash" , // properties
//     Place:'Vaniyambadi', // properties

//     greetingUser(){
//         // method
//         return  `Hello my name is ${this.name} and i'm coming from ${this.Place}`;
//     },

// };

// console.log(person.greetingUser());

// // Challenge: Dynamic simple program to get name & place automatically from the user.

// // const nameIp=prompt('What  is your name😀');
// // const placeIP=prompt('Where are you coming from')

// // person.name=nameIp;
// // person.Place=placeIP;

// // document.getElementById('names').innerHTML=person.greetingUser();

// // Additionally you can also do this.
// // document.body.innerHTML = `<h1>${person.greetUser()}</h1>`;


//  /****************************************************************************/

//     // DOM Loaded Events 

//  document.addEventListener('DOMContentLoaded' ,()=>{
//     // reference
//     const myApp=document.getElementById('app');
//     const heading=myApp.children[0];
//     const image=myApp.children[1];
//        heading.innerHTML= `<h1>I have changed!</h1>`;
//        console.log(`Image size ${image.offsetWidth} , ${image.offsetHeight}`);
//  })
 
//  // When you can replace place the image . the image width  and image height is not showing .The solution for the problem is given below ... 

//  window.addEventListener('load', () => {
//     const myApp = document.getElementById('app')
//     const heading = myApp.children[0]
//     const image = myApp.children[1]

//     heading.innerHTML = `<h1>I have changed!</h1>`

//     console.log(`Image size: ${image.offsetWidth}, ${image.offsetHeight}`);
//     // CSS, Image
// })

// window.onunload= function(){
//     alert(`You are about to be unloaded.`);
// }
// window.onbeforeunload= function(){
//     alert('You are about to be unloaded before.')
// }
 
/****************************************************************************/

// 10 Understanding DOM Node

// HTML reference

// console.dir(document.documentElement.lang); // find the html language 
 
// console.log(document.head); //showing the header items
// console.log(document.body.innerText); // finding the body inner text 

// console.log(document.body.constructor.name)

// console.log(document.body instanceof HTMLBodyElement); // 5
// console.log(document.body instanceof HTMLElement); // 4
// console.log(document.body instanceof Element); // 3
// console.log(document.body instanceof Node); // 2
// console.log(document.body instanceof EventTarget); // 1

// // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
// console.log(document.body.nodeName);


/****************************************************************************/

// HOW to select DOM Elements 

// 1. getElementById()
// 2. getElementByClassName()
// 3. getElementByTagName()
// 4. Finding Elements using CSS Selector
// 5. querySelector & querySelectorAll (DOM Query Selector)

/****************************************************************************/

// 12 getElementsById() -JS DOM Selector

// let inputFood=document.getElementById("input-food");
// let inputBtn=document.getElementById("input-btn");
// let foodContainer=document.getElementById("food-container");
// let response=document.getElementById("response");

// inputBtn.addEventListener("click",()=>{
//     response.innerText=inputFood.value;
// })

// /* ----------------------------------------------------------------------------------------------------------- */
// // 13 getElementsByClassName()

// let inputFood=document.getElementById("input-food");
// let inputBtn=document.getElementById("input-btn");
// let foodContainer=document.getElementById("food-container");

// inputBtn.addEventListener("click",()=>{
//     foodContainer.innerHTML+=`<li class="food-item">${inputFood.value.toUpperCase()}</li>`
// })

// // getElementByClassName()

// const foodItem= foodContainer.getElementsByClassName("food-item");

// let allFood=[].map.call(foodItem ,(food)=> food.textContent);

// /* ----------------------------------------------------------------------------------------------------------- */

// // 14 getElementsByTagName()

// const foodItemEl=document.getElementsByTagName("li");
// console.log(`I have ${foodItemEl.length} items`);

// /* ----------------------------------------------------------------------------------------------------------- */

// // 15 DOM Query Selector (querySelector(),querySelector())

// const result=document.querySelector('li');
// const resultList=document.querySelectorAll('li');
// console.log(result.innerText);

// /* ----------------------------------------------------------------------------------------------------------- */

//16  Creating a DOM Elements

// <div class="alert">
// ✅ Success Fully Added 
// </div>

// function creatingAlertViaDom(message){
//     const main=document.getElementById("main");
    
//     //Creating div Element
//     const div=document.createElement("div")
//     const textNode=document.createTextNode(message);

//     div.className="alert";
//     // Append - before the function 
//     // prepend -after the function 
    
//     div.append(textNode); //puts data inside an element at the last index; while.
//     main.prepend(div) // puts the prepending element at the first index.
    
// };
// creatingAlertViaDom("Food Updated")

// /* ----------------------------------------------------------------------------------------------------------- */

// 17 Changing / Getting of DOM Element 

// Modify alert Content 

/** 
--innerHTML  // work with Element
--innerText 
--textContent // Work with nodes


*/

// const alertEl=document.querySelector(".alert");

// // How to get Existing Contents

// console.log(alertEl.innerHTML);
// console.log(alertEl.innerText);
// console.log(alertEl.textContent);

// // How to set the Value

// alertEl.innerHTML="<strong>Successful</strong> update"
// alertEl.innerText="<strong>Successful</strong> update"
// alertEl.innerContent="<strong>Successful</strong> update"
// /* ----------------------------------------------------------------------------------------------------------- */

// 18 innerHTML vs CreateElements

// const main=document.getElementById("main");
// function createAlertViaDom(message){
//   const div=document.createElement("div");
//   const textNode=document.createTextNode(message)

//   // injecting TextNode into Div
//   div.append(textNode); // puts data inside an element at the last index; while.
//   div.className="alert";
//   main.prepend(div); // puts the prepending element at the first index.


// }

// createAlertViaDom("hello is was create by CreateElement");

// innerHTML

// function createAlertViaTemplate(message){
//   const template= `<div class="alert">${message}</div>`;
//  main.innerHTML+=template;


// }

// createAlertViaTemplate("Hello This was Created by innerHTML")


// /* ----------------------------------------------------------------------------------------------------------- */

// 19 Document fragment For Performance

// const foodContainerEl=document.getElementById("food-container");

// // normal way 

// console.time("normal")

// for (let i=1;i<=500;i++){
//   const li =document.createElement("li");
//   li.textContent=`food item ${i}`;
//   li.className='food-item';
//   foodContainerEl.append(li);
// }

// console.timeEnd("normal")

// // createDocumentFragment   Way

// console.time('document Fragment')

// let fragment=document.createDocumentFragment();
// for (let i=1;i<=100;i++){
//   const li =document.createElement("li");
//   li.textContent=`food item ${i}`;
//   li.className='food-item';
//   fragment.append(li);
// }

// foodContainerEl.append(fragment);

// console.timeEnd('document Fragment');

/**  Challenge : Crate you favorite foods using  (createElement & document Fragment) */

// const foodContainerE=document.getElementById("food-container");
// const favoriteItemFood=[
//   'Chicken Biryani',
//   'Mutton Biryani',
//   'Fish Biryani'
// ];

// const listFragment=document.createDocumentFragment();
// favoriteItemFood.forEach((favfood)=>{
//   let li =document.createElement("li");
//   li.textContent=favfood;
//   li.className="food-item";
//   listFragment.append(li);
// })

// foodContainerE.append(listFragment)

 /* ----------------------------------------------------------------------------------------------------------- */

// // 20 Inserting Dom Element

// const foodContainerEle=document.getElementById("food-container");

// const li=document.createElement("li");
// li.textContent="Biryani";
// li.className="food-item";

// // appending

// foodContainerEle.append(li); // puts data inside an element at the last index; while.
// foodContainerEle.prepend(li);  // puts the prepending element at the first index.


/* ----------------------------------------------------------------------------------------------------------- */

// // 21 Inserting DOM as String Template

// const foodContainerElem=document.querySelector("#food-container");

// // how it will get inserted ?
// // <!-- beforebegin -->
// //<p>
// // <!-- afterbegin -->
// //food
// // <!-- before end -->
// //<p>
// // <!-- after end -->


// foodContainerElem.insertAdjacentHTML("afterbegin","<li>Food Item 1 afterbegin</li>");
// foodContainerElem.insertAdjacentHTML("afterend","<li>Food Item end aferend</li>");
// foodContainerElem.insertAdjacentHTML("beforebegin","<h1>Food Item 2 beforebegin</h1>");
// foodContainerElem.insertAdjacentHTML("beforeend","<h1>Food Item end beforeend</h1>");

// // const li=document.createElement("li");
// // li.textContent="new list";

// // foodContainerElem.insertAdjacentElement("afterbegin",li);
// // foodContainerElem.insertAdjacentText("beforebegin","Just pure text without html tages");

/* ----------------------------------------------------------------------------------------------------------- */

// 22 Replacing Dom Elements

// const foodContainerEleme=document.querySelector("#food-container");

// const Sambarlist=document.querySelector("#food-container :first-child"); // selecting the first node child
// const newLi=document.createElement("li");
// newLi.textContent="Paruppu Sambar";
// newLi.className="food-item";

// new way (Replace with);
// Sambarlist.replaceWith(newLi); 

// old way (Replace child)

// Sambarlist.parentNode.replaceChild(newLi,Sambarlist);

// replace children 

// creat a new list

// const maagi=document.createElement("li");
// maagi.className="food-item";
// maagi.textContent="maagi";

// const eggRice=document.createElement("li");
// eggRice.className="food-item";
// eggRice.textContent="Egg Rice"

// foodContainerEleme.replaceChildren(maagi,eggRice);

/* ----------------------------------------------------------------------------------------------------------- */
 // 23 Cloning DOM Element
// const foodContainerElemen=document.querySelector('#food-container');
//  let duplicate=document.getElementById("duplicate");
//  let resuncBtn=document.getElementById("resuncBtn");

// // clone Node (False) Only Clone the top Element
// // const foodDuplicate=foodContainerElemen.cloneNode();

// resuncBtn.addEventListener("click",()=>{
//     duplicate.innerHTML=""; //first empty the value on html

//     //  clonenode(true) cloanes all elements and Subtrees
//     const foodDuplicate=foodContainerElemen.cloneNode(true);
//     duplicate.append(foodDuplicate);

//     console.log(foodDuplicate.innerHTML);
//     console.log(foodDuplicate.nodeName);
// });

/* ----------------------------------------------------------------------------------------------------------- */

// 24 Removing DOM Elements

// // remove food items
// function removeFoodItem(event){
//     const existingList=event.target.parentNode.parentNode;
//     console.log("loggin event" ,event.target.parentNode.parentNode);
//     // new Way
//     existingList.remove()
// }


/* ----------------------------------------------------------------------------------------------------------- */

//25 Looping over the DOM

// const foodContainerEl = document.querySelectorAll("#food-container li");

// const favouriteFood = [
//   "Chicken Biriyani",
//   "Mutton Biriyani",
//   "Fish Biriyani",
//   "Prawn Biriyani",
// ];

// // How to iterate?

// // for loop
// for (let i = 0; i < favouriteFood.length; i++) {
//   console.log(favouriteFood[i]);
// }

// // for..of
// for (const item of favouriteFood) {
//   console.log(item);
// }

// // convert existing list into javascript array?
// const foodItems = [];

// for (let i = 0; i < foodContainerEl.length; i++) {
//   //   console.log(foodContainerEl[i].innerText);
//   foodItems.push(foodContainerEl[i].innerText);
// }

// console.log(foodItems);

// // spread operator
// foodContainerEl.forEach((food) => console.log("NodeLists", food));
// [...foodContainerEl].forEach((food) => console.log("Spread", food));

// // Array.from
// Array.from(foodContainerEl).forEach((food) => console.log("Array.From", food));

/* ----------------------------------------------------------------------------------------------------------- */

// 26 finding Child Elements

// const foodContainerElement=document.querySelector('#food-container');

// const list=document.querySelectorAll('li');

// // querySelectorAll :nodeList

// console.log(list,list.length);

// // .Children :HTML collections

// console.log(foodContainerElement.children,foodContainerElement.children.length);

// // childNodes :nodeList

// console.log(foodContainerElement.childNodes);

// // First / First ElementsChild
// console.log(foodContainerElement.firstChild);
// console.log(foodContainerElement.firstElementChild.innerText);

// //last / lastElementChild
// console.log(foodContainerElement.lastChild);
// console.log(foodContainerElement.lastElementChild.innerText);

// const header=document.querySelector("header");

// // if you access the child which does't exist it will return null
// console.log(header.firstElementChild);

/* ----------------------------------------------------------------------------------------------------------- */

// 27 Finding Parent Element

// const foodContainerElements=document.querySelector("#food-container li");

// // Finding parentNode
// console.log(foodContainerElements.parentNode);

// //finding ParentElement
// console.log(foodContainerElements.parentElement.parentElement);

// // returns <html>
// console.log(document.body.parentNode);
// console.log(document.body.parentElement);

// // The document node
// console.log(document.documentElement.parentNode);

// //null
// console.log(document.documentElement.parentElement);

// //Checking nodeType
// console.log(document.nodeType);

// //Closest --// Match closet occurrence
// console.log(foodContainerElements.closest("main"));

/* ----------------------------------------------------------------------------------------------------------- */

// // 28 finding sibling Elements
// const numbers=document.querySelector("ul:last-Child li");

// console.log(numbers.innerText);

// //Any node :node

// console.log(numbers.nextSibling);
// console.log(numbers.parentElement);

// //Any Element nodes :Elements

// console.log(numbers.nextElementSibling.innerText);
// console.log(numbers.previousElementSibling);

/* ----------------------------------------------------------------------------------------------------------- */















































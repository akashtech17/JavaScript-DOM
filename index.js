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

// 29 Elements Properties VS HTML Attributes

// const inputName=document.querySelector(".input-name-container input");
// // console.log(inputName.value);
// // you can get attributes  value by Dot Notation 
// console.log(inputName.type);
// console.log(inputName.id);
// console.log(inputName.name);
// console.log(inputName.placeholder);

// const userAge=prompt("What is you age");

// // modifying the value 
// // inputName.value="Rdx";

// inputName.setAttribute("value","Rajini");

// inputName.setAttribute("value",userAge);
// const saveInt = parseInt(inputName.value, 10);
// console.log(typeof inputName.value);
// console.log(typeof saveInt);

// // however the web browser only convert the standard attributes to the DOM object's properties

// console.log(inputName.isAlive);

// //task :Create an input field of Age which accept number and change it via Dom using JavaScript

// inputName.value=44;
// console.log(`My age is : ${26}`);

/* ----------------------------------------------------------------------------------------------------------- */

// // 30 Setting & Getting HTML Attributes

// const inputNames=document.querySelector(".input-name-container input");

// //Setting the attribute

// // Element.setAttribute("name", "fullName"); // Set the Attribute with Value

// inputNames.setAttribute("value","Rajini")

// const isAliveDom=inputNames.getAttribute('dataIsAlive');
// const placeDom=inputNames.getAttribute("placeholder");

// console.log(inputNames.attributes); // list all attribute of that element

// console.log(inputNames.attributes[6].value); // attribute by index

// // console.log(inputNames.attributes.place.value); // attributes by property name (DOT Notation)

// // console.log(inputNames.attributes["interest"].value); // attributes by bracket notation
// // console.log(isAliveDOM, placeDOM);

// // methods

// // check for attribute existence
// console.log(inputNames.hasAttribute("age"));
// //remove existing attribute 
// console.log(inputNames.removeAttribute("data-is-alive"));

// // return Css Style Declaration instead instead of value

// //Data-* attribute 
// // get data * value like this

// // console.log(inputNames.dataset["interest"]);

// // Converting String to Boolean

// let warkingBoolean= inputNames.dataset.working=="true";
// console.log(typeof warkingBoolean);

// // // Task : Display all the Attributes Dynamically
// // for(let attr of inputNames.attributes){
// //   console.log(`${attr.name} is ${attr.value}`);
// // }

/* ----------------------------------------------------------------------------------------------------------- */

// setting & getting inline Style

// const inputN= document.querySelector(".input-name-container input");
//  const btnEl=document.querySelector(".input-name-container button");

//  // 1. set Attribute

// //  btnEl.setAttribute("style","padding: 6px; margin:5px;");

//  // 2. Direct Property access
// //  console.log(btnEl.style.cssText);

// //  btnEl.style.padding="6px 10px";
// //  btnEl.style.fontSize="10px";
// //  btnEl.style.backgroundColor ="#1b63ff";

// // 3 .cssText
// btnEl.style.cssText="padding:6px 10px;margin:5px;";

// btnEl.style.cssText +="font-weight:bold;";
// btnEl.style.cssText="background-color: #1b63ff";

// // getting the style 

// console.log(btnEl.style.backgroundColor);

// //get Computed Style()
// console.log(window.getComputedStyle(btnEl,":hover"));

/* ----------------------------------------------------------------------------------------------------------- */

// 32 Setting & Getting class Style 

// const inputNs=document.querySelector(".input-name-container input");



// // Get 
// // console.log(inputNs.className);

// //To overWrite Class Name
// inputNs.setAttribute('class',"newClassName ")
// // console.log(inputNs.className);
// inputNs.className +=" newClassName2  newClassName3";

// // console.log(inputNs.classList);

// for(let cssClass of inputNs.classList ){
//   console.log(cssClass);
// }

// // Manipulations

// console.log(inputNs.classList.length);
// inputNs.classList.add("5class");
// console.log(inputNs.classList.contains("newClassName"));
// console.log(inputNs.classList.replace("newClassName2","name2"));
// inputNs.classList.remove("newClassName3");
// console.log(inputNs.className);

// setTimeout(() => {
//   inputNs.classList.toggle("5class");
// }, 5000);

// // Task : Show div based on Click (toggle)

// const inputContainer=document.querySelector(".input-name-container");
// const showBtnEl=document.querySelector("#showBtn");

// showBtnEl.addEventListener("click",()=>{

//   if(inputContainer.style.display==="none"){
//     showBtnEl.innerText="Hide Div"
//     showBtnEl.style.backgroundColor="red";
//     inputContainer.style.display="block";
//   }

//   else{
//     inputContainer.style.display="none";
//     showBtnEl.style.backgroundColor="royalblue"
//     showBtnEl.innerText="show Div"
//   }

// });

/* ----------------------------------------------------------------------------------------------------------- */

// 34 Adding DOM Events & Event Object 

// const creditBtnEl=document.querySelector("header button");

//(X) Using HTML Attribute 
// creditBtnEl.setAttribute("onclick",'alert("No")');

//(X) DrawBacks -con't accept multiple action

// creditBtnEl.onclick=function(){
//   alert("no")
// }

// function handleAuthorInfo(){
//   alert("this is i'm")
// }
// creditBtnEl.onclick=handleAuthorInfo();

// Listen for Events using `AddEventListeners`
// window.addEventListener()
// document.addEventListener()
// element.addEventListeners()

// const handleCreditMsg=(event)=>{
//   alert("java script Dom-RDX")
//   console.log(event.target);
//   alert(event.type + " at " + event.currentTarget.innerHTML);
//   alert("Coordinates: " + event.clientX + ":" + event.clientY);
// }
// creditBtnEl.addEventListener("click",handleCreditMsg);
// document.addEventListener("contextmenu",handleCreditMsg);

/* ----------------------------------------------------------------------------------------------------------- */

// 35 Removing DOM Events
// const creditBtnEl = document.querySelector("header button");

// const handleCreditMsg = (event) => {
//   // alert("Javascript DOM - Anbuselvan");
//   console.log("Event Happening");

//   // removing
//   // creditBtnEl.removeEventListener("click", handleCreditMsg);
// };

// // Adding an EventListener
// creditBtnEl.addEventListener("click", handleCreditMsg, { once: true });

/* ----------------------------------------------------------------------------------------------------------- */
// 36 Event Bubbling , Capturing & Preparation
// const form1=document.querySelector("form");
// const divEl=document.querySelector("form div");
// const pEl=document.querySelector("form p");

// form1.addEventListener("click", (event)=>{
//   alert("Form");
//   console.log(`Target: ${event.target.tagName}, This : ${form1.tagName}`);
// });



// divEl.addEventListener("click",(event)=>{
//   alert('div')

// // stop bubbling

//   event.stopPropagation();

//   // Removes all action event Listener
//   event.stopImmediatePropagation();

//   pEl.addEventListener("click",()=>{
//     alert("p")
//   })

// });

// To catch an event on the capturing Phase

// form1.addEventListener("click", () => {}, { capture: true }); //by default False

// Task : Catch the capturing & Bubbling Phrase
// for (let elam of document.querySelectorAll("form, form *")){
//   // capturing phase
//   elam.addEventListener("click",()=>{
//     console.log(`Capturing Phase : ${elam.tagName}`);


//   },
//   {capture:true}
//   );

//   // Bubbling phase

//   elam.addEventListener("click",()=>{
//     console.log(`Bubbling Phase : ${elam.tagName}`);
//   });
// }


/* ----------------------------------------------------------------------------------------------------------- */

// 37 Prevent Default Browser Actions

// const formEl = document.querySelector("form");
// const inputEl = document.querySelector("form input");
// const checkboxEl = document.querySelector("form input[type='checkbox']");

// formEl.addEventListener("submit", (event) => {
//   event.preventDefault(); // Stops default behaviour

//   // Task: Validate all input fields to respective rules ()
//   if (
//     inputEl.value != "" ||
//     inputEl.value.length <= 3 ||
//     inputEl.value.length > 20
//   ) {
//     alert("Validation Error: Name Invalid");
//     return;
//   }

//   if (!checkboxEl.checked) {
//     alert("Validation Error: Check the terms.");
//     return;
//   }

//   console.log("Form Submitted", inputEl.value, checkboxEl.checked);

//   console.log("DefaultPrevented:", event.defaultPrevented);
// });

/* ----------------------------------------------------------------------------------------------------------- */

// 38 event delegation & dynamic Event

//  const tableEl = document.querySelector("table");

//  let selectedId;

//  tableEl.addEventListener("click", (event) => {
//    const target = event.target;
//    const closestTr = target.closest("tr");

//    if (target.tagName === "TH") return; // Ignoring TH element.

//    if (selectedId != undefined) {
//      selectedId.classList.remove("active"); // removing class
//    }

//    selectedId = closestTr;

//    closestTr.classList.add("active");

//    alert(`Hello ${closestTr.children[0].textContent}`);
//  });

//  // Task : show a donate page based on toggle

//  document.addEventListener("click", (event) => {
//   const id = event.target.dataset.toggleId;

//   if (!id) return; // ignore all

//   const el = document.getElementById(id);

//   el.hidden = !el.hidden;
// });

// const formEl = document.querySelector("#donate-form");

// formEl.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const donateAmount = event.target.querySelector("input").value;

//   alert(`Thank you for donating ₹${donateAmount}.`);
// });


/* ----------------------------------------------------------------------------------------------------------- */

// 39 DOM Mouse Event

//  document.addEventListener("mousedown", (event)=>{
//   console.log("mousedown", event);
//  })

// document.addEventListener("mouseup",(event)=>{
//   console.log("Mouse UP ",event);
// })

// document.addEventListener("mouseenter",(event)=>{
//   console.log("MouseEntry");
// })

// document.addEventListener("mouseleave",(event)=>{
//   console.log("MouseLeave");
// })

// document.addEventListener("mouseout",(event)=>{
//   console.log("MouseOut");
// })

// document.addEventListener("mouseover",(event)=>{
//   console.log("MouseOur");
// })

// document.addEventListener("click",(event)=>{
//   console.log("click");
// })

// document.addEventListener("dblclick",(event)=>{
//   console.log("dbClick");
// })

// Task : create on mouse tester app which should display respective message when that button is clicked 
// document.addEventListener("mouseup", (event) => {
//   switch (event.button) {
//     case 1:
//       alert("left Click")
//       break;
//     case 2:
//       alert("Middle Click")
//       break;
//     case 3:
//       alert("Right Click")
//       break;

//   }

// });


/* ----------------------------------------------------------------------------------------------------------- */

// 40 DOM Keyboard Event

// keyboard events
// document.addEventListener("keydown",(event)=>{
//   console.log("Keydown",event);
// })

// document.addEventListener("keyup",(event)=>{
//   console.log(`Keyup: key: ${event.key}, code: ${event.code}`);
//   console.log(event);
// })


// Task : Build a Simple typing test screen


// document.addEventListener("keyup", (event) => {
//   switch (event.key) {
//     case "ArrowUp":
//       alert("You have pressed ArrowUp Key");
//       break;
//     case "ArrowDown":
//       alert("You have pressed ArrowDown Key");
//       break;
//     case "ArrowLeft":
//       alert("You have pressed ArrowLeft Key");
//       break;
//     case "ArrowRight":
//       alert("You have pressed ArrowRight Key");
//       break;
//     default:
//       alert("Unknown key detected");
//       break;
//   }
// });

/* ----------------------------------------------------------------------------------------------------------- */


















































































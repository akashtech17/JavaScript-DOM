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
// document.body.children[0].children[0].innerText="learn HTML DOM in JavaScript - Tamil🐛";

// // find the text in the document programmatically.
// /*console.log(window.find("HTML DOM")); */ 
//  // SELECTING THE TEXT ON THE PAGE 

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
    
//     div.append(textNode);
//     main.prepend(div)
    
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









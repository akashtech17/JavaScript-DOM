let inputFood=document.getElementById("input-food");
let inputBtn=document.getElementById("input-btn");
let foodContainer=document.getElementById("food-container");

inputBtn.addEventListener("click",()=>{

    const li=document.createElement("li"); //step 1
    const text=document.createTextNode(inputFood.value) // step 3
    li.className="food-item"; // step 2

    li.append(text); // step 4

    foodContainer.append(li) // step 5
})




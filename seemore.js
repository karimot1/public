
// Retrieve the "foundObj" key from localStorage and parse it as JSON
// let todo = JSON.parse(localStorage.getItem("foundObj"));
// console.log(todo);
// // Check if todo is an array, and if not, initialize it as an empty array


// // Continue with the rest of your code...
// let alldata = document.getElementById("alldata");
  
//   alldata.innerHTML += ` <div class="d-flex mb-4 align-items-center bg-light flex-column" style="width:fit-content; height:fir-content;" id="todome" > 
//   <button id="${
//     todo.id
//   }" value='${
//     todo.price
//   }' onclick="showProduct(event)" style="width:250px; height:fit-content; min-height:350px; margin:auto; text-align:center;"  class="border-0 mb-2  flex-column align-items-center  rounded data${1} d-flex  justify-content-around">
     
// <img id="${todo.id}" value='${
//   todo.price
//   }' width="85%" height="210px" style="border-radius:10px;" class="mt-2" src='${
//     todo.images[0]
//   }' alt="">


// <p id="${todo.id}" value='${todo.price}' class="text d-flex align-items-center justify-content-start flex-column w-100">

// <span id="${todo.id}" style="font-size:14px;"  value='${todo.price }' class="mb-2 mt-3 w-100  "  >
// ${todo.title.toUpperCase()}
// </span>



// <b id="${todo.id}" value='${
//   todo.price
//   }' class="d-flex mb-2 align-items-center justify-content-between w-75 "style="font-size:12px";> 

// <legend id="${todo.id}" value='${
//   todo.price
//   }' style="font-size:10px;" class="ms-2 me-2">  N${todo.price}.00  </legend> 

// <s id="${todo.id}" value='${
//   todo.price
//   }'  class="ms-2 me-2" style="font-size:12px; font-weight:300;">N${(
//     todo.price +
//     todo.price * (todo.discountPercentage / 100)
//   ).toFixed(2)} </s>

// <small id="${todo.id}" value='${
//   todo.price
//   }' class=" ms-2 me-2 danger" style="font-size:8px; color:#ff706d;"> -${
//     todo.discountPercentage
//   }%</small>

// </b>

// <div class="progress" role="progressbar" style="width:95%;" aria-label="Success example" aria-valuenow="${
//   todo.stock
//   }" aria-valuemin="0" aria-valuemax="100">
//   <div class="progress-bar bg-success"  style="width:${todo.stock}%;" >${
//     todo.stock
//   }%</div>
// </div>




// </p>

// </button>

// <b onclick="addToCart(event)" id="${todo.id}" value='${todo.price}' onmouseenter="changeColor(event)"  style="font-size:14px;height:30px; width:250px"; border:"1px solid #f855a6; color:#f855a6"; class="d-flex align-items-center justify-content-center"> Add to cart </b>
//    </div>

// `;
// function changeColor(event) {
//   el = event.target;
//   el.style.backgroundColor = "#f855a6";
//   el.style.color = "white";

//   el.addEventListener("mouseleave", () => {
//     el.style.backgroundColor = "white";
//     el.style.color = "#f855a6";
//   });
// }


let theObj = JSON.parse(localStorage.getItem("foundObj"));
let shopBar = document.getElementById('shopBar')
console.log(theObj);
let remainingStock;
let amountLeft;
let quantityNo = 0;

let theClickedItem = document.getElementById("theClickedItem");
let soldItem = document.getElementById("soldItem");
let itemName = document.getElementById("itemName");


  soldItem.innerHTML = `${theObj.category}`;

theClickedItem.innerHTML = `
<div class="div3">
<div class="d-flex align-items-start justify-content-around" >
<div id="carouselExampleAutoplaying" class="carousel slide  caroli" data-bs-ride="carousel h-75 w-50  " style=" height:50vh; ">
  <div class="carousel-inner  ">
    <div class="carousel-item active">
      <img src="${theObj.images[0]}" class="d-block w-100" style=" height:50vh;" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${theObj.images[1]}" style=" height:50vh;" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${theObj.images[2]}" class="d-block w-100" style=" height:50vh;" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${theObj.images[3]}" class="d-block w-100" style=" height:50vh;" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${theObj.images[4]}" class="d-block w-100" style=" height:50vh;" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev  carobutt" style="margin-top:150px"; type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next carobutt" style="margin-top:150px"; type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
<div class="div2" >
<div class="d-flex align-items-start justify-content-start flex-column" >
<h4 class="ms-3 mt-3">${theObj.description}</h4>
<small class=" ms-3 mt-1" >Brand: ${theObj.brand} </small>
<small class="ms-3 " >Rating: ${theObj.rating}/5 </small>

<p class=" mt-3 border w-100 p-3" style="font-weight:900;">  N${theObj.price}.00 </p>



<legend class="w-100 " style="font-size:15px;">
<b class="me-3 ms-3" > Quantity:</b>
<button class="ms-1  bg-dark text-light rounded-circle ps-2 pe-2" onclick="crease(quantityNo--)" > - </button> 

<small class="ms-1" id="quantity">1</small>  

<button class="ms-1 bg-dark text-light rounded-circle ps-2 pe-2" onclick="crease(quantityNo++)"> + </button>





  </legend> 
  <small id="amountLaft" class="ms-3 " > </small>


  <b onclick="addToC(event)" id="${theObj.id}" value='${theObj.price}'  style="font-size:14px;height:30px; width:250px; border:1px solid #f855a6; color:#f855a6;" class="d-flex align-items-center ms-3 mt-5 justify-content-center "> Buy Now </b> 
  </div>
</div>
</div>

`;



itemName.innerHTML = theObj.title;

let quantity = document.getElementById("quantity");
let quantityy = document.getElementById("quantityy");

function crease(no) {
  if (quantityNo < 1) {
    quantityNo = quantityNo + 1;
    return;
  } else if (quantityNo > theObj.stock) {
    quantityNo = theObj.stock - 1;
  } else {
    quantity.innerHTML = quantityNo;
    quantityy.innerHTML = quantityNo;
    amountLeft = theObj.stock - quantityNo;
    remainingStock = document.getElementById("amountLaft");
    remainingStock.innerHTML = `Stock left : ${amountLeft}`;
  }
}


crease(quantityNo);

// remainingStock.innerHTML = `Stock left : ${amountLeft}`;

// console.log(cartArray);

let cart = document.querySelectorAll(".theCart");

let cartNum = localStorage.getItem("cartNo") || 0;

let cartArray = JSON.parse(localStorage.getItem("cartArray")) || [];

function addToC(event) {
  if (quantityNo <= 0) {
    return;
  } else {
    cart.forEach((c) => {
      cartNum = Number(cartNum) + Number(quantityNo) ;
      localStorage.setItem("cartNo", cartNum);
      c.innerHTML = cartNum;
      el = event.target;
      console.log(el.id);

      let foundObj = theObj.find((obj) => {
        return el.id == obj.id;
      });

      let item = {
        itemImage: foundObj.images[0],
        itemTitle: foundObj.title,
        itemQuantity: Number(quantityNo),
       get itemPrice() {
          return foundObj.price * this.itemQuantity;
        },
        itemAmount: foundObj.price 
      };

      cartArray.push(item);
      localStorage.setItem("cartArray", JSON.stringify(cartArray));
      console.log(cartArray);

      window.location.href = "cart.html";
    });
  }
}







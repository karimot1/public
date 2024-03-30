



let theObj = JSON.parse(localStorage.getItem("foundObj"));
let fetchedProduct = JSON.parse(localStorage.getItem("allProd"))
console.log(fetchedProduct);



let shopBar = document.getElementById('shopBar')
console.log(theObj);
let remainingStock;
let amountLeft;
let quantityNo = 0;

let theClickedItem = document.getElementById("theClickedItem");
let soldItem = document.getElementById("soldItem");
let itemName = document.getElementById("itemName");


  soldItem.innerHTML = `${theObj.category}`;
  categoryitem .innerHTML = `${theObj.category}`;
  itemsname.innerHTML = `${theObj.title}`;
  
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
    // quantityy.innerHTML = quantityNo;
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
  let el = event.target;
  let foundObj = fetchedProduct.find((obj) => el.id == obj.id);

  // Check if the item is already in the cart
  let existingItemIndex = cartArray.findIndex((item) => item.itemTitle === foundObj.title);

  if (existingItemIndex !== -1) {
      // If the item is already in the cart, increment its quantity
      cartArray[existingItemIndex].itemQuantity++;
  } else {
      // If the item is not in the cart, add a new entry
      let item = {
          itemImage: foundObj.images[0],
          itemTitle: foundObj.title,
          itemQuantity: 1,
          get itemPrice() {
              return foundObj.price * this.itemQuantity;
          },
          itemAmount: foundObj.price,
      };

      cartArray.push(item);
     
  }
  window.location.href = "cart.html";
  // Update localStorage with the modified cartArray
  localStorage.setItem("cartArray", JSON.stringify(cartArray));

  // Update the cart count
  cartNum = cartArray.reduce((total, item) => total + item.itemQuantity, 0);
  localStorage.setItem("cartNo", cartNum);

  // Display the updated cart count
  displayCartNumber();

  // The rest of your existing code for displaying messages, updating UI, etc.
}

function displayCartNumber() {
  cart.forEach((c) => {

    c.innerHTML = cartNum;
  });
}
displayCartNumber()
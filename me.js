let cart = document.querySelectorAll(".theCart");

let cartNum = localStorage.getItem("cartNo") || 0;

let cartArray = JSON.parse(localStorage.getItem("cartArray")) || [];

let cartDiv = document.getElementById('cartDiv')
let categoryText = document.getElementById('cartegoryText')
let cartAddText = document.getElementById('cartAddText')

function addToCart(event) {
  cart.forEach((c) => {
    ++cartNum;
    localStorage.setItem("cartNo", cartNum);
    displayCartNumber() 
    el = event.target;
    console.log(el.id);

    let foundObj = fetchedData.find((obj) => {
      return el.id == obj.id;
    });

    let item = {
      itemImage: foundObj.images[0],
      itemTitle: foundObj.title,
      itemQuantity: 1,
      get itemPrice() {
        return foundObj.price * this.itemQuantity;
      },
      itemAmount: foundObj.price,
    };

    cartAddText.innerHTML = `You've added ${foundObj.title} to Cart`
    categoryText.innerHTML = `${foundObj.category.toUpperCase()}`
 
 cartDiv.style.left = '20px'
 cartDiv.style.transition = '0.5s'
 
 setTimeout(()=> {
   cartDiv.style.left = '-250px'
   cartDiv.style.transition = '0.5s'
 }, 3000)

    cartArray.push(item);
    localStorage.setItem("cartArray", JSON.stringify(cartArray));
    console.log(cartArray);
  });
}

function displayCartNumber() {
  cart.forEach((c) => {
    c.innerHTML = cartNum;
  });
}

displayCartNumber() 

function goHome() {
  window.location.href = "index.html";
}

function seeAllItems() {
  window.location.href = "seemore.html";
}

fetchedData = JSON.parse(localStorage.getItem("products"));
console.log(fetchedData);

function showProduct(event) {
  el = event.target;
  console.log(el.id);
  let foundObj = fetchedData.find((obj) => {
    return el.id == obj.id;
  });

  localStorage.setItem("foundObj", JSON.stringify(foundObj));

  window.location.href = "item.html";
}

let tbody = document.getElementById("tBody");

function goToCart() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      console.log(user);
      currentUser = user;

      window.location.href = "thecart.html";

      // ...
    } else {
      // User is signed out
      // ...
      alert("no user is logged in");
      window.location.href = "login.html";
    }
  });
}

let search = document.querySelectorAll(".searcher");
console.log(search);

let dropdownSearch = document.getElementById("drop");
dropdownSearch.style.visibility = "hidden";

search.forEach((s) => {
  s.addEventListener("input", (event) => {
    let sValue = event.target.value.toLowerCase();
    let searched = fetchedData.filter(({ title, category, brand }) => {
      return (
        title.toLowerCase().includes(sValue) ||
        category.toLowerCase().includes(sValue) ||
        brand.toLowerCase().includes(sValue)
      );
    });

    if (searched.length == 0) {
      dropdownSearch.innerHTML = "this product does not exist";
    } else if (s.value.length > 0) {
      dropdownSearch.innerHTML = "";
      dropdownSearch.style.visibility = "visible";
      searched.forEach((data) => {
        dropdownSearch.innerHTML += `<button id="${data.id}"  onclick="showProduct(event)" class="border border-success m-1 bg-light d-flex text-dark align-items-center justify-content-between  ;" style="height:40px; width:98%;" value='${data.price}'>
       
        <p style="text-align:left;" id="${data.id}" value='${data.price}'  class="h-100 d-flex align-items-center mt-3"> ${data.title} </p>
        <p style="text-align:left; font-size:8px; width:120px;" id="${data.id}" value='${data.price}'  class="h-100 d-flex align-items-center mt-3"> ${data.category} </p>
        <p style="text-align:left; font-size:5px; width:120px;" id="${data.id}" value='${data.price}'  class="h-100 d-flex align-items-center mt-3"> ${data.brand} </p>
        <img style="width:20px; text-align:left; height;90%; " id="${data.id}" value='${data.price}'  src="${data.images[0]}"> </img>
        
        </button>`;
      });
    } else {
      dropdownSearch.style.visibility = "hidden";
    }
  });
});

function goToLogin() {
  window.location.href = "login.html";
}





// let theObj = JSON.parse(localStorage.getItem("foundObj"));
// let shopBar = document.getElementById('shopBar')
// console.log(theObj);
// let remainingStock;
// let amountLeft;
// let quantityNo = 0;

// let theClickedItem = document.getElementById("theClickedItem");
// let soldItem = document.getElementById("soldItem");
// let itemName = document.getElementById("itemName");


// soldItem.innerHTML = ${theObj.category};

// theClickedItem.innerHTML = `
// <div class="d-flex align-items-start justify-content-around w-100" >

// <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel h-75 " style="margin-top:50px;  width:400px;">
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src="${theObj.images[0]}" class="d-block w-100" alt="...">
//     </div>
//     <div class="carousel-item">
//       <img src="${theObj.images[1]}" class="d-block w-100" alt="...">
//     </div>
//     <div class="carousel-item">
//       <img src="${theObj.images[2]}" class="d-block w-100" alt="...">
//     </div>
//     <div class="carousel-item">
//       <img src="${theObj.images[3]}" class="d-block w-100" alt="...">
//     </div>
//     <div class="carousel-item">
//       <img src="${theObj.images[4]}" class="d-block w-100" alt="...">
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>

// <div class=" mt-5 d-flex align-items-start justify-content-start flex-column" style="width:60%; height:500px; background-color:white;">
// <h4 class="ms-3 mt-3">${theObj.description}</h4>
// <small class=" ms-3 mt-1" >Brand: ${theObj.brand} </small>
// <small class="ms-3 " >Rating: ${theObj.rating}/5 </small>

// <p class=" mt-3 border w-100 p-3" style="font-weight:900;">  N${theObj.price}.00 </p>



// <legend class="w-100 " style="font-size:15px;">
// <b class="me-3 ms-3" > Quantity:</b>
// <button class="ms-1  bg-dark text-light rounded-circle ps-2 pe-2" onclick="crease(quantityNo--)" > - </button> 

// <small class="ms-1" id="quantity">  </small>  

// <button class="ms-1 bg-dark text-light rounded-circle ps-2 pe-2" onclick="crease(quantityNo++)"> + </button>





//   </legend> 
//   <small id="amountLeft" class="ms-3 " >Stock: </small>


//   <b onclick="addToC(event)" id="${theObj.id}" value='${theObj.price}'  style="font-size:14px;height:30px; width:250px; border:1px solid #f855a6; color:#f855a6;" class="d-flex align-items-center ms-3 mt-5 justify-content-center "> Buy Now </b> 

// </div>




// </div>

// `;

// shopBar.innerHTML = `


// <div class="d-flex mt-4  flex-row h-100 align-items-start justify-content-start ">
// <img class="rounded" width="70px" height="70%" src="${theObj.images[0]}"> </img>
// <div class="d-flex ms-2 flex-column h-100 align-items-start justify-content-start ">
// <b  style="color:#644ba0; font-size:12px;" > ${theObj.brand} </b>
// <b> ${theObj.title} </b>
// </div>
// </div>

// <h2 class="h-100 mt-5" style=" width:90px; font-weight:600;"> N${theObj.price}.00  </h2>

// <legend class=" h-75 mt-3 ms-5 d-flex flex-column align-items-center justify-content-center" style="text-align:center; width:90px; font-size:15px;">
// <p><b class="me-3 ms-3" style="font-family:sans-serif; " > Quantity:</b>
// <button class="ms-1  bg-dark text-light rounded-circle ps-2 pe-2" onclick="crease(quantityNo--)" > - </button> 

// <small class="ms-1" id="quantityy">  </small>  

// <button class="ms-1 bg-dark text-light rounded-circle ps-2 pe-2" onclick="crease(quantityNo++)"> + </button> </p>
//   </legend> 

//   <b onclick="addToC(event)" id="${theObj.id}" value='${theObj.price}'  style="font-size:14px;height:30px; width:200px; color:white;" class="d-flex align-items-center mb-4  h-25 rounded shadow p-3 justify-content-center bg-success border border-success"> Buy Now </b> 

// `

// itemName.innerHTML = theObj.title;

// let quantity = document.getElementById("quantity");
// let quantityy = document.getElementById("quantityy");

// function crease(no) {
//   if (quantityNo < 0) {
//     quantityNo = quantityNo + 1;
//     return;
//   } else if (quantityNo > theObj.stock) {
//     quantityNo = theObj.stock - 1;
//   } else {
//     quantity.innerHTML = quantityNo;
//     quantityy.innerHTML = quantityNo;
//     amountLeft = theObj.stock - quantityNo;
//     remainingStock = document.getElementById("amountLeft");
//     remainingStock.innerHTML = Stock left : ${amountLeft};
//   }
// }


// crease(quantityNo);

// remainingStock.innerHTML = Stock left : ${amountLeft};

// console.log(cartArray);

// function addToC(event) {
//   if (quantityNo <= 0) {
//     return;
//   } else {
//     cart.forEach((c) => {
//       cartNum = Number(cartNum) + Number(quantityNo) ;
//       localStorage.setItem("cartNo", cartNum);
//       c.innerHTML = cartNum;
//       el = event.target;
//       console.log(el.id);

//       let foundObj = fetchedData.find((obj) => {
//         return el.id == obj.id;
//       });

//       let item = {
//         itemImage: foundObj.images[0],
//         itemTitle: foundObj.title,
//         itemQuantity: Number(quantityNo),
//        get itemPrice() {
//           return foundObj.price * this.itemQuantity;
//         },
//         itemAmount: foundObj.price 
//       };

//       cartArray.push(item);
//       localStorage.setItem("cartArray", JSON.stringify(cartArray));
//       console.log(cartArray);

//       window.location.href = "thecart.html";
//     });
//   }
// }
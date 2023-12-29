// Retrieve the "foundObj" key from localStorage and parse it as JSON
let todo = JSON.parse(localStorage.getItem("foundObj"));
console.log(todo);
// Check if todo is an array, and if not, initialize it as an empty array
if (!Array.isArray(todo)) {
  todo = [];
}
else{
  console.log('not work')
}
// Log the todo array to the console for debugging purposes


// Continue with the rest of your code...
let alldata = document.getElementById("alldata");

todo.forEach((data, i) => {
  
  alldata.innerHTML += ` <div class="d-flex mb-4 align-items-center bg-light flex-column" style="width:fit-content; height:fir-content;" > 
  <button id="${
    data.id
  }" value='${
    data.price
  }' onclick="showProduct(event)" style="width:250px; height:fit-content; min-height:350px; margin:auto; text-align:center;"  class="border-0 mb-2  flex-column align-items-center  rounded data${1} d-flex  justify-content-around">
     
<img id="${data.id}" value='${
    data.price
  }' width="85%" height="210px" style="border-radius:10px;" class="mt-2" src='${
    data.images[0]
  }' alt="">


<p id="${data.id}" value='${
    data.price
  }' class="text d-flex align-items-center justify-content-start flex-column w-100">

<span id="${data.id}" style="font-size:14px;"  value='${
    data.price
  }' class="mb-2 mt-3 w-100  "  >
${data.title.toUpperCase()}
</span>



<b id="${data.id}" value='${
    data.price
  }' class="d-flex mb-2 align-items-center justify-content-between w-75 "style="font-size:12px";> 

<legend id="${data.id}" value='${
    data.price
  }' style="font-size:10px;" class="ms-2 me-2">  N${data.price}.00  </legend> 

<s id="${data.id}" value='${
    data.price
  }'  class="ms-2 me-2" style="font-size:12px; font-weight:300;">N${(
    data.price +
    data.price * (data.discountPercentage / 100)
  ).toFixed(2)} </s>

<small id="${data.id}" value='${
    data.price
  }' class=" ms-2 me-2 danger" style="font-size:8px; color:#ff706d;"> -${
    data.discountPercentage
  }%</small>

</b>

<div class="progress" role="progressbar" style="width:95%;" aria-label="Success example" aria-valuenow="${
    data.stock
  }" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-success"  style="width:${data.stock}%;" >${
    data.stock
  }%</div>
</div>




</p>

</button>

<b onclick="addToCart(event)" id="${data.id}" value='${
    data.price
  }' onmouseenter="changeColor(event)"  style="font-size:14px;height:30px; width:250px"; border:"1px solid #f855a6; color:#f855a6"; class="d-flex align-items-center justify-content-center"> Add to cart </b>
   </div>

`;
});

function changeColor(event) {
  el = event.target;
  el.style.backgroundColor = "#f855a6";
  el.style.color = "white";

  el.addEventListener("mouseleave", () => {
    el.style.backgroundColor = "white";
    el.style.color = "#f855a6";
  });
}









document.addEventListener('DOMContentLoaded', function () {
  // Your existing code here
  let cartArray = JSON.parse(localStorage.getItem("cartArray")) || [];
  let cartNum = localStorage.getItem("cartNo");
  let cartContainer = document.getElementById("cartContainer");
  let totals = document.getElementById("total");
  let subtotals = document.getElementById("subtotal");
  let thetotal = document.getElementById("thetotal");
  let tbody = document.getElementById('tbody');
console.log( cartNum );

  let totalPrice = localStorage.getItem("totalPrice") || 0;

  totalPrice = cartArray.reduce((a, { itemPrice }) => {
      return a + itemPrice;
  }, 0);
  localStorage.setItem("totalPrice", totalPrice);

  function displayCart() {
    if (cartArray == null || cartArray.length == 0) {
      cartContainer.innerHTML = `
  
  
          <div id="empty">
              <div class="contents">
                  <iconify-icon icon="bi:cart-x-fill" style="color: rgb(237,1,127);" width="60"></iconify-icon>
              <h4>Your cart is empty.</h4>
              <p>You have not added any item to your cart.</p>
              </div>
          </div>
         
      
      
      `;
    } else if (cartArray.length > 0) {
   let currentTime = new Date().getMinutes()
  
  let time = ()=> {
      const time = new Date().getMinutes()
      return time
  }
  const staticTime = time()
  console.log(time());
  console.log(currentTime);
      cartArray.forEach(
        ({ itemImage, itemQuantity, itemTitle, itemPrice, itemAmount }, i) => {
          tbody.innerHTML += `<tr style="background-color: red; color: black">
            <td style="display: flex;">
                <img width="50px" height="50px" src="${itemImage}" alt="">
                
                <div class="proo">
                    <h5>${itemTitle}</h5>
                <p>Sold by </p>
                </div>
            
            
            </td>
            <td style="background-color: blue;" >
                
                <div style="display: flex; margin-left: 10px;" class="inc">
                <button style="width: 25px; height: 25px;">-</button>
                <button style="width: 25px; height: 25px;">${itemQuantity}</button>
                <button style="width: 25px; height: 25px;">+</button>
                </div>
                
            </td>
            
            <td>
               <h5>N${itemPrice} </h5>
                <p> N${itemAmount} x  ${itemQuantity} pcs </p>
            </td>
            <td style=" text-align: end; ">
                
                <div style="margin-right: 20px;" class="r">
                <button onclick="deleteItem(event)" id="${i}" value="${itemQuantity}" name="${itemPrice}" >Remove item</button>
                <br>
                <p> ${ currentTime - staticTime }mins ago    </p>
                </div>
            
            
            </td>
            </tr>`;
        }
      );
    }
  }
  
  function displayPrice() {
    subtotals.innerHTML = `Subtotal: N${totalPrice}`;
    totals.innerHTML = `Total: N${totalPrice}`;
    
  }
  
  displayPrice();

  displayCart();
});






function deleteItem(event) {
  el = event.target;
  cartNum = Number(cartNum) - Number(el.value);
  localStorage.setItem("cartNo", cartNum);
  let index = el.id;
  cartArray.splice(index, 1);
  localStorage.setItem("cartArray", JSON.stringify(cartArray));
  tbody.innerHTML = "";
  totalPrice = totalPrice - Number(el.name);
  localStorage.setItem("totalPrice", totalPrice);
  displayCart();

  displayCartNumber();

  displayPrice();
}

currentUser = localStorage.getItem("currentUser");
console.log(currentUser);

const paymentForm = document.getElementById("paymentForm");
paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(e) {
  e.preventDefault();
  paymentForm.innerHTML = `<div class="text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  </div>`;
  let handler = PaystackPop.setup({
    key: "pk_test_9a558288d1670a641dafa6f4e899ddb24f2fe749", // Replace with your public key
    email: currentUser,
    amount: totalPrice * 100,
    ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function () {
      alert("Window closed.");
    },
    callback: function (response) {
      let message = "Payment complete! Reference: " + response.reference;
      alert(message);
      paymentForm.innerHTML = 'Payment Confirmed';
      cartArray.splice(0, cartArray.length);
      localStorage.setItem("cartArray", JSON.stringify(cartArray));
      tbody.innerHTML = "";
      displayCart();
      cartNum = 0;
      localStorage.setItem("cartNo", cartNum);
      displayCartNumber();
    },
  });

  handler.openIframe();
}
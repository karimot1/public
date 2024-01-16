

  
  let cartContainer = document.getElementById("cartContainer");
  let totals = document.getElementById("total");
  let subtotals = document.getElementById("subtotal");
 
  let tbody = document.getElementById('tBody');
console.log( cartNum );

  let totalPrice = localStorage.getItem("totalPrice") || 0;

  totalPrice = cartArray.reduce((a, { itemPrice }) => {
      return a + itemPrice;
  }, 0);
  localStorage.setItem("totalPrice", totalPrice);

  function displayCart() {
    tbody.innerHTML = ""
    let totalAmount = 0;
    if (!cartNum || cartNum == 0 || cartArray.length === 0) {
      cartArray = [];
            localStorage.removeItem("cartArray");

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
        ({ itemImage, itemQuantity, itemTitle, itemPrice }, i) => {
          const currentItemAmount = itemPrice * itemQuantity;
          totalAmount += currentItemAmount;

          tbody.innerHTML += `
          <tr >
            <td>
            <div  style="display:flex; flex-wrap:wrap; margin-left:10px;">
                <img width="50px" height="50px" src="${itemImage}" alt="">
                
                <div style="margin-left:10px;" class="proo">
                    <h5 style="font-size:15px;font-weight:600;color:#404553;">${itemTitle}</h5>
                <p style="font-size:12px;font-weight:400;color:#50545b;">Sold by  Konga</p>
                </div>
                </div>
            
            </td>
            <td>
                
                <div style="display: flex; flex-wrap:wrap; justify-content: center; align-items:center;" class="inc">
                <button onclick="decreaseQuantity(${i})" style="width: 25px; box-shadow:3px 3px 3px 3px rgba(0, 0, 0, 0.062); background-color:#ffffff;border:1px solid  #b5b2ac; height: 25px;">-</button>
                <button style="width: 25px;box-shadow:3px 3px 3px 3px rgba(0, 0, 0, 0.062); background-color:#ffffff;border:1px solid  #b5b2ac; height: 25px;">${itemQuantity}</button>
                <button onclick="increaseQuantity(${i})" style="width: 25px;box-shadow:3px 3px 3px 3px rgba(0, 0, 0, 0.062);   background-color:#ffffff;border:1px solid  #b5b2ac; height: 25px;">+</button>
                </div>
                
            </td>
            
            <td>
            <div  style="display:flex; flex-wrap:wrap;  width:80px;" class="td">
            <div>
               <h5 style="font-size:20px;font-weight:400;color:#000000;">N${currentItemAmount} </h5>
                <p style="font-size:12px;font-weight:400;color:#000000;"> N${itemPrice} x  ${itemQuantity} pcs </p>
                </div>
                </div>
            </td>
            <td>
                
                <div style="display: flex; flex-wrap:wrap; justify-content: center; align-items:center;" class="r">
                <button class="butremove" style="width:100px; border: 0; background-color:transparent; color:#94004f;font-size:12px;font-weight:700;" onclick="deleteItem(event,document.getElementById('tBody')
              )" id="${i}" value="${itemQuantity}" name="${itemPrice}" >Remove item</button>
                <br>
                <p> ${ currentTime - staticTime }mins ago    </p>
                </div>
            
            
            </td>
            </tr>
            `;
        }
      );
    }
    displayPrice(totalAmount);
  }
  
  function decreaseQuantity(index) {
    if (cartArray[index].itemQuantity > 1) {
      cartArray[index].itemQuantity--;
      displayCart();
    }
  }
  
  function increaseQuantity(index) {
    cartArray[index].itemQuantity++;
    displayCart();
  }
  function displayPrice(totalAmount) {
    subtotals.innerHTML = `Subtotal: N${totalAmount}`;
    totals.innerHTML = `Total: N${totalAmount}`;
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    displayPrice(totalPrice);
    displayCart();
  });




function deleteItem(event, tbody) {
  try {
    let el = event.target;
    
    // Log the initial values
    console.log("Initial cartNum:", cartNum);
    console.log("Initial cartArray:", cartArray);
    console.log("Initial totalPrice:", totalPrice);

    // Ensure el.value is a valid number
    let valueToRemove = Number(el.value) || 0;

    // Ensure cartNum is a valid number
    cartNum = Number(cartNum) || 0;

    // Ensure cartNum won't go below zero
    cartNum = Math.max(0, cartNum - valueToRemove);

    // Log the updated values
    console.log("Updated cartNum:", cartNum);

    localStorage.setItem("cartNo", cartNum);
    let index = el.id;
    cartArray.splice(index, 1);
    localStorage.setItem("cartArray", JSON.stringify(cartArray));

    // Log the updated cartArray
    console.log("Updated cartArray:", cartArray);

    // Remove only the row corresponding to the deleted item
    tbody.deleteRow(index);

    totalPrice = totalPrice - Number(el.name);
    localStorage.setItem("totalPrice", totalPrice);

    // Log the updated totalPrice
    console.log("Updated totalPrice:", totalPrice);

    // Display the updated cart
    displayCart();
    displayCartNumber();
    displayPrice(totalAmount);

  } catch (error) {
    console.error("Error in deleteItem:", error);
  }
}

document.addEventListener('DOMContentLoaded', function () {
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
      key: "pk_test_06f70739fc43a6443c0f81154ed8bd962e557edf", // Replace with your public key
      email: currentUser,
      amount: totalPrice * 100* cartNum,
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


});
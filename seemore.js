let fetchData = JSON.parse(localStorage.getItem('products'))
console.log(fetchData)
let alldata = document.getElementById('alldata')

fetchData.forEach((el,i)=> {
    alldata.innerHTML += `<div> 
    <div id="${el.id}" value="${el.price}">
     </div>
 
 
 
     </div>`
});
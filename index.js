import { menuArray } from "./data.js"

const OrderProcess = document.getElementById("order-process")


document.addEventListener("click", function (e) {

    if (e.target.dataset.additemmenu) {

        handleAddMenuClick(e.target.dataset.additemmenu)
    }
})

const orderArray = []


function handleAddMenuClick(menuId) {
    const order = AddMenu(menuId)
    orderArray.push(order)

    getOrderHtml()
   const totalsum = getSumPrice()
   document.getElementById("total-price").innerHTML = `<p>Total Price</p> $${totalsum} `
  
   console.log(totalsum )
   OrderProcess.classList.remove("hidden");
   OrderProcess.classList.add("show");
}

function getSumPrice() {
    const totalPrice = orderArray.reduce((total, order) => {
        return total + order.price
    }, 0)
   return totalPrice
}

function AddMenu(addMenuId) {
    const targetMenuObj = menuArray.filter(function (addmenu) {
        return addmenu.id == addMenuId
    })[0]

    return targetMenuObj
}



function getOrderHtml() {
    let orderHtml = ``
    //  for (let order of orderArray) {
    //     orderHtml += order.name
    //  console.log(order.name)
    // }
    orderArray.forEach(function (order) {
        // console.log(order.name)
        orderHtml += ` 
                        <div class="ordered-items">
                            <p>
                            ${order.name}
                            </p>
                            <p>
                            $${order.price}
                            </p>
                            
                        </div>
                        <hr>
                    `

    })


    document.getElementById("your-order").innerHTML = orderHtml
}

function getMenuHtml() {
    let menuHtml = ``
    menuArray.forEach(function (menuItem) {




        menuHtml += `
                <div class="__menu-items">
               
                
                    <div class="__menu-details">
                            <div class="emoji">${menuItem.emoji}</div>
                            <div class="__menu-details-text">
                                <p>${menuItem.name}</p>
                                <p>${menuItem.ingredients.join(", ")}</p>
                                <p>$${menuItem.price}</p>
                            </div>
                            
                        </div>
                    <div>
                    <i class="fa-solid fa-circle-plus" data-additemmenu="${menuItem.id}"></i>
                    </div>
                    
                </div>
            `
    })
    return menuHtml
}

function render() {
    document.getElementById("menu").innerHTML = getMenuHtml()
    
}

render()


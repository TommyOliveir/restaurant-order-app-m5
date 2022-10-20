import { menuArray } from "./data.js"

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
                        <div>
                            <p>
                            ${order.name}
                            </p>
                            <p>
                            ${order.price}
                            </p>
                        </div>
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


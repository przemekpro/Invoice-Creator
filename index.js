let myOrders = []

const washCarBtn = document.getElementById("wash-car-btn")
const mowLawnBtn = document.getElementById("mow-lawn-btn")
const pullWeedsBtn = document.getElementById("pull-weeds-btn")
const sendInvoice = document.getElementById("send-invoice")
const removeButton = document.getElementById("remove-btn")


const infoMessage = document.getElementById("info-message")
const renderTask = document.getElementById("task")
const renderPrice = document.getElementById("price")
const totalAmount = document.getElementById("total-amount")
const paymentMethods = document.getElementById("payment-methods")

washCarBtn.addEventListener("click", () => { 
    myOrders.push({title: "Wash Car", price: 10})
    renderOrder()
    summaryOrder()
    washCarBtn.disabled = true;
})

mowLawnBtn.addEventListener("click", () => { 
    myOrders.push({title: "Mow Lawn", price: 20})
    renderOrder()
    summaryOrder()
    mowLawnBtn.disabled = true;
})

pullWeedsBtn.addEventListener("click", () => { 
    myOrders.push({title: "Pull Weeds", price: 30})
    renderOrder()
    summaryOrder()
    pullWeedsBtn.disabled = true;
    
})

sendInvoice.addEventListener("click", () => {
    if (myOrders.length > 0) {
        infoMessage.innerHTML = `<p id="sent-message">Invoice was sent</p>`
        myOrders = []
        paymentMethods.textContent = ""
        totalAmount.textContent = "$0"
        washCarBtn.disabled = false;
        mowLawnBtn.disabled = false;
        pullWeedsBtn.disabled = false;
        renderOrder()
    }
})

removeButton.addEventListener("dblclick", () => {
    myOrders = []
    paymentMethods.textContent = ""
    totalAmount.textContent = "$0"
    washCarBtn.disabled = false;
    mowLawnBtn.disabled = false;
    pullWeedsBtn.disabled = false;
    
    renderOrder()
})

function renderOrder() {
    let title = ""
    let price = ""
    for (let i=0; i < myOrders.length; i++) {
        title += `<li>${myOrders[i].title}</li>`
        price += `<li>$${myOrders[i].price}</li>`
    }
    renderTask.innerHTML = title 
    renderPrice.innerHTML = price
}

function summaryOrder() {
    let sum = 0
    for (let i = 0; i < myOrders.length; i++) {
        sum += myOrders[i].price
    }
    paymentMethods.innerHTML = "We accept cash, credit card, or PayPal"
    totalAmount.innerHTML = "$" + sum
}


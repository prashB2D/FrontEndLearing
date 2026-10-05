// ------------------------------------------------------------
// 4 main functions for Hostel Food Ordering System
// 1. placeOrder()      – order food (starts the timer)
// 2. cancelOrder()     – cancel current order
// 3. checkOrderStatus() – checks if food is ready (alert)
// 4. updateDisplay()   – updates status on screen
// ------------------------------------------------------------

let orderTimer = null;          // holds the interval ID
let orderCount = 0;             // tracks how many orders
let orderActive = false;        // tracks if order is active

// ---- function 1: update display ----
function updateDisplay(message) {
    const display = document.getElementById('statusDisplay');
    if (display) {
        display.innerHTML = message;
    }
}

// ---- function 2: check order status (alert when ready) ----
function checkOrderStatus() {
    // "heu asxzuntaion" - health assessment = order ready check
    alert(`🍽️ ORDER READY! 
    
Your food is ready to eat!
Order #${orderCount}
Please come to the mess counter.`);

    // clear the timer since order is ready
    if (orderTimer !== null) {
        clearInterval(orderTimer);
        orderTimer = null;
        orderActive = false;
        updateDisplay(`✅ Order #${orderCount} is READY! Enjoy your meal! 🍛`);
    }
}

// ---- function 3: place order (setInterval) ----
function placeOrder() {
    // if already have an order, cancel it first
    if (orderActive || orderTimer !== null) {
        alert('⚠️ You already have an order waiting! Cancel it first.');
        return;
    }

    orderCount++;
    orderActive = true;

    // show order placed
    updateDisplay(`🟢 Order #${orderCount} placed! Waiting for food... ⏳`);

    // alert that order is placed
    alert(`✅ Order #${orderCount} placed successfully!
Your food will be ready in a few seconds.`);

    // start timer - check every 5 seconds (5000 ms)
    // you can change this to 3000 for 3 seconds, 10000 for 10 seconds, etc.
    orderTimer = setInterval(checkOrderStatus, 5000);
}

// ---- function 4: cancel order (clearInterval) ----
function cancelOrder() {
    if (orderTimer !== null) {
        clearInterval(orderTimer);
        orderTimer = null;
        orderActive = false;
        updateDisplay(`❌ Order #${orderCount} cancelled!`);
        alert(`❌ Order #${orderCount} has been cancelled.`);
    } else {
        updateDisplay('⏳ No active order to cancel.');
        alert('⚠️ No active order to cancel.');
    }
}

// ---- wire up buttons ----
document.getElementById('orderBtn').addEventListener('click', placeOrder);
document.getElementById('cancelBtn').addEventListener('click', cancelOrder);

// initial display
updateDisplay('⚡ Ready to order food! Click "Order Food"');
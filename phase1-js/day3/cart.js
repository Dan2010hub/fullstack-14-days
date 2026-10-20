const cart = [
    { name: "Sneakers", price: 4000, quantity: 3 },
    { name: "Rolex", price: 4000, quantity: 2 },
    { name: "Loafers", price: 400, quantity: 1 },
]

function checkOutCart() {
    return new Promise((resolve, reject) => {
        console.log("processing your order......");


        setTimeout(() => {
            if (cart. length >0) {
            resolve(cart);
        }else {
            reject("No Order")
        }
    }, 2000)

});
}

async function showCustomers() {
    try {
        const data = await checkOutCart();
        console.log("Success:", data);
    } catch (error) {
        console.log("Error");
    }
    
    
}
showCustomers();
## Day 3 - shooping cart with promise 

This is a simple Javascript project that simulates checking out a shooping cart using promises and Async/wait 

## Code Explanation 
1. The cart Array: 
    The cart varaible holds on array of product objects, each objects contains a name, price, and quanitity. the price must be a number and not a string

2. checkOutCart() function:
    the functions returns a promise to simulate a time-consuming operation like payment processing 
    # new Promise ((resolve, reject)); creates a promise with two outcomes 
    ## setTimeOut: intrduces a 2 second delay (2000ms) to mimic a real-world APi call
    ### if (cart.length >0) the core validation logic. it checks if the cart contains any items
    #### resolve(cart): called when the coindition is true, it fulfils the promise and returns the cart data 
    ##### reject ("No order"): called when the cart is empty it rejects the promise with an error message 

3. the showCustomers()Function 
    this is an asynchronous function responsible for handleing the resuls of the checkout

    # async: decleares the function contains asynchronous operations 
    ## await checkOutCart(); pauses the execution of the fucntion until the checkoutCart() promise is setlled 
    ### try .. catch: handles both outcomes, the try block runs  if the promise resolves the catch blocl runs if the promise rejects and receives the error message
    #### showCustomers(); the function is invoked outside of its definition to initiate the entire process 

## Errors 

there was no error because i followed the example giving to me 
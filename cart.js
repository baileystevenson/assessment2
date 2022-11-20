///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]
console.log('============================')
//CODE HERE

// const summedPrice = cart.reduce(/* CALLBACK HERE */)
const summedPrice = cart.reduce((a,curr) => {return a + curr.price}, 0)
console.log(summedPrice)
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/
console.log('============================')
//CODE HERE
let tax = .06
let couponValue = -.05
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    let taxTotal= cartTotal * (1+tax)
    let finalTotal= taxTotal - couponValue
    return finalTotal
}
console.log(calcFinalPrice(150, 24, 0.06))



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
properties needed would be name(string), address(string), email(string), phone number(string) and favorited menu items(string)
*/

/*
    Now, create a customer object following your own
    guidelines.
*/
console.log('============================')
//CODE HERE
const customer = {
    name: "Amber",
    address: "1235 Green Street",
    email: "1234@buttermail.com",
    phone: "123-456-7890",
    favMenuItem: "lasanga"
}
console.log(customer)
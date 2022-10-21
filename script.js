//WRITE YOUR CODE BELOW
var customerOrder = {
    drinkName: ["Coffee", "Iced Coffee", "Mocha", "Espresso", "Iced Americano", "Cappuccino", "Caramel Macchiato", "Chai Latte", "Matcha Latte", "Hot Chocolate"],
    sugarAmount: [0, 25, 50, 75, 100],
    ready: [true / false]}

customerOrder.drinkName = "Coffee"
customerOrder.sugarAmount = 50
customerOrder.ready = false

console.log(
    customerOrder.drinkName + ", " + customerOrder.sugarAmount + "% sugar")
    if(customerOrder.ready = true) {
        console.log("Ready for pick-up")
    }
    else {
        console.log("Still in order queue")
}
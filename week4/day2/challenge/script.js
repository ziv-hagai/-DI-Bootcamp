let client = "John";

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}


const displayGroceries = () => {
    groceries.fruits.forEach( function(element) {
        console.log(element)
    });
}

const cloneGroceries = () => {
    let user = client;
    client = "Betty";
    // user stays "john" becuase client is global and user local
    let shopping = groceries;
    groceries.totalPrice = "35$";
    //same 
    groceries.other.payed = "false";
    console.log(shopping)
    //not sure
}

cloneGroceries()

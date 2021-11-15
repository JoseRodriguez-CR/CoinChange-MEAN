
// Test1: coinChange(312) returns {dollars: 3, dimes: 1, pennies: 2}
// Test2: coinChange(78) returns {quarters: 3, pennies: 3}

function coinChange(cents){
    let dollars = 0;
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;

    result ={};//thinking to use this object for adding coins denomination if there is a quantity, ask later to Alfredo or Marcelo 
    pennies = cents % 100;
    console.log(pennies);
    dollars = (cents - pennies)/100;
    temp = pennies;
    pennies = pennies % 25;
    quarters = (temp - pennies)/25;
    temp = pennies;
    pennies = pennies % 10;
    dimes = (temp - pennies)/10;
    temp =  pennies;
    pennies = pennies % 5;
    nickels = (temp - pennies)/5;


    let coinObject = {
        "dollars": dollars,
        "quarters": quarters,
        "dimes": dimes,
        "nickels": nickels,
        "pennies": pennies
    };
    console.log(coinObject);
    /*
    console.log("Dollars: "+dollars);
    console.log("Quarters: "+quarters);
    console.log("Dimes: "+dimes);
    console.log("Nickels: "+nickels);
    console.log("Pennies: "+pennies);
    */
}

coinChange(312);
"use strict"

//return the remainder of two numbers

    function remainder(x, y) {
         return x % y;
    }

//return a function that takes two integers (hours,minutes), converts them into seconds, and adds them.

    function convert(hours, minutes) {
        var hoursToSecs = hours * 3600;
        var minutesToSecs = minutes * 60;
        var totalSecs = hoursToSecs + minutesToSecs;

        return totalSecs;
    }

// For every km there is five corn. Create a function that takes an integer, num, and returns the amount of corn.

    function corn(num){
        var totalCorn = num * 5;

        return totalCorn;
    }

// Consider a && b:
//
// a is checked if it is true or false.
// If a is false, false is returned.
// b is checked if it is true or false.
// If b is false, false is returned.
// Otherwise, true is returned (as both a and b are therefore true ).
// The && operator will only return true for true && true.
//
// Make a function using the && operator

    function and(a, b) {
        if(a === true && b === true){
            return true;
        }else{
            return false;
    }
}

//In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
//
// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

    function animals(chickens, cows, pigs) {
        var chickenLegs = chickens * 2;
        var cowLegs = cows * 4;
        var pigLegs = pigs * 4;
        var totalLegs = chickenLegs + cowLegs + pigLegs;

            return totalLegs;

}

//Write a function that returns the boolean true if the given number is zero, the string "positive" if the number is greater than zero or the string "negative" if it's smaller than zero.

    function equilibrium (x) {
        if (x > 0) return "positive";
        if (x < 0)	return "negative";

            return true;
}
"use strict"

// return the remainder of two numbers

    function remainder(x, y) {
         return x % y;
    }

// return a function that takes two integers (hours,minutes), converts them into seconds, and adds them.

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

// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
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

// Write a function that returns the boolean true if the given number is zero, the string "positive" if the number is greater than zero or the string "negative" if it's smaller than zero.

    function equilibrium (x) {
        if (x > 0) return "positive";
        if (x < 0)	return "negative";

            return true;
    }

// What have you learned so far that will permit you to do two different checks (value and type) with a single statement?
//
// Implement a function that returns true if the parameters are equal, and false if they are not.

        function checkEquality(a, b) {
             return a === b;
    }

// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

        function dividesEvenly(a, b) {
              return a % b  === 0;
    }

// Create a function that takes an integer and return true if it's divisible by 100, otherwise return false.

         function divisible(num) {
             return num % 100 === 0;
    }

// modify the template variable to be a template string
        function format(a, b, c) {
// the result string must give: "Their names were: a, b and c."
            const template = `Their names were: ${a}, ${b} and ${c}.` //This is using backticks NOT single quotes.
                 return template
    }

// Write a function that returns true if the given integer is even, and false if it's odd.
        function isEven(n) {
             return n % 2 === 0;
    }

// Create a function that returns true if a string is empty and false otherwise.
        function isEmpty(s) {
            return s === "";
    }

//    or
        // function isEmpty(s) {
        // 	return (s.length > 0 ? false : true)
//  }



// Create a function that returns true when num1 is equal to num2; otherwise return false.
        function isSameNum(num1, num2) {
             return num1 === num2 ? true : false;
    }

// Given two arguments, return an array which contains these two arguments.
        function makePair(num1, num2){
            return [num1, num2];
    }

// The challenge is to try and fix this buggy code, given the inputs true and false. See the examples below for the expected output.
        function has_bugs(buggy_code) {
            if (buggy_code) {
             return 'sad days'
         } else {
             return 'it\'s a good day'
         }
    }

// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
        function comp(str1, str2) {
            return typeof (str1 === "string" && typeof str2 === "string") && str1.length === str2.length;
    }

// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
    function getVoteCount(votes) {
         var  { upvotes, downvotes } = votes
             return  upvotes - downvotes
    }

// In the Code tab you will find code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.
//
// Write five adder functions:
    var add2 = (x) => x + 2;

    var add3 = (x) => x + 3;

    var add5 = (x) => x + 5;

    var add7 = (x) => x + 7;

    var add11 = (x) => x + 11;

// Create a function that takes an equation (e.g. "1+1"), and returns the answer.
    function equation(s) {
        return eval(s);
    }

//Given two strings, firstName and lastName, return a single string in the format "last, first".
    function concatName(firstName, lastName) {
        return lastName.concat(', '+firstName)
    }

//Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
    function divisibleByFive(n) {
        var divByFive = n % 5 === 0;
        return divByFive;
    }

//Write a function that returns the length of a string. Make your function recursive.
    function length(str) {
        return str.length;
    }

//Create a function that evaluates an equation.
    function eq(evaluate) {
        var result = eval(evaluate);
        return result;
    }

//Write a function to reverse an array.
    function reverse(arr) {
        return arr.reverse()
    }

//Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
    function acceptIntoMovie(age, isSupervised) {
        return age >= 15 || isSupervised === true ? true:false;
    }

//Create a function that takes a string and returns it as an integer.
    function stringInt(str) {
        return parseFloat(str);
    }
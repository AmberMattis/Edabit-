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
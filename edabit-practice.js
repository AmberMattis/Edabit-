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
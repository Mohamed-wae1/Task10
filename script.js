
function evenOrOdd(num) {
    if (num % 2 == 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

function largerNumber(num1, num2) {
    if (num1 > num2) {
        console.log(num1);
    } else if (num2 > num1) {
        console.log(num2);
    } else {
        console.log("Equal");
    }
}

function calculateAge(birthYear) {
    var age = 2026 - birthYear;
    console.log(age);
}

function printOddNumbers(num) {
    for (var i = 1; i <= num; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

function sumNumbers(num) {
    var sum = 0;

    for (var i = 1; i <= num; i++) {
        sum = sum + i;
    }

    console.log(sum);
}


// Calling

evenOrOdd(7);

largerNumber(10, 20);

calculateAge(2005);

printOddNumbers(10);

sumNumbers(5);
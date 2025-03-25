

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
};


function reverseString(string) {
    return string.split("").reverse().join("");
};


const calculator = {
    "add": function(num1, num2) {
        return num1 + num2;
    },
    "subtract": function(num1, num2) {
        return num1 - num2;
    },
    "multiply": function(num1, num2) {
        return num1 * num2;
    },
}


export {
    capitalize, 
    reverseString,
    calculator,
};
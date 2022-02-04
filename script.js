var val1 = "";
var val2 = "";
var op = "";
var result = 0;

var disp = document.getElementById("display");
console.log(disp);

function press(num) {
    if (op == "") {
        val1 = val1 + num;
        disp.innerText = val1;
    } else {
        val2 = val2 + num;
        disp.innerText = val2;
    }

    console.log("val1: " + val1);
    console.log("val2: " + val2);
}

function setOP(operator) {
    if (op != "" && val1 != "" && val2 != "") {
        val1 = calculate();
        val2 = "";

        console.log("val1: " + val1);
        console.log("val2: " + val2);

        disp.innerText = val1;
        result = 0;
    }

    if (op == "" && result != 0) {
        val1 = result;
        val2 = "";

        console.log("val1: " + val1);
        console.log("val2: " + val2);
    }

    op = operator;
}

function calculate() {
    console.log("the operand is: " + op)

    if (op == '+') {
        result = val1 + val2;
    } else if (op == '-') {
        result = val1 - val2;
    } else if (op == '*') {
        result = val1 * val2;
    } else if (op == '/') {
        result = val1 / val2;
    }

    disp.innerText = result;
    op = "";

    return result;
}

function clr() {
    val1 = "";
    val2 = "";
    op = "";
    result = 0;
    disp.innerText = '0';
}

// if (op == '+') {
//     result = val1 + val2;
//     val1 = result;
//     val2 = "";
// } else if (op == '-') {
//     result = val1 - val2;
//     val1 = result;
//     val2 = "";
// } else if (op == '*') {
//     result = val1 * val2;
//     val1 = result;
//     val2 = "";
// } else if (op == '/') {
//     result = val1 / val2;
//     val1 = result;
//     val2 = "";
// }
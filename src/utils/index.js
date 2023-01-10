function sumTwoNumbers(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно из значений или оба не числа';
    } else {
        return a + b;
    }
}

function compareTwoNumbers(inp1, inp2) {
    if (inp1 > inp2) {
        return inp1;
    }
    else {
        return inp2;
    }
}

export { sumTwoNumbers, compareTwoNumbers };
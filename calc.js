function calculateNumbers(numbers) {
    if (numbers.some(n => isNaN(n))) throw new Error('Not a number')
    if (numbers.some(n => n < 0)) throw new Error('Negatives not allowed')
    return numbers.reduce((s, n) => s + n);
}

function splitNumbers(regExp, stringNumbers) {
    return stringNumbers
        .replace(regExp, ',')
        .split(',')
        .map(n => parseInt(n, 10));
}

function add(stringNumbers) {
    let numbers;
    if (!stringNumbers.length) return 0;
    if (stringNumbers.startsWith("//")) {
        // let delimiters = stringNumbers.split("//")[1].split("\n")[0];
        numbers = splitNumbers(/[^\w\s]/gi, stringNumbers.split("\n")[1]);
    }
    else {
        numbers = splitNumbers(/(\r\n|\n|\r)/gm, stringNumbers);
    }
    return calculateNumbers(numbers);

}

let result = add("1,2");
console.log(result);
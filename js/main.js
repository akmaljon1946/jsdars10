//1-vazifa
/*
let numbers = [1, 3, 5, 9];

function numbersSum(numbers) {
    return numbers[0] + numbers[1] + numbers[2] + numbers[3];
}

let result = numbersSum(numbers);

console.log(result);

/*
//2-vazifa
/*
let numbers = [1, -5, 16, 0, 2];

function numbersSum(numbers) {
    return numbers[0] + numbers[2] + numbers[3] + numbers[4];
}

let result = numbersSum(numbers);

console.log(result);

*/

//3-vazifa

let numbers = [3.02, -3.65, 5, -9];

function normalizeNumbers(numbers) {
    if (numbers[0] < 5) {
        numbers[0] = Math.floor(numbers[0]);
        numbers[1] = Math.round(numbers[1] + 8);
        numbers[3] = Math.round(numbers[3] + 18);
    }

    return numbers;
}

let result = normalizeNumbers(numbers);
console.log([result]);

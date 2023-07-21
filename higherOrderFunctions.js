const copyArrayAndManipulate = (arr, instructions) => {
    const output = [];
    for(let i = 0; i < arr.length; i++) {
        output.push(instructions(arr[i]));
    }
    return output;
}

const multiplyBy2 = (input) => {
    return input * 2;
}

const divideBy2 = (input) => {
    return input / 2;
}

const addBy3 = (input) => {
    return input + 3;
}

const result = copyArrayAndManipulate([1,2,3], multiplyBy2);
const result1 = copyArrayAndManipulate([1,2,3], divideBy2);
const result2 = copyArrayAndManipulate([1,2,3], addBy3);

console.log(result);
console.log(result1);
console.log(result2);
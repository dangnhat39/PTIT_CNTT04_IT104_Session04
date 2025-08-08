function processInput(input) {
    if (typeof input === "string") {
        if (/^\d+$/.test(input)) {
            var num = Number(input);
            console.log(num * num);
        }
        else {
            var letterCount = (input.match(/[a-zA-Z]/g) || []).length;
            console.log("".concat(letterCount, " k\u00FD t\u1EF1 ch\u1EEF c\u00E1i"));
        }
    }
    else if (typeof input === "number") {
        if (isPrime(input)) {
            console.log("Là số nguyên tố");
        }
        else {
            console.log("Không phải số nguyên tố");
        }
    }
    else {
        if (input) {
            console.log("Giá trị là true - tiến hành xử lý");
        }
        else {
            console.log("Giá trị là false - dừng xử lý");
        }
    }
}
function isPrime(num) {
    if (num < 2)
        return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}
// Test
processInput("123");
processInput("abc123!");
processInput(7);
processInput(10);
processInput(true);
processInput(false);

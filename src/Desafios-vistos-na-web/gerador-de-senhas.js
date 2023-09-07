function genaretePassword() {
    return Math.random().toString(20).slice(-10);
}

let testPassword = Array.apply(null, Array(5)).map(genaretePassword);

console.log(testPassword);

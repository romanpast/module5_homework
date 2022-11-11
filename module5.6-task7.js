const CountEvenOdd = (arr) => {
    let even = arr.filter(num => num % 2 == 0);
    let odd = arr.filter(num => num % 2 != 0);
    let nul = arr.filter(num => num === 0);

    return `Even: ${even.length}, odd: ${odd.length}, null: ${nul.length}`;
}

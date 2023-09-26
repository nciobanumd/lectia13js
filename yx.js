const age = 40
const beverage = age <= 30 ? "adidasi" : "pantofi toc"
console.log(beverage);

function Num(a) {
    let result;
    if (a > 0) {
    result = 'positive';
    } else {
    result = 'NOT positive';
    }
    return result;
}
console.log(Num(5));
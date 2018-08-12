const arrSet = [[1,2,3],4,5,"h","e",["l","o", null, false, true], 3.75, -1];

const FlattenArray = function(arr) {
    return arr.map((a) => {
        return Array.isArray(a) ? FlattenArray(a) : a; 
    });
}
const FlattenArrayByString = function(arr) {
    return arr.toString().split(',');
}
const MakeArray = function() {
    return (Array.isArray(arguments[0])) ? arguments[0] : [...arguments];
}
const NumbersOnly = function(args) {
    let numberSet = [];
    args.forEach(a => {
        let x = parseFloat(a);
        if(!isNaN(x)) numberSet.push(x);
    }) 
    return numberSet;
}
const ArraySum = function(arr) {

    return arr.reduce((p,n) => { return p + n; }, 0)
}
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const getArraySum = compose(ArraySum, NumbersOnly, FlattenArray, MakeArray);

const getArraySum2 = compose(ArraySum, NumbersOnly, FlattenArrayByString, MakeArray);

console.log(getArraySum(arrSet));
console.log(getArraySum2(arrSet));
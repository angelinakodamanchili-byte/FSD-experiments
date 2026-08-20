var Maths;
(function (Maths) {
    function add(a, b) {
        return a + b;
    }
    Maths.add = add;
})(Maths || (Maths = {}));
console.log("Sum =", Maths.add(10, 20));
export {};

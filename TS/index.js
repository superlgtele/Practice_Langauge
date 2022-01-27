function narrowing(x) {
    if (typeof x === "number") {
        console.log(x + 2);
    }
    else {
        console.log(x + " 야호");
    }
}
narrowing(123);
narrowing("성공!");
var 동물 = { name: "monkey", age: 5 };

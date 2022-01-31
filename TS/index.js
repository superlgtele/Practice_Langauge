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
var 내이름 = {
    name: "Honggi",
};
//  as const == 타입을 ""(string)이 아닌 입력한 그대로(Honggi Type) 바꾸자
//  readonly 기능추가 -> 오브젝트 자료 재할당 불가(const 추가기능)
function 내이름함수(a) { }
내이름함수(내이름.name);
var typealias = function (a) {
    return 10;
};
var 저는변경 = document.querySelector("#title");
var 버튼기능 = document.querySelector("#button");
// ?문법 -> narrowing -> #button 있으면 함수실행, 없으면 undefined return
버튼기능 === null || 버튼기능 === void 0 ? void 0 : 버튼기능.addEventListener("click", function () {
    if (저는변경 != null) {
        저는변경.innerHTML = "김홍기입니다";
    }
});

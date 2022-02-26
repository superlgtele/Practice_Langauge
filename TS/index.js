// Array, Object Type 지정하기
var 배열 = ["kim", "park"];
var 오브젝트 = { 작명: 777 };
// Function Type 지정하기
function 함수타입(x) {
    return x * 2;
}
function 노리턴함수타입(x) {
    x * 2;
}
// Union Type
// 유니온배열의 (number | string)에서 소가로가 빠지면 오류 ->
// 소가로를 지우면 number + 배열안에 담긴 string
var 유니온 = 123;
var 유니온배열 = [1, "2", 3];
// 유니온 나이: string|number -> string 타입도 아니고 number 타입도아님
// 나이 + 1 -> 오류남. "string | number 타입" 이기때문
// Any Type -> 모든 자료형 허용(타입실드 헤제) -> 타입스크립트 왜씀?
var 애니타입;
// Unknown Type -> 모든 자료형 허용(타입실드 유지) -> 뺄셈같은것도 안됨
// ex) 언노운타입 - 1(number) = 오류발생
var 언노운타입;
// Narrowing
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
var typealias = function (a) {
    return a * 5;
};
var 여자친구 = {
    name: "어디?",
};
// as const
// 내이름.name은 지금 string type인데 as const로 인해 Honggi type으로 바뀜
// readonly 옵션추가
var 내이름 = {
    name: "Honggi",
};
// ?문법 -> narrowing -> #button 있으면 함수실행, 없으면 undefined return
var 저는변경 = document.querySelector("#title");
var 버튼기능 = document.querySelector("#button");
버튼기능 === null || 버튼기능 === void 0 ? void 0 : 버튼기능.addEventListener("click", function () {
    if (저는변경 != null) {
        저는변경.innerHTML = "김홍기입니다";
    }
});
// Class
var Person = /** @class */ (function () {
    function Person(Lastname) {
        this.name = Lastname;
    }
    return Person;
}());
var 사람1 = new Person("kim");
console.log(사람1);
var 선생 = { name: "Seo", age: 30 };
console.log(선생);
// & -> 합치라는 것이 아닌, 왼쪽과 오른쪽 둘다 만족하는 타입
// 왼쪽과 오른쪽 둘다 만족하는 타입은 없음
// ex) type MyDog = { name: number} & {name: string}
// const DoooG: MyDog = {name : "kim"} -> 에러발생

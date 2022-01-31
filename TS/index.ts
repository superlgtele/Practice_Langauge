function narrowing(x: number | string) {
  if (typeof x === "number") {
    console.log(x + 2);
  } else {
    console.log(x + " 야호");
  }
}
narrowing(123);
narrowing("성공!");

type Animal = { name: String; age: number };
const 동물: Animal = { name: "monkey", age: 5 };

const 내이름 = {
  name: "Honggi",
} as const;
//  as const == 타입을 ""(string)이 아닌 입력한 그대로(Honggi Type) 바꾸자
//  readonly 기능추가 -> 오브젝트 자료 재할당 불가(const 추가기능)
function 내이름함수(a: "Honggi") {}
내이름함수(내이름.name);

type 함수타입 = (a: string) => number;
const typealias: 함수타입 = function (a) {
  return 10;
};

let 저는변경 = document.querySelector("#title");
let 버튼기능 = document.querySelector("#button");
// ?문법 -> narrowing -> #button 있으면 함수실행, 없으면 undefined return
버튼기능?.addEventListener("click", function () {
  if (저는변경 != null) {
    저는변경.innerHTML = "김홍기입니다";
  }
});

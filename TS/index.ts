// Array, Object Type 지정하기
let 배열: string[] = ["kim", "park"];
let 오브젝트: { 작명: number } = { 작명: 777 };

// Function Type 지정하기
function 함수타입(x: number): number {
  return x * 2;
}
function 노리턴함수타입(x: number): void {
  x * 2;
}

// Union Type
// 유니온배열의 (number | string)에서 소가로가 빠지면 오류 ->
// 소가로를 지우면 number + 배열안에 담긴 string
let 유니온: number | string = 123;
let 유니온배열: (number | string)[] = [1, "2", 3];

// 유니온 나이: string|number -> string 타입도 아니고 number 타입도아님
// 나이 + 1 -> 오류남. "string | number 타입" 이기때문

// Any Type -> 모든 자료형 허용(타입실드 헤제) -> 타입스크립트 왜씀?
let 애니타입: any;

// Unknown Type -> 모든 자료형 허용(타입실드 유지) -> 뺄셈같은것도 안됨
// ex) 언노운타입 - 1(number) = 오류발생
let 언노운타입: unknown;

// Narrowing
function narrowing(x: number | string) {
  if (typeof x === "number") {
    console.log(x + 2);
  } else {
    console.log(x + " 야호");
  }
}
narrowing(123);
narrowing("성공!");

// Another Narrowing
function falsynarrowing(x: string | undefined) {
  if (x && typeof x === "string") {
    // x가 undefined면 if문 실행 X
    // x가 string이면 if문 실행 O
  }
}

// type alias
type Animal = { name: String; age: number };
const 동물: Animal = { name: "monkey", age: 5 };
type 함수타입 = (a: number) => number;
const typealias: 함수타입 = function (a) {
  return a * 5;
};

// readonly
// readonly 기능 -> 오브젝트 자료 재할당 불가(const 추가기능)
// 실행을 막아주는 것이 아닌 에러만 띄워줌 -> 사실상 수정기능은 작동됨
type Girlfriend = {
  readonly name: string;
};
const 여자친구: Girlfriend = {
  name: "어디?",
};

// as const
// 내이름.name은 지금 string type인데 as const로 인해 Honggi type으로 바뀜
// readonly 옵션추가
const 내이름 = {
  name: "Honggi",
} as const;

// ?문법 -> narrowing -> #button 있으면 함수실행, 없으면 undefined return
let 저는변경 = document.querySelector("#title");
let 버튼기능 = document.querySelector("#button");
버튼기능?.addEventListener("click", function () {
  if (저는변경 != null) {
    저는변경.innerHTML = "김홍기입니다";
  }
});

// Class
// private -> class {} 안에서만 이용, 수정가능
// protected -> class {} 안 + extends된 자식 class {} 안에서 사용가능
// static -> 부모 class에 직접 부여됨 -> 자식들이 물려받지 못함
class Person {
  name: String;
  private FamilyName: string = "Kim";
  constructor(Lastname: string) {
    this.name = this.FamilyName + Lastname;
  }
}
const 사람1 = new Person("-Hong-gi");
console.log(사람1);

// Interface
// interface는 중복선언 가능(합쳐짐), type은 중복선언 불가능
// ex) Yahoo를 중복선언해도 정상작동함
// interface Yahoo {  |  interface Yahoo {
//   name: String;    |    age: number;
// }                  |  }
interface Student {
  name: String;
}
interface Teacher extends Student {
  age: number;
}
let 선생: Teacher = { name: "Seo", age: 30 };
console.log(선생);

// & -> 합치라는 것이 아닌, 왼쪽과 오른쪽 둘다 만족하는 타입
// 왼쪽과 오른쪽 둘다 만족하는 타입은 없음
// ex) type MyDog = { name: number} & {name: string}
// const DoooG: MyDog = {name : "kim"} -> 에러발생

// Rest Parameter Type
function RestType(...rest: number[]) {
  console.log(rest);
}
RestType(3, 7, 11, 15, 20);

// Never Type
// return 값이 없어야함 -> 모든 함수는 return undefined를 몰래 가지고 있음
// EndPoint가 없어야함 -> Error가 발생하면 코드가 끝나는 것이 아니라 중단됨
// 사실 void 쓰면됨. 알고만 있으면 될듯?
function neverType(): never {
  throw new Error();
}
function NeverType(): never {
  while (true) {
    console.log("무한 반복");
  }
}

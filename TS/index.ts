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

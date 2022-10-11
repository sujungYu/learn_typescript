// 타입 호환
// 인터페이스
interface Developer {
    name: string;
    skill: string;
}
interface Person {
    name: string;
}
// class Person {
//     name: string;
// }
let developer: Developer;
let person: Person;
// 오른쪽에 있는 타입이 더 많은 속성을 갖거나 구조적으로 더 컸을 때 왼쪽과 호환이 된다.
// developer = new Person(); //X
// developer = person; // X
// person = developer; // O

// 함수
let add = function(a: number) {
    // ...
}
let sum = function(a: number, b: number) {
    // ...
}

sum = add;
// 오른쪽에 있는 함수의 구조가 왼쪽에 있는 함수의 구조보다 더 타입적으로 크기 때문에 호환되지 않는다.
// add = sum; // X

// 제네릭
interface Empty<T> {
  // ...
}
let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
};

let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;
notempty1 = notempty2;
notempty2 = notempty1;

// 인터페이스
// interface Person {
//     name: string;
//     age: number;
// }
// // 인터페이스를 이용한 타입 정의
// let sujung: Person = {
//     name: 'sujung',
//     age: 25
// }

// 타입 별칭
type Person = {
    name: string;
    age: number;
}
let sujung: Person = {
    name: 'sujung',
    age: 25
}
// 타입을 정의할 수 있는 모든 곳에 별칭을 붙일 수 있다.
type MyString = string;
let str: MyString = 'hello';

// 타입 별칭 장점
// 1. 쉽게 타입을 정의 할 수 있다.
// 2. 코드 가독성이 높아진다.
type Todo = { id: number; title: string; done:boolean};
function getTodo(todo: Todo) {

}

// 타입과 인터페이스의 차이점
// 타입은 확장이 불가능하고, 인터페이스는 확장이 가능히다.
// => 가능한 interface로 선언해서 사용하는 것을 추천
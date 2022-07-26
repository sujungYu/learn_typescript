// 인터페이스 - 반복되는 type을 하나로 정의해서 사용한다.
interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
let seho: User = {
    age: 33,
    name: '세호'
}

// 함수에 인터페이스 활용(활용도 높음)
function getUser(user: User) {
    return console.log(user);
}
const capt = {
    age: 100,
    name: '캡틴'
}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용

// 해당 함수를 인터페이스를 정의하면, 아래와 같다.
// function sum(a, b) {
//     return a + b;
// }
interface sumFunction {
    (a: number, b: number): number;
}
let sum: sumFunction;
sum = function(a: number, b: number): number {
    return a + b;
}

// 함수의 스펙(구조)에 인터페이스를 활용(이렇게 써도 된다.)
// const sum = (a: number, b: number): number => {
//     return a + b;
// }

// 인덱싱
interface StringArray {
    [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10;

// 딕셔너리 패턴(객체를 접근할 때 많이 사용)
interface StringRegexDictionary {
    [key: string]: RegExp; // 왼쪽에 들어오는 객체의 속성(ex. sth)의 이름은 key
}

// let obj = {
//     sth: /abc/,
// }

let obj: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/, //css 확장자로 끝나는 파일들
    jsFile: /\.js$/, //js 확장자로 끝나는 파일들
}
// obj['cssFile'] = 'a'

// Object.keys(obj) // obj의 key들을 모아서 배열로 만든다.
Object.keys(obj).forEach(function(value) {

})

// 인터페이스 확장 - 인터페이스를 상속 받아서 기존에 있었던 것 보다 더 확장에서 쓸 수 있는 것이다.
interface Person {
    name: string,
    age: number,
}

// interface Developer{
//     name: string,
//     age: number,
//     language: string,
// }

interface Developer extends Person{
    // name: string,
    // age: number,
    language: string,
}

let sujung: Developer = {
    name: '수정',
    age: 25,
    language: 'ts'
}
// 기본 타입

// JS 문자열 선언
// let str = 'hello';

// TS 문자열 선언
let str: string = 'hello';

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1,2,3]; //arr 변수는 배열 타임이고 배열안에 숫자만들어갈 수 있다.
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk'];
let items: number[] = [1,2,3];

// TS 튜플 - 특정 인덱스의 타입까지 정의하는 배열
let address: [string, number] = ['gangnam', 100];

// TS 객체
let obj: object = {};
// let person: object = {
//     name: 'capt',
//     age: 100
// };
let person: {name: string, age: number} = {
    name: 'thor',
    age: 1000
}

// TS 진위값
let show: boolean = true;
// 타입 추론 기본 1
// 기본적인 변수의 선언과 할당에 의해 타입이 가볍게 추론된다.
let a = 10;

function getB(b = 10) {
    let c = 'hi';
    return b + c;
}
10 + '10' // 1010

// 타입 추론 기본 2
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }

// const shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'hello'
// }

// 타입 추론 기본 3 (인터페이스 2개)
interface Dropdown<T> {
    value: T;
    title: string;
}
interface DetialedDropdown<K> extends Dropdown<K>{
    description: string;
    tag: K;
}

const detailedItem: DetialedDropdown<string> = {
    title: 'abc',
    description: 'ab',
    value: 'a',
    tag: 'a'
}

// Best Common Type
// 타입스크립트가 해당 코드를 어떤 타입인지 맥여나가는 알고리즘

let arr = [1, 2, true, true, 'a'];
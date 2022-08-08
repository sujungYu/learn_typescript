// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText(10); // 숫자 10
// logText('하이'); // 문자열 하이
// logText(true); // 진위값 true

// 제네릭 - 함수를 호출 할 때 파라미터의 타입을 지정하면서 넘기는 것이다.
// function logText<T>(text: T): T {
//     console.log(text);
//     return text;
// }
// logText<string>('하이');

// function logText(text: string) {
//     console.log(text);
//     // text.split('').reverse().join('');
//     return text;
// }

// function logNumber(num: number) {
//     console.log(num);
//     return num;
// }

// 유니온 타입을 이용한 선언 방식
// function logText(text: string | number) {
//     console.log(text);
//     // text.split('').reverse().join('');
//     return text;
// }

// const a = logText('a');
// // a.split('') // 유니온 타입 선언 방식의 문제점 - number가 들어오는 경우에는 split이 제공되지 않는다.
// logText(10);
// logNumber(10);

// 제네릭의 장점
function logText<T>(text: T): T {
    console.log(text);
    return text;
}
const str = logText<string>('abc');
str.split('');
const login = logText<boolean>(true);
// logText('a');
// logText(10);

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//     value: string;
//     selected: boolean;
// }
interface Dropdown<T> {
    value: T;
    selected: boolean;
}
const obj: Dropdown<string> = { value: 'abc', selected: false };

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] { // T[] - 'T가 배열이기 때문에 length가 제공될거야'라는 의미
//     console.log(text.length);
//     return text;
// }
// logTextLength<string>(['hi', 'abc']);

// 제네릭 타입 제한2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}
function logTextLength<T extends LengthType>(text: T): T {
    text.length;
    return text;
}
// logTextLength()

// 제네릭 타입 제한3 - keyof
// 인터페이스의 한가지 속성만 갖겠다. or 인터페이스에 정의된 속성만 받을 수 있게 제약하겠다.
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}
// 인터페이스 안에 있는 키들 중에 한가지가 제네릭이 된다.
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}
getShoppingItemOption("name");

// 실제 애풀리케이션을 개발하는 환경에서는 api를 호출해 와서 api응답의 규칙 혹은 규격을 정의할때 제네릭을 가장 많이 쓴다.
// quiz/2_address-book/src/index.ts function fetchContacts()
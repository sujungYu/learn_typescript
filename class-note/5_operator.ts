// function logMessage(value: any) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(10);

// 유니온 타입 - 파라미터나 변수에 한가지 이상의 타입을 쓰고 싶을 때 사용한다.
let sujung: string | number | boolean;
// 유니온 타입의 장점
// 1. 타입가드 - 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정
function logMessage(value: string | number)  {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    // 2. string과 number가 아닌 타입에 대해서 에러를 발생할 수 있다.
    throw new TypeError('value must be string or number')
}
logMessage('hello');
logMessage(10);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}
// 공통된 속성만 접근 가능하다.
// function askSomeone(someone: Developer | Person) {
//     someone.name
//     // someone.skill
//     // someone.age
// }
// askSomeone({ name: '디벨로퍼', skill: '웹 개발'});
// askSomeone({ name: '수정', age: 25});

// 인터섹션 타입
// someone은 Developer, Person이 갖고 있는 모든 속성과 타입을 다 포함하는 하나의 타입이다.
function askSomeone(someone: Developer & Person) {
    someone.name
    someone.skill
    someone.age
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발', age: 25 });
// askSomeone({ name: '수정', age: 25});

// 유니온 타입과 인터섹션 타입의 차이점
// 1. 유니온 - 함수 내부에서의 타입 추론을 시켜나가야되는 작업이 있는 반면에
// 넘기는 타입에 대해서 선택지가 생긴다.
// 2. 인터섹션 - 두개의 타입을 모두다 포함하는 새로운 타입을 만들게 된다.

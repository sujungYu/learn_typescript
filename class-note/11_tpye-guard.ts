// 타입 가드
interface Developer {
    name: string;
    skill: string;
}
interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'Sujung', age: 25, skill: 'TypeScript'}
}
// 내가 추가로 궁금한 점
// 유니온 타입은 공통 속성에만 접근가능하다고 알고 있는데, 반환값에서 세 속성 전부를 반환할 수 있는 이유는?
// function introduce(someone: Developer | Person_):  {
//   someone.name; // 별도의 타입가드를 제공하지 않는 경우 name 속성만 접근가능
// }
let sujung = introduce()
console.log(sujung.name);

if((sujung as Developer).skill) {
    let skill = (sujung as Developer).skill;
    console.log(skill);
} else if((sujung as Person).age) {
    let age = (sujung as Person).age;
    console.log(age);
}

// 타입 가드 정의
// function is해당 타입
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;

}

if(isDeveloper(sujung)) {
    console.log(sujung.skill);
} else {
    console.log(sujung.age);
}
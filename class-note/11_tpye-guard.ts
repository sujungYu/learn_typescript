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
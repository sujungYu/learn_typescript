function Person(name, age) {
    this.name = name;
    this.age = age;
}
const su = new Person('쑤', 25);

// 클래스 - 인스턴스를 만들어 주는 역할
// 클래스는 ES6에 생김
class Person {
    // 클래스 로직
    constructor(name, age) { // constructor() - 초기화 매서드
        console.log('생성 되었습니다.');
        this.name = name;
        this.age = age;
    }

}
const sujung = new Person('수정', 25); // 생성 되었습니다.
console.log(sujung); // Person {name: '수정', age: 25}
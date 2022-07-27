class Person {
    // 클래스 로직
    // 1. ts에서는 클래스의 최상단에 클래스에서 사용할 속성을 정의해줘야 한다.
    // 2. 변수의 접근 범위 설정 가능
    private name: string; // 이 클래스 안에서만 쓰겠다(private)
    public age: number;
    readonly log: string; // 읽기만 할 수 있다.

    constructor(name: string, age: number) { // constructor() - 초기화 매서드
        this.name = name;
        this.age = age;
    }
}
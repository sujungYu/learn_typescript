function add(a: number, b: number) :number {
    return a + b;
}

var result = add(10, 20);
result.toLocaleString(); //toLocaleStrign : 현재 설정된 언어를 기반으로 숫자를 문자열로 변환해주는 api

// 타입스크리트의 장점
// 1. 에러의 사전 방지
// 2. 코드 가이드 및 자동 완성
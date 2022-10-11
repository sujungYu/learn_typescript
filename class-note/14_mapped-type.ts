// 맵드 타입
// 기존에 존재 하는 타입을 맵드타입의 문법을 이용해서 새로운 타입으로 변환해 해는 것(map 함수로 돌리는 느낌)
type Heroes = 'Hulk' | 'Capt' | "Thor"
type HeroAgges = { [K in Heroes]: number }
const ages: HeroAgges = {
    Hulk: 33,
    Capt: 100,
    Thor: 1000
}

// for in 반복문 코드
// let arr = ['a', 'b', 'c'];
// for (let key in arr ) {
//     console.log(arr[key]);
// }
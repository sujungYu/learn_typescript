// 타입 단언(type assertion)
// 타입스크립트보다 개발자가 정의한 타입을 알고 있으니 타입은 내가 건들일테니 타입스크립트는 건들지 말아라.

let a;

let b = a as string;

// DOM API 조작
// <div id="app">hi</div>

// let div = document.querySelector('div');
// // div가 null일 수도 있기 때문에 if문으로 정의해 줘야힌다.
// if(div) {
//     div.innerText
// }

let div = document.querySelector('div') as HTMLDivElement;
div.innerText;

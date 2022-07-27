// 이넘
// drop down 등의 목록이 필요한 형태에서 이넘을 정의해서 쓰는게 정확한 코드, 예외처리들의 케이스들이 줄어든다.

// 숫자형 이넘
// 별도의 값을 지정하지 않으면 숫자형 이넘으로 취급한다.
// enum Shoes {
//     Nike,
//     Adidas
// }
// const myShoes = Shoes.Nike;
// console.log(myShoes); //0

// 문자형 이넘
enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스'
}

const myShoes = Shoes.Nike;
console.log(myShoes); // '나이키'

//예제
enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer) {
    if(answer === Answer.Yes) {
        console.log('정답입니다.');
    }
    if(answer === Answer.No) {
        console.log('오답입니다.');
    }
}
askQuestion(Answer.Yes)
// askQuestion('Yes');

// askQuestion('예스');
// askQuestion('y');
// askQuestion('yes');



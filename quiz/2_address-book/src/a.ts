// function fetchItems(): string[] {
//   let items = ['a', 'b', 'c'];
//   return items;
// }
// let result = fetchItems();
// console.log(result);

// Promise 생성자를 반환하게 되면 함수에서 기본적으로 추론하는게 Promise가 오는데 안에 타입은 잘 모르겠다고 뜬다.
function fetchItems(): Promise<string[]> {
  let items = ['a', 'b', 'c'];
  return new Promise(function (resolve) {
    resolve(items);
  });
}
fetchItems();

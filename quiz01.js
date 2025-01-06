let uninitialized;
console.log(uninitialized);

/* 
선언만 하고 할당을 하지 않았기에 undefined가 콘솔에 찍힐 것 같습니다.
*/


let apple = "사과";
apple = "바나나";

/* 
let 또는 var 이라 생각합니다.
선언 후 재할당이 가능하기 때문입니다.
let을 주로 사용하라 하셔서 let으로 작성했습니다.
*/

let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]);

/* 
4번째 인자인 19가 나올 것 입니다.
인덱스가 0부터 시작하기 때문입니다.
*/

let mySchedule = "";
console.log(mySchedule || false); // < false > 빈 값이랑 false 를 or 연산한 것이기에 false
console.log(!!mySchedule); // < true > 빈 값 false의 not 연산해서 true



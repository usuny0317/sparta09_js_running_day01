
//import calc from "./quiz04";
let scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function calc(num1, yun, num2) {
    // 코드를 작성해주세요.
    if(yun==="+"){
        return num1+num2;
    }
    else if(yun==="-"){
        return num1-num2;
    }
    else if(yun==="*"){
        return num1*num2;
    }
    else if(yun==="/"){
        return Math.floor(num1/num2);
    }
    else{
        return "잘못된 형식입니다.";
    }

  }

function add(scores) {
  // 4번 문제의 계산기 함수를 활용한 코드를 작성해주세요.
  // 질문! quiz04에 있는 거 import 해올 수 없는 건가?
  // 시도1. import {calc} from "/.quiz04.js" 했더니  SyntaxError: Cannot use import statement outside a module 오류 발생
  // 시도2. quiz04.js에서 export {calc} 하고 실행 SyntaxError: Cannot use import statement outside a module 오류 발생

  for(let i=0; i<scores.length; i++){
    scores[i]= calc(scores[i], "+", 3);
    //scores[i] = scores[i]+3
  }
  
}

add(scores);

console.log(scores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]


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
  
  calc(3, "+", 6); // 결과값 9
  calc(11, "-", 6); // 결과값 5
  calc(6, "*", 3); // 결과값 18
  calc(15, "/", 3); // 결과값 5

  //export default calc 안되는 구만..

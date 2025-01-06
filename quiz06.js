/*아래 코드는 두 명의 유저(유저 A, 유저 B)가 각각 장바구니를 가지고 있다고 가정한 예시입니다.
B 유저에게 할인 쿠폰을 적용하려고 applyCoupon 함수를 만들었습니다.*/

function applycoupon(cart, coupon) {
  cart.items.forEach((item) => {
    item.price -= coupon.discount;
  });
};

var copyObjectDeep = function(target) {
	var result = {};
	if (typeof target === 'object' && target !== null) {
		for (var prop in target) {
			result[prop] = copyObjectDeep(target[prop]);
		}
	} else {
		result = target;
	}
	return result;
}

const userACart = {
  items: [
    { name: "키보드", price: 30000 },
    { name: "마우스", price: 20000 },
  ],
};

const userBCart = copyObjectDeep(userACart);
/*
const userBCart = {
    items: [
        { name: userACart.items[0].name, price: userACart.items[0].price },
        { name: userACart.items[1].name, price: userACart.items[1].price },
        ],
    }
*/ 

console.log(`변화 전: ${userBCart}`);
const coupon = { discount: 5000 };
applycoupon(userBCart, coupon);
console.log(`변화 후: ${userBCart}`);


/*

1.	실행 결과로 userACart.items와 userBCart.items는 각각 어떻게 달라져 있을까요?
    Acart, Bcart둘 다 키보드 price : 25000, 마우스 price : 15000이 됩니다.

2.	1번의 결과에 대한 이유를 설명해보세요.
    객체를 복사했기 때문에 주소값이 복사 되어 같은 값의 주소를 참조하고 있습니다. 
    그런 상태에서 B의 값을 바꾸려 했기에, A의 값도 같이 바뀌게 됩니다.

3.	원래 의도대로라면 유저 A와 유저 B 장바구니가 독립적으로 동작해야 하는데, 그렇게 하려면 코드를 어떻게 수정해야 할까요?
    const userBCart = userACart 해당 부분의 복사를 
    1. 직접 지정하거나(얕은 복사) 
    2. A차트의 값을 이용해서 복사하는 것과(깊은 복사라고 보기 어렵다!)
    3. 복사하는 함수를 만들어 깊은 복사하는 것으로 해결할 수 있습니다. 
    1. 
    const userBCart = {
        items: [
            { name: "키보드", price: 30000 },
            { name: "마우스", price: 20000 },
            ],
        }
    2.
    const userBCart = {
        items: [
            { name: userACart.items[0].name, price: userACart.items[0].price },
            { name: userACart.items[1].name, price: userACart.items[1].price },
            ],
        }

    3. 

*/
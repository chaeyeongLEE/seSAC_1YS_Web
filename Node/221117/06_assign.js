let list = ['apple', 'banana'];
[item1, item2] = list;
//let item1 = list[0]; //0인덱스
//let item2 = list[1]; //1인덱스
//let item3 = list[2];


[item1, item2 = 'peach', item3='orange'] = list; //이 값이 없을 때 대체를 할 수가 있다.
console.log(item1);
console.log(item2);
console.log(item3);

let x = 1;
let y = 3;
// 임시변수
// x와 y의 값을 바꾸고 싶을 때

let temp = x;
x = y;
y = temp;
//temp에 x를 두고 x와 y를 같게 만든 뒤 y에 temp를 둔다.

//x랑 y를 배열로 만들기

[y,x]=[x,y]
//[1,3]
//[a,b] = [1,3]

let obj = {
    a: 'one',
    b: 'two',
    e: '1',
    f: '2'
};
/* let key1 = obj.key1; */
let {b: key1, a, c = 'three'} = obj; //key값으로 찾는 거라 순서가 중요하지 않음!(배열은 순서 중요!)
console.log(a);
console.log(key1);
console.log(c); //c라는 값이 없으면 대체할 수 있다.(배열과 같음)

//전개 연산자
let {b, ...rest} = obj;
console.log(b);
console.log(rest);
//...은 전개 연산자 배열을 전개해서 가져오는 것
//구조 분해할 때 전개 연산자를 사용하면 먼저 b를 추출하고 나머지를 다 가져온다.
//구조 분해할 때 {변수명, ...rest}을 해주면 앞의 변수명만 먼저 추출이 되고 나머지가 추출이 된다.
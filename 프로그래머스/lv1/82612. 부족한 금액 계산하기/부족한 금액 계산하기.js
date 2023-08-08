function solution(price, money, count) {
    // var answer = -1;
    let arr = [];
    arr = Array(count).fill(price).map((arr,i) =>{
        return i+1
    }).map(x=>x*price);
    let sum = arr.reduce((a,b)=>a+b);
    return money<sum?sum-money:0;
}
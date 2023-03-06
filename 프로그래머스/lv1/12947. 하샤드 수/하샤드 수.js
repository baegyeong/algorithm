function solution(x) {
    return x%(x.toString().split('').map(x=>x*1).reduce((arr,cur)=>arr+cur))===0?true:false;
}
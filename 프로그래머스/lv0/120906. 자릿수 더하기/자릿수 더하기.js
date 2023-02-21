function solution(n) {  
    return [...n.toString()].map(x=>Number(x)).reduce((arr,cur)=>arr+cur);
}
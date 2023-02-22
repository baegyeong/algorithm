function solution(my_string) {
    return [...my_string].filter(x=>Number.isInteger(Number(x)))
        .map(x=>Number(x))
        .sort((a,b)=>a-b);    
}
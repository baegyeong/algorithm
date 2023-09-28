function solution(arr) {
    let result = [];
    for(x of arr){
        for(let i=0; i<x; i++){
            result.push(x)
        }
    }
    return result;
}
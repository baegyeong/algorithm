function solution(start, end) {
    let i =start;
    let result = [];
    while(end!==i){
        result.push(i);
        i++;
    }
    result.push(end);
    return result;
}
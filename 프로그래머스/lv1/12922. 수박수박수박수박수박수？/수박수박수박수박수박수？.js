function solution(n) {
    let temp = ["수", "박"];
    let answer = '';
    for(let i=0; i<n; i++){
        i%2===0?answer+=temp[0]:answer+=temp[1];
    }
    return answer;
}
function solution(array) {
    var answer = [];
    let tmp = JSON.parse(JSON.stringify(array));
    let a = array.sort((a,b)=>a-b).pop();
    answer.push(a, tmp.indexOf(a))
    return answer;
}
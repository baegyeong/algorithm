function solution(numbers, num1, num2) {
    var answer = [];
    let x = num2 - num1;
    answer.push(numbers[num1]);
    for(let i=num1+1; i<=num1+x; i++){
        answer.push(numbers[i]);
    }
    return answer;
}
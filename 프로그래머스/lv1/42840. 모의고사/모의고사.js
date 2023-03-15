function solution(answers) {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const answer = [0, 0, 0];
    
    for(let i = 0; i < answers.length; ++i){
        if(answers[i] === arr1[i%arr1.length]){
            answer[0]++;
        }
        if(answers[i] === arr2[i%arr2.length]){
            answer[1]++;
        }
        if(answers[i] === arr3[i%arr3.length]){
            answer[2]++;
        }
    }
    
    let max = 0;
    for(let i = 0; i < answer.length; ++i){
        max = max < answer[i] ? answer[i] : max;
    }
    
    const result = [];
    for(let i = 0; i < answer.length; ++i){
        if(max === answer[i]){
            result.push(i+1);
        }
    }
    
    return result;
}
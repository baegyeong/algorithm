function solution(numbers) {
    let answer = new Set()
    let len = numbers.length
    for(let i=0; i<len; i++){
        for(let j=i+1; j<len; j++){
            answer.add(numbers[i]+numbers[j])
        }
    }
    return Array.from(answer).sort((a,b)=>a-b)
}
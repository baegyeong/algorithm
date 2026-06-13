function solution(survey, choices) {
    const N = survey.length
    const result = {}
    const characteristic = [["R", "T"], ["C", "F"], ["J", "M"], ["A", "N"]]
    
    characteristic.flat().forEach(item => result[item] = 0)
    
    for(let i = 0; i < N; i++){
        const diff = choices[i] - 4
        const idx = diff > 0 ? 1 : 0
        const type = survey[i][idx]
        
        if (diff === 0) continue
        result[type] += Math.abs(diff)
    }
    
    let answer = ''
    
    for(const type of characteristic){
        const [A, B] = type
        
        answer += result[A] > result[B] ? A : result[A] < result[B] ? B : type.sort()[0]
    }
    
    return answer
}
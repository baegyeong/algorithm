function solution(elements) {
    const N = elements.length
    const answer = new Set()
    
    for(let i=1; i<=N; i++){
        let sum = 0
        let j = 0
        let count = 0
        while(j<N+i){
            let start = j
            while(count<i){
                sum += elements[j%N]
                j++
                count++
            }
            answer.add(sum)
            sum -= elements[j-i]
            count--
        }
    }
    
    return answer.size
}
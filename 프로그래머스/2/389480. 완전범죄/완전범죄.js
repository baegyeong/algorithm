function solution(info, n, m) {
    let result = Infinity
    const dp = Array(m).fill(0)
    const totalA = info.map(item=>item[0]).reduce((acc,cur)=>acc+cur)
    
    for(const [A,B] of info){
        for(let i=m-1; i>=B; i--){ 
            dp[i] = Math.max(dp[i], dp[i-B]+A)
        }
    }
    
    const bestA = totalA - dp[m-1]
    return bestA < n ? bestA : -1

}
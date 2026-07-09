function solution(number) {
    let answer = 0
    const N = number.length
    
    function dfs(comb, i){
        if(comb.length === 3){
            const sum = comb.reduce((acc,cur)=>acc+cur,0)
            if(sum === 0) answer++
            
            return
        }
        
        if(i===N) return
        
        comb.push(number[i])
        dfs(comb, i+1)
        comb.pop()
        dfs(comb, i+1)
    }
    
    dfs([], 0)
    
    return answer
}
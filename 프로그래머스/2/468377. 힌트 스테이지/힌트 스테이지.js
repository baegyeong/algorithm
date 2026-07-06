function solution(cost, hint) {
    let answer = Infinity
    let N = cost.length
    
    function dfs(hintCount, totalCost, idx){
        if(idx === N){
            answer = Math.min(answer, totalCost)
            return 
        }
        
        const maxHint = Math.min(hintCount[idx], cost[idx].length-1)
        dfs(hintCount, totalCost + cost[idx][maxHint], idx+1)

        if(idx < N-1){
            for(let j=1; j<hint[idx].length; j++){
                hintCount[hint[idx][j]-1] += 1    
            }
            dfs(hintCount, totalCost + hint[idx][0] + cost[idx][maxHint], idx+1)    
            for(let j=1; j<hint[idx].length; j++){
                hintCount[hint[idx][j]-1] -= 1
            }
        }
    }
    
    dfs(Array(N).fill(0), 0, 0)
    
    return answer
}
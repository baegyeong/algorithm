function solution(n, m) {
    function isPrime(a,b){
        return a % b === 0
    }
    
    const n_max = []
    for(let i=1; i<=n; i++){
        if(isPrime(n,i)) n_max.push(i)
    }
    
    const m_max = []
    for(let i=1; i<=m; i++){
        if(isPrime(m,i)) m_max.push(i)
    }

    const result = []
    for(let i=n_max.length-1; i>=0; i--){
        if(m_max.includes(n_max[i])) {
            result.push(n_max[i])
            break
        }
    }
    
    let j = Math.max(n, m);    
    while(true){
        if(j%n === 0 && j%m===0){
            result.push(j)
            break
        }
        j++
    }
    
    return result
}
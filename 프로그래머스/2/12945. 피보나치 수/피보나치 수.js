function solution(n) {
    const dp = Array(100001)
    dp[0] = 0
    dp[1] = 1
    function fibo(n){
        if(!isNaN(dp[n])) return dp[n]
        
        dp[n] = (dp[n-1]+dp[n-2])%1234567
        return dp[n]
    }
    
    for(let i=2; i<=n; i++){
        fibo(i)
    }
    
    return dp[n]
}
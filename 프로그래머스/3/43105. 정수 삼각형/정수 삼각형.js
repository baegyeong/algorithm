function solution(triangle) {
    let len = triangle.length
    let dp = Array.from({length: len}, (_,i)=>Array.from({length:i+1}).fill(0));

    dp[0][0] = triangle[0][0]
    for(let i=1; i<len; i++){
        for(let j=0; j<i; j++){
            dp[i][j] = Math.max(dp[i][j], dp[i-1][j]+triangle[i][j])
            dp[i][j+1] = Math.max(dp[i][j+1], dp[i-1][j]+triangle[i][j+1])
        }
    }

    return Math.max(...dp[len-1])
}
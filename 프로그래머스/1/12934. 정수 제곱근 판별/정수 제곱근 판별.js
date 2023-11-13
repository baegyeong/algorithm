function solution(n) {
    const a = Math.sqrt(n)
    return a===Math.floor(a)?Math.pow(a+1,2):-1
}
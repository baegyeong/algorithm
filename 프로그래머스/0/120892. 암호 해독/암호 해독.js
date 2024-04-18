function solution(cipher, code) {
    let answer = ''
    for(let i=1; i<=cipher.length/code; i++){
        answer += cipher[i*code-1]
    }
    return answer
}
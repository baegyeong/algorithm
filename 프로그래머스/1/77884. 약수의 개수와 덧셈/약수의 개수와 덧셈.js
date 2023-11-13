function solution(left, right) {
    let answer = []
    let result = []
    for(let i=left; i<=right; i++){
        result.push(i)
        const a = new Set()
        for(let j=1; j<=i; j++){
            if(i%j===0)
                a.add(j)
        }
        answer.push(a.size)
    }
     return result.reduce((a,b)=>answer[result.indexOf(b)]%2===0?a+b:-1*b+a,0)
}
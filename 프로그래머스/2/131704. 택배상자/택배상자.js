function solution(order) {
    const assistance = []
    let i = 1
    let idx = 0
    let answer = 0
    
    while(idx<order.length){
        if(i === order[idx]) {
            i++
            idx++
            answer++
        }else if(assistance[assistance.length-1] === order[idx]){
            assistance.pop()
            idx++
            answer++
        }else if(order[idx]<assistance[assistance.length-1]){
            break
        }else{
            assistance.push(i)
            i++
        }
    }
    
    return answer
}
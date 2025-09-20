function solution(n) {
    let answer = n+1;
    const oneSize = getOneLength(n.toString(2).split(""))
    
    while(true){
        const binary =answer.toString(2)
        const binaryOneSize = getOneLength(binary.split(""))
        
        if(binaryOneSize===oneSize) {
            break;
        }
        answer++
    }
    
    return answer
}

const getOneLength=(arr)=>arr.filter(item=>item==="1").length
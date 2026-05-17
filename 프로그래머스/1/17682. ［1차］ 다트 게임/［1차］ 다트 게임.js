function solution(dartResult) {
    const bonusArea = { S: 1, D: 2, T: 3 }
    const option = ["#", "*"]
    
    let answer = []
    let idx = 0
    let num = "";
    
    while(idx<dartResult.length){
      if(!isNaN(dartResult[idx])){
           num += dartResult[idx]
       } else if(Object.keys(bonusArea).includes(dartResult[idx])){
           answer.push(Number(num) ** bonusArea[dartResult[idx]])
           
           if(dartResult[idx+1] && !isNaN(dartResult[idx+1])){
               idx++
               num = ""
               continue;
           }
       }else if(dartResult[idx]==="*"){
           const lastIndex = answer.length-1
           
           answer[lastIndex] *= 2
           
           if(answer[lastIndex-1]){
               answer[lastIndex-1]*=2
           }
           num = ""
       }else if(dartResult[idx]==="#"){
           const lastIndex = answer.length-1
           
           answer[lastIndex] = -answer[lastIndex]
           num = ""
       }
        
        idx++
    }
    
    return answer.reduce((acc,cur)=>acc+cur,0)
}
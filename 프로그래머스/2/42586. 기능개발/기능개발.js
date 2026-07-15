function solution(progresses, speeds) {
    const day = []
    
    for(let i=0; i<progresses.length; i++){
        day.push(Math.ceil((100-progresses[i]) / speeds[i]))
    }
    
    let right = 0, max = 0
    const result = []
    
    while(right < day.length){
        if(max >= day[right]) {
            result[result.length-1]++
        } else {
            result.push(1)
            max = day[right]
        }
        right++
    }
    
    return result
}
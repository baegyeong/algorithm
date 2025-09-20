function solution(s) {
    const answer = [0,0];
    let x = s;
    
    while(x!=="1"){
        answer[0]++
        answer[1] += x.split("").filter(item=>item==="0").length
        
        const xSize = +x.replaceAll("0","").length
        x = xSize.toString(2)
    }
    
    return answer
}
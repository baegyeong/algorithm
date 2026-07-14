function solution(s) {
    let answer = 0
    
    function check(arr){
        const second = []

        while(arr.length){
            let x = arr.pop()
            const pair = second[second.length-1]
            
            if(["]", ")", "}"].includes(x)) second.push(x) 
            else if(x === "[" && pair === "]" || x === "{" && pair === "}" || x === "(" && pair === ")") second.pop()
            else return false
        }
        
        if(second.length) return false
        return true
    }
    
    let stack = s.split("")
    
    for(let i=0; i<s.length; i++){
        stack = stack.slice(1).concat(stack[0])
        if(check([...stack])) answer++
    }
    
    return answer
}
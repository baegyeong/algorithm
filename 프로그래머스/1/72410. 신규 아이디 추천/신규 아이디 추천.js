function solution(new_id) {
    const isAlphabet = (str) => str >= 'a' && str <= 'z'
    const isNumber = (str) => !Number.isNaN(+str)
    
    const step1 = new_id.toLowerCase()
    
    const step2 = step1.split("").filter(item=>isAlphabet(item) || ['-', '_', '.'].includes(item) || isNumber(item))
    
    const step3 = (function(){
        const newId = []
        let prev = false
        let idx = 0

        while(idx<step2.length){
            if(step2[idx] === "."){
                if(!prev) prev = true
            }else {
                if(prev) {
                    prev = false
                    newId.push(".")
                    newId.push(step2[idx])
                }else{
                    newId.push(step2[idx])
                }
            }
            idx++
        }
        
        return newId
    })()
    
    const step4 = (function(){
        let newId = [...step3]
        if(newId[0] === ".") newId.shift()
        if(newId[newId.length-1]===".") newId.pop()
        return newId
    })()
    
    const step5 = !step4.length ? ["a"] : step4

    const step6 = (function() {
        let newId = step5
        if(step5.length >= 16) newId = step5.slice(0, 15)
        if(newId[newId.length-1] === ".") newId.pop()
        return newId.join("")
    })()
    
    const step7 = step6.length<=2 ? step6.padEnd(3, step6[step6.length-1]) : step6
    
    return step7
}
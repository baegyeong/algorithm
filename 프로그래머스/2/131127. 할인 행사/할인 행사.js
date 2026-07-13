function solution(want, number, discount) {
    let answer = 0
    
    for(let i=0; i<=discount.length-10; i++){
        let flag = false
        const arr = Array(number.length).fill(0)
        for(const item of discount.slice(i, i+10)){
            const idx = want.indexOf(item)
            if(idx===-1){
                flag = true
                break
            }
            arr[idx]++
        }
        
        if(flag) continue
        const canBuy = number.every((item,index)=>item === arr[index])
        if(canBuy) answer++
    }
    
    return answer
}
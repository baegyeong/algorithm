function solution(food) {
    let result = ''
    food.slice(1).map((x,index)=>{
        if(x>=2) {
            result += (index+1).toString().repeat(x/2)
        }
    })
    
    const temp = result.split("").reverse().join("")
    return result+0+temp
}
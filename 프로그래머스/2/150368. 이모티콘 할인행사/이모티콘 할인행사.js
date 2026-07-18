function solution(users, emoticons) {
    const discountRate = [10, 20, 30, 40]
    let maxEmoticonPlus = 0
    let maxPrice = 0
    const discountArr = []
    
    function dfs(arr){
        if(arr.length===emoticons.length){
            discountArr.push([...arr])
            return
        }
        
        for(let i=0; i<4; i++){
            arr.push(discountRate[i])
            dfs(arr)
            arr.pop()
        }
    }
    
    dfs([])

    for(const discount of discountArr){
        let emoticonPlus = 0, emoticonPrice = 0
        
        for(const user of users){
            const [rate, price] = user
            
            const idx = []
            discount.forEach((d,i) => {
              if(d>=rate) idx.push(i)
            })
            
            const sum = emoticons.reduce((acc,cur,i)=>idx.includes(i) ? acc+cur*(100-discount[i])/100 : acc, 0)
            
            if(sum>=price) emoticonPlus++
            else emoticonPrice += sum
        }
        
        if((emoticonPlus>maxEmoticonPlus) || (emoticonPlus===maxEmoticonPlus && maxPrice < emoticonPrice)){
            maxEmoticonPlus = emoticonPlus
            maxPrice = emoticonPrice
        }
    }
    
    return [maxEmoticonPlus, maxPrice]
}
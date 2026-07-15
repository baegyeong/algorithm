function solution(clothes) {
    const clothesInfo = new Map()
    
    for(const [name, type] of clothes){
        const arr = clothesInfo.get(type) ?? []
        arr.push(name)
        clothesInfo.set(type, arr)
    }
    
    return [...clothesInfo.values()].reduce((acc,cur)=>acc*(cur.length+1),1)-1
    
}
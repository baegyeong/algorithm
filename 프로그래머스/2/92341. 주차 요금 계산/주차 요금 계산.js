function solution(fees, records) {
    const [defaultTime, defaultFee, unitTime, unitFee] = fees
    const parking = new Map()
    const feeInfo = new Map()
    
    function calculateFee(totalTime){
        if(totalTime<=defaultTime){
            return defaultFee
        }else{
            return defaultFee + Math.ceil((totalTime-defaultTime)/unitTime)*unitFee
        }
    }   
    
    records.forEach(record=>{
        const [time, num, history] = record.split(" ")
        if(parking.has(num)){
            const timeTable = parking.get(num)
            timeTable.push(time)
            parking.set(num, timeTable)
        }else{
            parking.set(num, [time])
        }
    })
    
    for(const [num, timeTable] of parking.entries()){
        let totalTime = 0;
        for(let i=0; i<timeTable.length; i+=2){
            const [inMin, inSec] = timeTable[i].split(":").map(Number)
            let outTime;
            if(timeTable[i+1]){
                outTime = timeTable[i+1].split(":").map(Number)
            }else{
                outTime = [23, 59]
            }
            
            const [outMin, outSec] = outTime
            totalTime += (outMin-inMin) * 60 + outSec - inSec 
        }
        
        const resultFee = calculateFee(totalTime)
        feeInfo.set(num, resultFee)
    }
    
    return [...feeInfo].sort((a,b)=>a[0]-b[0]).map(item=>item[1])  
}

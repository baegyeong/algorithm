function solution(bridge_length, weight, truck_weights) {
    let weightSum = 0
    let time = 0
    const queue = Array(bridge_length).fill(0)
    
    while(truck_weights.length || weightSum > 0){
        time++
        
        const outTruck = queue.shift()
        weightSum -= outTruck
        
        if(truck_weights.length && weightSum+truck_weights[0]<=weight){
            const newTruck = truck_weights.shift()
            queue.push(newTruck)
            weightSum += newTruck   
        }else{
            queue.push(0)
        }
    }
    
    return time
}
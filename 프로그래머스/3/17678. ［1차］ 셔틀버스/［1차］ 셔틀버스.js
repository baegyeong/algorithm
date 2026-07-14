function getTimeFormat(timeNumber){
    return `${parseInt(timeNumber/60).toString().padStart(2, 0)}:${(timeNumber%60).toString().padStart(2, 0)}`
}

function getNumberFormat(time){
    const [hour, min] = time.split(":").map(Number)
    return hour * 60 + min
}

const INIT = 60 * 9

function solution(n, t, m, timetable) {
    const busQueue = {}
    
    for(let i=0; i<n; i++){
        busQueue[INIT+t*i] = []
    }
    
    const numTimeTable = timetable.map(getNumberFormat).sort((a,b)=>a-b)
    
    for(const person of numTimeTable){        
        const busTime = Object.keys(busQueue).sort((a,b)=>a-b).find(item=> item >= person && busQueue[item].length < m)
        if(busTime) busQueue[busTime].push(person)
    }

    const sortedBusQueue = Object.entries(busQueue).sort((a,b)=>b[0]-a[0])
    
    for(const [key, value] of sortedBusQueue){
        if(value.length >= m){
            const time = Math.max(...new Set(value)) - 1
            return getTimeFormat(time)
        }

        return getTimeFormat(key)
    }
    
}
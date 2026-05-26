function solution(video_len, pos, op_start, op_end, commands) {
    const getTotalSecond = (timeStr) => {
        const [min, sec] = timeStr.split(":").map(Number)
        return min * 60 + sec
    }
    
    const totalVideo = getTotalSecond(video_len)
    const totalOpStart = getTotalSecond(op_start)
    const totalOpEnd = getTotalSecond(op_end)
    
    const action = {
        next: (time) => time + 10 > totalVideo ? totalVideo : time + 10,
        prev: (time) => time - 10 < 0 ? 0 : time - 10,
        isOpening: (time) => time >= totalOpStart && time <= totalOpEnd ? totalOpEnd : time
    }
    
    let currentTime = getTotalSecond(pos)
    
    for(const command of commands){
        currentTime = action.isOpening(currentTime)
        currentTime = action[command](currentTime)
    }
    
    currentTime = action.isOpening(currentTime)
    
    const resultMin = Math.floor((currentTime / 60)).toString().padStart(2, 0)
    const resultSec = (currentTime % 60).toString().padStart(2, 0)
    return `${resultMin}:${resultSec}`
}
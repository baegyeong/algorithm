function solution(arr, intervals) {
    let answer =[]
    answer.push(...arr.slice(intervals[0][0],intervals[0][1]+1))
    answer.push(...arr.slice(intervals[1][0], intervals[1][1]+1))
    return answer
}
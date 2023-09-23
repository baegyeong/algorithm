function solution(num_list, n) {
    let len = num_list.length
    let a = num_list.splice(n,len)
    return a.concat(num_list)
}
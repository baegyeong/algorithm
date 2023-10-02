function solution(my_string, index_list) {
    let result = ''
    for(let x of index_list){
        result += my_string[x]
    }
    return result
}
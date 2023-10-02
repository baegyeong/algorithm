function solution(str_list, ex) {
    let result = ''
    for(let x of str_list){
        if(!x.includes(ex)){
            result+=x
        }
    }
    return result
}
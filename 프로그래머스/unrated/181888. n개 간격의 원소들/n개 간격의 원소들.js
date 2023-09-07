function solution(num_list, n) {
    let result = [];
    let num = Math.ceil(num_list.length/n);
    for(let i=0; i<num; i++){
        result.push(num_list[i*n]);
        if(num_list[i*2]===null) break;
    }
        return result;
    
}
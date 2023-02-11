function solution(array, height) {
    let count = 0;
    array.forEach(function(x){
        if(x>height) count++;
    })
    return count;
}
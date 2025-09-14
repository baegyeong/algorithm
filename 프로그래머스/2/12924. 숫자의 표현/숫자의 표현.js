function solution(n) {
    let count = 0
    let left = 1, right = 1, sum = 1;
    
    while(left <= n){
        if(sum === n){
            count++;
            sum -= left++;
        } else if(sum < n){
            right++;
            sum += right;
        } else {
            sum -= left++;
        }
    }
    
    return count;
}
function solution(s){
    let arr = [];
    let left = 0;
    if (s[0]==='\)')
        return false
    for (let x of s){
        if (x==='\(')
            arr.push(x);
        else if(x==='\)'){
            // if (arr.length===0)
            //     return false
            // else
            left = arr.pop();
            if(left!=='\(')
                return false
        }
    }
    return arr.length===0
    
}
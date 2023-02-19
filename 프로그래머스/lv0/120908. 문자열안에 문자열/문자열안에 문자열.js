function solution(str1, str2) {
    const a = str1.includes(str2);
    console.log(a);
    
    if(a===true)
        return 1
    else return 2
}
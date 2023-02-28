function solution(emergency) {
    let arr = JSON.parse(JSON.stringify(emergency));
    arr = arr.sort((a,b)=>b-a);
    return emergency.map(x=>arr.indexOf(x)+1);
}
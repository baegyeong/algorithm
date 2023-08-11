function solution(t, p) {
    let count = 0;
    for(let i=0; i<t.length; i++){
        let num = p.length;
        let result = [...t].splice(i, num).join('');
        if(result<=p&&result.length===num){
            count++;
        }
    }
    return count;
}
function solution(s) {
    s = s.split(" ");
    for(let i=0; i<s.length; i++){
        s[i] = s[i].split("");
        for(let j=0; j<s[i].length; j++){
            if(j%2===0){
                s[i][j]= s[i][j].toUpperCase();
            }else{
                s[i][j] = s[i][j].toLowerCase();
            }
        }
        s[i] = s[i].join('')
    }
    return s.join(' ')
}
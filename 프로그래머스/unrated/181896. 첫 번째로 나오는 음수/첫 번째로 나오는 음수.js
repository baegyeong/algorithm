function solution(num_list) {
    const x = [...num_list].filter(x=>x<0);
    return num_list.indexOf(x[0]);
}
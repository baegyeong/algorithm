function solution(hp) {
    const a = ~~(hp/5)
    const b = ~~((hp-a*5)/3)
    const c = ~~((hp-a*5-b*3)/1)
    return a+b+c
}
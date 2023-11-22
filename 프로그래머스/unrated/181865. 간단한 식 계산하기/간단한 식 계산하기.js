function solution(binomial) {
    binomial= binomial.split(' ')
    if(binomial[1]==="+"){
        return +binomial[0]+ +binomial[2]
    }
    else if(binomial[1]==="-"){
        return binomial[0]-binomial[2]
    }
    else if(binomial[1]==="*"){
        return binomial[0]*binomial[2]
    }
    else{
        return binomial[0]/binomial[2]
    }
}
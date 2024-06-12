// Run by Node.js
const readline = require('readline');

let N;
let M;
let input = [];

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		if(!N){
			[N,M]=line.split(" ").map(Number)
		}else{
			input.push(line)
		}
		if(M+1===input.length) rl.close();
	}

	console.log(solution(input))
	process.exit();
})();

const solution = (input)=>{
	let arr = input[0].split(" ").map(Number)
	let tmp = new Set()
	input.shift()
	input = input.map(x=>x.split(" ").map(Number))

	for(let j=0; j<M; j++){
		let [s,e] = input[j]
		for(let i=s-1; i<e; i++){
			arr[i]+=1
			tmp.add(i)
		}

		if(((j+1)%3===0)){
			for(let x of tmp){
				arr[x]-=1;
			}
			tmp=new Set()
		}
	}
	
	return arr.join(" ")
}


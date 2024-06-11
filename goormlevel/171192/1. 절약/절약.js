// Run by Node.js
const readline = require('readline');

let N = null;
let count =0;
const data = [];


(async () => {
	let rl = readline.createInterface({ input: process.stdin });

	for await (const line of rl) {
		if(!N){
			N=+line;
		}else{
			data.push(line);
			count+=1;
		}
		if(N===count){
			rl.close();
		}
	}
	console.log(solution(N, data))
	process.exit();
})();

const solution = (N, data)=>{
	let answer = 0;
	for(let i=0; i<N; i++){
		const [operation, num]=data[i].split(" ")
		if(operation==="in") answer+= +num;
		else answer-= +num;
		
		if(answer<0) break;
	}
	return answer>=0?"success":"fail"
}

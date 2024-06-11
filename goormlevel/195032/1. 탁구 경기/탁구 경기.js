// Run by Node.js
const readline = require('readline');

let N =null;
let data = [];

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		if(!N){
			N=+line;
		}else{
			data.push(line)
		}
		
		if(data.length===N) rl.close();
	}
	
	console.log(solution(data))
	process.exit();
})();

const solution =(data)=>{
	let arr = [0, 0]
	for(let x of data){
		if(x==='D') arr[0]++;
		else arr[1]++;
		
		if(Math.abs(arr[0]-arr[1])>=2){
			break;
		}
	}
	
	return arr.join(":")
}
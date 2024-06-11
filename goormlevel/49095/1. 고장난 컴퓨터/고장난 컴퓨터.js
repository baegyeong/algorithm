// Run by Node.js
const readline = require('readline');

let data =[];

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		data.push(line)
		if(data.length===2){
			rl.close()
		}
	}
	
	console.log(solution(data))
	process.exit();
})();

const solution = (data)=>{
	let [N,c]=data[0].split(" ").map(Number)
	let arr = data[1].split(" ").map(Number)
	let count=1;
	for(let i=1; i<N; i++){
		if(arr[i]-arr[i-1]<=c){
			count++;
		}else{
			count=1;
		}
	}
	return count
}
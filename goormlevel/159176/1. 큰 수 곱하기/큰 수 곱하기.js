// Run by Node.js
const readline = require('readline');

let input = [];

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		input.push(line)
		rl.close();
	}
	
	console.log(solution(input))
	
	process.exit();
})();

const solution = (input)=>{
	input= input[0].split(" ").map(Number);
	
	const x = input.reduce((a,b)=>a*b)
	return x
}
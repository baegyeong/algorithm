// Run by Node.js
const readline = require('readline');

let input =[];

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		input.push(line);
		rl.close();
	}
	
	console.log(solution(input))
	process.exit();
})();

const solution = (input)=>{
	let [A,B]=input[0].split(" ")
	let A_answer=eval(A);
	let B_answer=eval(B);
	
	return A_answer>B_answer?A_answer:B_answer
	
}
// Run by Node.js
const readline = require('readline');

let N = null;
let data = [];

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		if(!N){
			N=+line;
		}else{
			data.push(line)
		}
		
		if(N===data.length){
			rl.close();		
		}
	}
	
	console.log(solution(data))
	process.exit();
})();

const solution = (data)=>{
	let tmp = ['A', 'a', 'E', 'e', 'I','i','O','o','U','u']
	let answer = []
	for(let el of data){
		el=el.replaceAll(" ", "")

		const x = [...el].filter(x=>tmp.includes(x))
		if(x.length===0) answer.push("???")
		else answer.push(x.join(""))
	}
	
	return answer.join("\n")
}



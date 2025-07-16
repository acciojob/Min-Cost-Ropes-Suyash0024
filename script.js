function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort((a,b) =>a-b);
	let totalCost = 0;
	let n = arr.length;


	for(let i=0; i<n; i++){

		let first = arr.shift();
		let second = arr.shift();

		let cost = first + second;
		totalCost += cost;

		arr.push(cost);

		arr.sort((a,b) => a - b);
	}
  return totalCost;
}

module.exports=mincost;

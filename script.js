function firstNonRepeatedChar(str) {
 // Write your code here

	let freq = {};
	for(let char of str){
		if(!freq[char]){
			freq[char] = 1;
		}else{
			freq[char]++;
		}
	}
	for(let char of str){
		if(freq[char] === 1){
			return char;
		}
	}
	return null;
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

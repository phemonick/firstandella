
function findMinMax(arr){
	var max=0;
	var min=arr[0];
	var my=[];
	for (var i=0; i<=arr.length;i++){
		if (arr[i]>max){
			max=arr[i];
		}
		else if(arr[i]<min){
			min=arr[i];
		}


	}
	
	if (max==min){
		my.push(min);
		
		return my;
	}else{
		my.push(min);
	my.push(max);
	return my;
}
}
console.log(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2]))
module.exports = {
	findMinMax: findMinMax
}

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
	my[0]=min;
	my[1]=max;
	return my;
}

module.exports = {
	findMinMax: findMinMax
}
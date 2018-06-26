const sort = (arr) => {
  for(let i=1; i<arr.length; i++){
  	for(let j=0; j<i; j++){
      if(arr[i] < arr[j]){
        [arr[i], arr[j]] = [arr[j], arr[i]];
        console.log(arr);
    	}
    }  
  }
}
sort([5,2,1,8]);

var arr = [12, 11, 13, 5, 6, 7]
var temp = []
var counter =0
function mergeSort(arr){
	var len = arr.length
  if(len>1){
  	mid = Math.floor(len/2)
    var L = arr.filter((elem, i)  => i<mid)
    var R = arr.filter((elem, i)  => i>=mid)
		
    mergeSort(L)
    mergeSort(R)
    var i=0,j=0,k=0;
    while (i < L.length && j < R.length){
            if (L[i] < R[j]){ 
                temp[k] = L[i] 
                i+=1
             }
            else{ 
                temp[k] = R[j] 
                j+=1
              }
            k+=1
     }
     
     		while (i < L.length){ 
            temp[k] = L[i] 
            i+=1
            k+=1
        }
          
        while (j < R.length){
            temp[k] = R[j] 
            j+=1
            k+=1
         }
         return temp
     }
}
console.log(mergeSort(arr))

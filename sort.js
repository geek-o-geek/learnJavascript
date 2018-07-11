values.sort((a,b)=>
            {
                    if (a.attendance_date < b.attendance_date) {
                          return -1;
                    } else   if (a.attendance_date > b.attendance_date)  {
                          return 1; 
                    } else {
                          return 0;
                     }
             } );

// suppose values is an array to be sorted


arr = [1, 21, 32, 6, 8, 9];
arr.sort(function(a, b){return b - a});

console.log(arr[1]);

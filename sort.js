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

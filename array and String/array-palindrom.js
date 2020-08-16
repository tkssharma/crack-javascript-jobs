function palindrome(array1) {
    var array2 =[];
     // Step 2. Create the FOR loop
     var len = array1.length; // var len = "A man, a plan, a canal. Panama".length = 30
     var mid = math.floor(len/2);
     console.log(mid);
     for (var i = 0; i < mid; i++) {
       array2.push(array1[i]);
     }
     if(len %2 !== 0) {
         i++;
     }
     console.log(array2);
     while(i < array1.length) {
         var elm = array2.pop();
         console.log(elm, array2[i])
         if(elm !== array1[i]){
             return false;
         } else {
             i++;
         }
     }
     return true; // Both parts are strictly equal, it returns true => The string is a palindrome
    }
    
    palindrome("A man, a plan, a canal. Panama".split(''));
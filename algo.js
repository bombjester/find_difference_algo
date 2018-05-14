var findTheDifference = function(s, t) {
   
    var array = s.split("");
    var array2 = t.split("");
    
    for(x in array){
        for(y in array2){
            if(array[x] == array2[y]){
                array2[y] = "";
                break;
            }
        }
    }
    //console.log(array2);
    for(z in array2){
        if(array2[z] != ""){
            var answer = array2[z];
        }
    }
   return answer
};
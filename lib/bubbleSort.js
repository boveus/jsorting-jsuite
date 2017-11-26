module.exports = function bubbleSort(array){
   var len = array.length;
   for (var i = len - 1; i >= 0; i--){
     for(var l = 1; l <= i; l++){
       if(array[l - 1]>array[l]){
           var temparray = array[l - 1];
           array[l - 1] = array[l];
           array[l] = temparray;
        }
     }
   }
   return array;
}

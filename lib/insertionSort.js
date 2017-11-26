module.exports = function insertionSort(array){
  var i;
  var len = array.length;
  var l;
  var newValue;

  for (i = 1; i < len; i++) {
    newValue = array[i]
    l = i;
    while (l > 0 && array[l - 1] > newValue) {
        array[l] = array[l - 1];
        l--;
    }
    array[l] = newValue
  }

  return array;
}

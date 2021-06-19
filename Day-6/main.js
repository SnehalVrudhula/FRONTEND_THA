var is_array = input => {
    if (toString.call(input) === "[object Array]")
      return true;
    return false;   
      };
  console.log(is_array('w3resource'));
  console.log(is_array([1, 2, 4, 0]));
   
   var arr1=[1, 2, 4, 0];
   var arr2=[1, 2, [4, 0]];
  var clone= [].concat(arr1);
  var clone2=[].concat(arr2);
  clone2[2]=5;
  console.log(clone2);
  console.log(arr2);

  var first =  function(array, n) {
    if (array == null) 
    return void 0;
  if (n == null) 
    return array[0];
  if (n < 0)
    return [];
  return array.slice(0, n);
};

var color1 = function(arr){
    arr = ["Red", "Green", "White", "Black"];
console.log(arr.toString());
console.log(arr.join());
console.log(arr.join('+'));

}
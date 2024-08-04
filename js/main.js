(function() {
  let arr = [8,4,6,2,4,3,2,0,6,4];

  console.log(arr);
  arr.sort();
  console.log(arr);
  arr.sort((x,y) => {
    return y - x;
  })
  console.log(arr)
  



}());
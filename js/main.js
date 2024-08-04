(function() {
  let arr = [8,4,6,2,4,3,2,0,6,4];

  let res = arr.find(num => num < 5);
  console.log(res);

  let res2 = arr.filter(num => num < 5);

  console.log(res2)



}());
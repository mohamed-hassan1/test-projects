(function() {
  let obj = {
    firstName: 'Mohamed',
    lastName: 'Hassan',
    age: 27
  }

  let arr = [];

  for (let x in obj) {
    arr.push([x, obj[x]])
  }
  console.log(arr)

}());
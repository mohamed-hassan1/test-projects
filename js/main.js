(function() {
  let arr = [
    {id: 1, name: 'Mohamed'},
    {id: 5, name: 'Hassan'},
    {id: 8, name: 'Mostafa'}
  ];

  let ids = arr.map(user => user.id);
  console.log(ids)

}());
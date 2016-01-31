app.controller('groceryController', [groceryController]);
// Change Me

function groceryController() {
  var vm = this;
  vm.title = 'Angular Template';
  vm.groceries = [{name: 'Apples', quantity: 4}, {name: 'Oranges', quantity: 5}];
}

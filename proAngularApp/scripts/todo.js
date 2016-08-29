var todoApp = angular.module("todoApp", []);
todoApp.controller('todoController', ['$scope', function($scope){
	var model = {
		user: "Adam",
		items: [{ action: "Buy Flowers", done: false },
		{ action: "Get Shoes", done: false },
		{ action: "Collect Tickets", done: true },
		{ action: "Call Joe", done: false }]
	};

	$scope.todo = {};	
	$scope.todo.model = model;

	$scope.todo.incompleteCount = function () {
		var count = 0;
		angular.forEach($scope.todo.model.items, function (item) {
			if (!item.done) { count++ }
		});
		return count;
	}

	$scope.todo.warningLevel = function () {
		return $scope.todo.incompleteCount() < 3 ? "label-success" : "label-warning";
	}

	$scope.todo.addNewItem = function (actionText) {
		$scope.todo.model.items.push({ action: actionText, done: false });
	}
}]);
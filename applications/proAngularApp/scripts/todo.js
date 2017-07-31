var todoApp = angular.module('todoApp', ['ngResource']);
todoApp.controller('todoController', ['$scope','todoService', function($scope, todoService){
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

	$scope.todo.performHttp = function() {
		var params = {
			userId : 'Lmc3Ydm4pi'
		}
		var promise = todoService.performGet(params);
		promise.then(getSuccess, error);
	}

	function getSuccess(getResponse) {
		if(!!getResponse && _.isArray(getResponse)) {
			// console.log('sample input length is ' + getResponse.length);
			getChallengeInput();
		}
	}

	function getChallengeInput() {
		var promise = todoService.performChallengeGet();
		promise.then(getChallengeSuccess, error);	
	}

	function getChallengeSuccess(response) {
		if(!!response && _.isArray(response)) {
			console.log('input length is ' + response.length);
			postChallengeOutput(response.length);
		}
	}

	function postChallengeOutput(count) {
		var data = {
			'count': count
		}
		var promise = todoService.performChallengePost(data);
		promise.then(postChallengeSuccess, error);	
	}

	function postChallengeSuccess(response) {
		// if(!!response && _.isArray(response)) {
			console.log('post challenge is successful');
			// getChallengeInput();
		// }
	}

	function error(error) {
		console.log(error);
	}
}]);
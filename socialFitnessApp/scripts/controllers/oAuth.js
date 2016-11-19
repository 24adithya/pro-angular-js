var socialFitnessApp = angular.module("socialFitnessApp", []);
socialFitnessApp.controller('oAuthController', ['$scope', '$window', function($scope, $window){
	console.log('Inside oAuth controller');

	/*$scope.onSignIn = function(googleUser) {
	// function onSignIn(googleUser) {
		console.log('Inside onGoogleSignIn');
		console.log(googleUser);

	  var profile = googleUser.getBasicProfile();
	  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
	  console.log('Name: ' + profile.getName());
	  console.log('Image URL: ' + profile.getImageUrl());
	  console.log('Email: ' + profile.getEmail());
	}*/

	$window.onSignIn = function(googleUser) {
	// function onSignIn(googleUser) {
		console.log('Inside onGoogleSignIn');
		console.log(googleUser);

	  var profile = googleUser.getBasicProfile();
	  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
	  console.log('Name: ' + profile.getName());
	  console.log('Image URL: ' + profile.getImageUrl());
	  console.log('Email: ' + profile.getEmail());
	}

	$scope.onNormalSignIn = function() {
		console.log('Inside onSignIn');
		// console.log(googleUser);
	}

	//window.onSignIn = $scope.onSignIn;
}]);
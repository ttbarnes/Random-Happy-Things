'use strict';

angular.module('randomHappyThingsApp')
  .controller('MainCtrl', function ($http, $scope) {

	$http.get('/data/smileyFace.json').success(function(data){
	  $scope.happyThings = data;
	});

	$scope.itemName = false; //default state, 'select something, dude'

	$scope.tempMessage = 'bingo asdflkjasdflkjasdlfkas';

	$scope.activateItem = function (itemName){ //LH COL item selection
		console.log('Activated:', itemName);
		$scope.itemName = itemName;

		$scope.itemTemplate = function(url) { //return the item view template
			url = 'views/items/' + itemName + '.html';
			return url;
		};


	};
	$scope.activateItem('Smile'); //default item

});

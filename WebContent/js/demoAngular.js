var app = angular.module("myapp",[]);

app.controller("ctrl", function($scope){
	
	$scope.customers =[
		{name: 'Daniel Santos', city: 'Milan' },
		{name: 'Lorenzo Nosotti', city: 'Milan'},
		{name: 'Marco Chiappini', city: 'Milan'},
		{name: 'Mario', city: 'Napoli'}
		];
	
})
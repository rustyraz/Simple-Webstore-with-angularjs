(function(){
	var storeapp = angular.module('itemFilters',[]);
	storeapp.filter('checkAvailability', function(){
		return function(input){
			return input ? '\u2713' : '\u2718';
		}
	});

	storeapp.filter('hasDiscount',function(){
		return function(input){
			return input ? '\u2713' : '\u2718';
		}
	});
})();
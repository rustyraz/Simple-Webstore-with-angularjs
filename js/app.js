(function(){
	var storeapp = angular.module('store',[
		'ngRoute',
		'store-products',
		'itemFilters',
		'productServices',
		'itemAnimations'
	]);

	storeapp.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when('/',{
			templateUrl : 'templates/items-list.html',
			controller : 'ProductsController'
		})
		.when('/item/:itemId',{
			templateUrl : 'templates/item-details.html',
			controller : 'ProductDetailsController'
		})
		.when('/login/:loginId',{
			templateUrl : 'templates/loginSingle.html'
		})
		.otherwise({redirectTo:'/'});
	}]);

})();
(function(){
	var productServices = angular.module('productServices',['ngResource']);

	productServices.factory('Item',['$resource',
		function($resource){
			return $resource(
				'http://localhost/2015/angular_login/products_jsonapi.php',{},
				{
					query: {method:'GET',params:{get:'all'},isArray:true}
				}
			);
		}
	]);
})();
(function(){
	var storeapp = angular.module('store-products',[]);

	function ProductsController($scope,Item){
		$scope.products = [];
		$scope.products = Item.query();
		
		$scope.orderByProperty = '';
	}
	storeapp.controller('ProductsController',['$scope','Item',ProductsController]);

	function ProductDetailsController($scope,$routeParams,Item){
		$scope.item = [];
		$scope.item = Item.query({get:'single_item',id: $routeParams.itemId},function(item){
			$scope.item[0].available = true;
			$scope.item[0].hasDiscount = false;
			$scope.mainImageUrl = item[0].main_image;
		});

		$scope.setImage = function(imageUrl){
			$scope.mainImageUrl = imageUrl;
		};
	}
	storeapp.controller('ProductDetailsController',['$scope','$routeParams','Item', ProductDetailsController]);

	/*function ProductsController($scope,$http){
		$scope.products = [];
		$http.get('http://localhost/2015/angular_login/products_jsonapi.php?get=all')
		.success(function(data){
			$scope.products = data;
			console.log(data);
		});

		$scope.orderByProperty = '';
	}	
	storeapp.controller('ProductsController',['$scope','$http', ProductsController]);

	function ProductDetailsController ($scope,$http,$routeParams){
		$scope.itemId = $routeParams.itemId;
		$scope.item = [];
		$http.get('http://localhost/2015/angular_login/products_jsonapi.php?get=single_item&id='+$routeParams.itemId)
		.success(function(data){
			$scope.item = data;
			$scope.item[0].available = true;
			$scope.item[0].hasDiscount = false;
			$scope.mainImageUrl = data[0].main_image;
			console.log(data);
		});

		$scope.setImage = function(imageUrl){
			$scope.mainImageUrl = imageUrl;
		}
	}
	storeapp.controller('ProductDetailsController',['$scope','$http','$routeParams',ProductDetailsController]);

	*/


})();
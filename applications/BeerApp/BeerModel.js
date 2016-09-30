angular.module( 'BeerApp', ['ngRoute', 'kendo.directives' ] );
angular.module( 'BeerApp' ).config( ['$routeProvider', function( $routeProvider ) {
	console.log( $routeProvider );

	$routeProvider.
        when('/beerEntry', {
        	controller : 'BeerEntryForm',
          templateUrl: 'partials/beerEntry.html'
        }).
        when('/checkout', {
          templateUrl: 'partials/checkout.html'
        }).
        when('/success', {
          templateUrl: 'partials/success.html'
        }).
        when('/kendoGrid', {
          controller: 'MyCtrl',	
          templateUrl: 'partials/kendoGrid.html'
        }).
        when('/kendoGridCustomized', {
          controller: 'kendoCtrl',	
          templateUrl: 'partials/kendoGridCustomized.html'
        }).
        otherwise('/beerEntry');

} ]);
angular.module( 'BeerApp' ).run( ['$route', 'BeerEntryService', function( $routeProvider, BeerEntryServiceProvider ) {
	console.log( BeerEntryServiceProvider );
} ])

angular.module( 'BeerApp' ).controller( 'BeerEntryForm', 
	function( $scope , BeerEntryService) {
		
	
	var promise =  BeerEntryService.getBeerModel();
 	var success = function( response ) {
			$scope.bm = response.data;
	   };

	   var failure = function() {
		
	   }

	promise.then( success , failure );
	$scope.checkInventory = function(){
		alert("we are out of stock for " + beerModel.beerType + " ---- " + $scope.quantity);
	}
	$scope.findPrice = function (){
		var selectedBrand = $scope.bm.brandName;
		$scope.bm.price = BeerEntryService.fetchPrice();
	}
	}
)

angular.module('BeerApp')
        .controller('kendoCtrl', function($scope){

        	var mainGridData = [{
										"FirstName": "Adithya",
										"LastName": "Narayan",
										"Country": "India",
										"City": "Pune",
										"Title": "Adams"
									}, {
										"FirstName": "Bharat",
										"LastName": "Bonde",
										"Country": "USA",
										"City": "New Jersey",
										"Title": "Bond"
									}];

            $scope.mainGridOptions = {
                dataSource: [{
										FirstName: "Adithya",
										LastName: "Narayan",
										Country: "India",
										City: "Pune",
										Title: "Adams"
									}, {
										FirstName: "Bharat",
										LastName: "Bonde",
										Country: "USA",
										City: "New Jersey",
										Title: "Bond"
									}],
                sortable: true,
                columns: [{
                    field: "FirstName",
                    title: "First Name",
                    width: "120px"
                    },{
                    field: "LastName",
                    title: "Last Name",
                    width: "120px"
                    },{
                    field: "Country",
                    width: "120px"
                    },{
                    field: "City",
                    width: "120px"
                    },{
                    field: "Title"
                }]
            };
        })

angular.module('BeerApp')
        .controller('MyCtrl', function($scope){
            $scope.mainGridOptions = {
                dataSource: {
                    type: "odata",
                    transport: {
                        read: "//demos.telerik.com/kendo-ui/service/Northwind.svc/Employees"
                    },
                    pageSize: 5,
                    serverPaging: true,
                    serverSorting: true
                },
                sortable: true,
                pageable: true,
                dataBound: function() {
                    this.expandRow(this.tbody.find("tr.k-master-row").first());
                },
                columns: [{
                    field: "FirstName",
                    title: "First Name",
                    width: "120px"
                    },{
                    field: "LastName",
                    title: "Last Name",
                    width: "120px"
                    },{
                    field: "Country",
                    width: "120px"
                    },{
                    field: "City",
                    width: "120px"
                    },{
                    field: "Title"
                }]
            };

            $scope.detailGridOptions = function(dataItem) {
                return {
                    dataSource: {
                        type: "odata",
                        transport: {
                            read: "//demos.telerik.com/kendo-ui/service/Northwind.svc/Orders"
                        },
                        serverPaging: true,
                        serverSorting: true,
                        serverFiltering: true,
                        pageSize: 5,
                        filter: { field: "EmployeeID", operator: "eq", value: dataItem.EmployeeID }
                    },
                    scrollable: false,
                    sortable: true,
                    pageable: true,
                    columns: [
                    { field: "OrderID", title:"ID", width: "56px" },
                    { field: "ShipCountry", title:"Ship Country", width: "110px" },
                    { field: "ShipAddress", title:"Ship Address" },
                    { field: "ShipName", title: "Ship Name", width: "190px" }
                    ]
                };
            };
        })

var appmodule = angular.module( 'BeerApp');
appmodule.directive("beerDirective", function(){

	return {
		restrict:'A',
		link:function($scope,element,attrs){
			element.on('change',function(){
				console.log( attrs );
				$scope.$apply( function() {
					$scope[attrs.beerDirective] = element.val();	
				})				
			})

			$scope.$watch(attrs.beerDirective, function(){
				console.log( "Change on Scope var : ", arguments );
			})
		}

	};
})
var appmodule = angular.module( 'BeerApp');

appmodule.service('BeerEntryService', ['$http', 
    function( $http ){
      
        return {
            getBeerModel:function (){
               return $http( { method: 'GET', url: '/applications/BeerApp/BeerModel.json'} );           
            },
            fetchPrice:function(brandName){
                return 10;
            }
        };
    }
])
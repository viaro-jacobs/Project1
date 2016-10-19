(function(){
	'use strict';
	
	angular
		.module("app")
		.directive('appTables', appTables);

	function appTables() { 
		var directive = { 
		    restrict: 'E', 
		    scope: { 
		      info: '=' 
		    }, 
		    templateUrl: 'js/tables/appTables.html',
			controller: 'TablesController',
		    controllerAs: 'object',
		    bindToController: true 
		};
		
	  	return directive; 
	}
})();
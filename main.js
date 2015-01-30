angular.module('myApp', []).
	directive('makeEditable', function($sce) {
		return {
			restrict: 'E',
			templateUrl: 'edit-text.html',
			transclude: true,
			replace: true,
			scope: true,
			link: function(scope, element, attrs){
				scope.editable = false;
				scope.toggleEdit = function(){
					scope.editable = !scope.editable;
				};
			}	
		}
	});

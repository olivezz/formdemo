(function () {
    'use strict';
    var app = angular.module('demo', ['shared.modules.alert', 'shared.modules.exception'
    ]);

    // Directive to prvent user to exceed limit
    app.directive("limitTo", [function() {
        return {
            restrict: "A",
            link: function(scope, elem, attrs) {
                var limit = parseInt(attrs.limitTo);
                angular.element(elem).on("keypress", function(e) {
                    if (this.value.length == limit) {
                        e.preventDefault();

                        //When user reach limit jump to next input
                        var $nextElement = elem.next();
                        if($nextElement.length) {
                            $nextElement[0].focus();
                        }
                    }
                });
            }
        }
    }]);


})();

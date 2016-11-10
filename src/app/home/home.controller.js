(function () {
    'use strict';

    angular.module('demo').controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['alerting', '$scope'];
    /* @ngInject */
    function HomeCtrl(alerting,$scope) {
        /* jshint validthis: true */

        $scope.submit = submit;

        function submit() {
            if($scope.myform.$valid) {
                alerting.success('Form success');
            }

        }


    }
})();

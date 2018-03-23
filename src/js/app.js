(function(){

    var app = angular.module('myApp', []);

    app.controller('appController', function($scope){

        $scope.text = "test";

        $scope.list = [
            {
                firstName: "Stefan",
                lastName: "Wapnick"
            },
            {
                firstName: "Goutham",
                lastName: "G"
            }
        ];

        $scope.onButtonClick = function(){
            $scope.list.push({
                firstName: "Goutham",
                lastName: "G"
            });
        };
    });

})();
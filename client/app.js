
var app = angular.module('app', ['ngAnimate']);



app.controller("MainController", ['$scope', '$http', function($scope, $http){

    //console.log("ARE WE WORKING!!!!!?!??!?!?!?!!?!?");

    $scope.everyoneList = [];
    $scope.repList = [];
    $scope.demList = [];

    $scope.winner = [];

    $scope.candidates = function(){
      $scope.showList = true;
    };

    $scope.pickWinner = function(){

        var repOrDem = findWinningNumber(0,1);

            console.log(repOrDem);

        var candidateIndex = findWinningNumber(0,4);

            console.log(candidateIndex);
        if(repOrDem === 0){
            $scope.winner = $scope.repList[candidateIndex];
        }else {
            $scope.winner = $scope.demList[candidateIndex];
        }

        console.log($scope.winner);






    };


        var democratData = function () {
            //console.log("we are getting dem data?");

            $http.get('/getDemData').then(function (response) {
                console.log("we are getting dem data");
                console.log(response.data);
                //var data = response.data;
                $scope.demList = response.data;
                $scope.everyoneList = response.data;
                //return response.data;
            })

        };



        democratData();
        //$scope.demList = democratData();


        var iterator = 0;
        var repubData = function () {
            //console.log("we are getting dem data?");

            $http.get('/getRepubData').then(function (response) {
                console.log("we are getting repub data");
                $scope.repList = response.data;
                //console.log(response.data);
                //var data = response.data;
                return response.data;


            })

        };

        repubData();


    function findWinningNumber (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }






}]);

//console.log("are there things happneing??");


var simCtrl = function($scope) {
    $scope.parliament = [
        {'name': 'a', 'seats': 1, inCoalition: false},
        {'name': 'b', 'seats': 2, inCoalition: true},
        {'name': 'c', 'seats': 3, inCoalition: false},
        {'name': 'd', 'seats': 4, inCoalition: true}
    ];

    $scope.sum = function(items, prop, predicate){
        //returns the sum of 'prop' property of list of 'items', when the 'predicate' property is true.
        //when 'predicate' in undefined, the sum is over all the 'prop' of 'items'.
        return items.reduce( function(a, b){
            if (predicate == undefined || b[predicate]) {
                return a + parseInt(b[prop]);
            }
            else {
                return a;
            }
        }, 0);
    };

    $scope.addParty = function() {
        var elem = {'name': $scope.newPartyName, 'seats': $scope.newPartySeats, inCoalition: false};
        $scope.parliament.push(elem);
    };

    $scope.barColor = function() {
        if ($scope.coalitionPercentage > 0.5) {
            return 'navy';
        }
        return 'darkred';
    }

    $scope.$watch('parliament', function(newValue, oldValue){
        $scope.parliamentSize = $scope.sum($scope.parliament, 'seats');
        $scope.coalitionPercentage = $scope.sum($scope.parliament, 'seats', 'inCoalition') / $scope.parliamentSize;
    }, true);
};

var simApp = angular.module('simApp', []);
simApp.controller('simulatorController', ['$scope', simCtrl]);

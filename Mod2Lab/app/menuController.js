app.controller('menuController',['$scope',
function($scope){

    $scope.model={title:'Our Menu'};
    $scope.mainDish={name:'',price:''};
    $scope.changeMainDish=function(item,price){
        $scope.mainDish.name=item;
        $scope.mainDish.price=price;
    };

    $scope.$watch('model.mainDish',function(newValue,oldValue){
        if(newValue=='BBQ Chicken Pizza'){
            alert('You have selected the BBQ Chicken Pizza!');
        }
    });
}]);
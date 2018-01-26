app.controller(
'menuController',['$scope',

function($scope){
    $scope.model={title:"Tandoori Fresh Menu"};
    $scope.menuItems=[
        {name:'Tandoori Naan',price:1.50,category:'Breads',img:"./images/tn.png"},
        {name:'Garlic Naan',price:1.75,category:'Breads',img:"./images/gn.png"},
        {name:'Malai Kofta',price:9.99,category:'Curries',img:"./images/mk.png"},
        {name:'Dal Makhni',price:9.99,category:'Curries',img:"./images/dl.png"},
        {name:'Rajma Masala',price:9.99,category:'Curries',img:"./images/rm.jpg"},
        {name:'Paneer Makhni',price:9.99,category:'Curries',img:"./images/pm.png"}


    ];
    $scope.orderItems=[];

    $scope.addItem=function(item){
        $scope.orderItems.push(item);
        item.quantity=1;
        calculateTotal();

    }

    $scope.removeItem=function(item){
        item.quantity=0;
        var index=$scope.orderItems.indexOf(item);
        $scope.orderItems.splice(index,1);
        calculateTotal();

    }

    $scope.model.totalNoTax=0;
    $scope.model.taxAmount=0;
    $scope.model.totalWithTax=0;
    
    
    function calculateTotal(){
        $scope.model.totalNoTax=0;
        $scope.model.totalWithTax=0;
        $scope.model.taxAmount=0;
        $scope.orderItems.forEach(item => {
           // console.log(item.name+"  "+item.price+"   "+item.quantity+"  "+(item.price * item.quantity));
            $scope.model.totalNoTax=$scope.model.totalNoTax+(item.price * item.quantity);
        });

        $scope.model.taxAmount=0.13*$scope.model.totalNoTax
        $scope.model.totalWithTax=$scope.model.taxAmount+$scope.model.totalNoTax;

    }




}]);
var app = angular.module('myApp', []);
app.controller('product', function () {
});

//Header Page directive
app.directive('headerPage', function () {
    return {
        restrict: 'E',
        templateUrl: 'header.html'
    };
});

//Menu page directive
app.directive('menuPage', function () {
    return {
        restrict: 'E',
        templateUrl: 'menu.html'
    };
});

//Footer Page directive
app.directive('footerPage', function () {
    return {
        restrict: 'E',
        templateUrl: 'footer.html'
    };
});


//body page directive
app.directive('bodyPage', function () {
    return {
        restrict: 'E',
        templateUrl: 'content.html',
        controller: function ($scope) {
            $scope.item = [
                {
                    'id': '1',
                    'person_name': 'Mustafiz',
                    'product_name': 'Laptop',
                    'quantity': '1'
                },
                {
                    'id': '2',
                    'person_name': 'Rahman',
                    'product_name': 'Desktop',
                    'quantity': '1'
                },
                {
                    'id': '3',
                    'person_name': 'Mahfuz',
                    'product_name': 'Tab',
                    'quantity': '2'
                },
                {
                    'id': '4',
                    'person_name': 'Ratul',
                    'product_name': 'Mobile',
                    'quantity': '1'
                }

            ];

            $scope.addData = function () {
                var id = $scope.item.length + 1;
                $scope.item.push({
                    id: id,
                    person_name: $scope.person_name,
                    product_name: $scope.product_name,
                    quantity: $scope.quantity
                });

                $scope.id = "";
                $scope.person_name = "";
                $scope.product_name = "";
                $scope.quantity = "";

            };

            $scope.selectData = function (id) {
                var product = $scope.item[id - 1];

                $scope.id = product.id;
                $scope.person_name = product.person_name;
                $scope.product_name = product.product_name;
                $scope.quantity = product.quantity;

            };


            $scope.updateData = function (id) {

                if (id == null) {
                    alert("You didn't select an item")
                }
                else {
                    var index = id - 1;
                    $scope.item[index].person_name = $scope.person_name;
                    $scope.item[index].product_name = $scope.product_name;
                    $scope.item[index].quantity = $scope.quantity;
                }

                $scope.id = "";
                $scope.person_name = "";
                $scope.product_name = "";
                $scope.quantity = "";

            };

            $scope.deleteData = function (id) {
                var result = confirm("Want to delete it?")
                if (result == true) {
                    var index = id - 1;
                    $scope.item.splice(index, 1);
                }
                else {
                    return false;
                }

            }
        },
        controllerAs: 'tableData'

    };


});
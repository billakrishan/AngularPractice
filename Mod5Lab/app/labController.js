app.controller('labController', [
    '$scope', 'registration',
    function ($scope, registration) {
        $scope.reset = reset;
        $scope.submit = submit;
        reset();
        function reset() {
            $scope.model = {};
        }
        function submit(model) {
            registration.submit(model).$promise
                .then(function (response) {
                    alert('success');
                }, function (error) {
                    alert('error');
                });

        }

    }
]);
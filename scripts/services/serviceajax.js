app.factory('serviceAjax', ['$http',  function($http) {
    return {
        lastFiveUserSignUp: function(){
            const req = $http.get("http://localhost/watch/web/five-users.php");
            return req;
            //return 
        }
    }
}]);
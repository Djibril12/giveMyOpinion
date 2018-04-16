angular.module('myOpinion')
.factory('serviceAjax', ['$http',  function($http) {
  return {
      lastFiveUserSignUp : function(){
        return $http.get("http://localhost/watch/web/five-users.php");
      },
      fiveMostPopular : function(){
        return $http.get("https://api.themoviedb.org/3/movie/popular?api_key=c6e5ecd7264efb34574c10cf8b8c1f68&language=en-US&page=1");
      }
  }
}])
.controller('MainCtrl', ['$scope', 'serviceAjax', function ($scope, serviceAjax) {
 
  $scope.message = function(){
    return "AngularJS";
  } 
  
  var getRecentUsers = function(){
    serviceAjax.lastFiveUserSignUp()
      .then(function (response) {
        $scope.users = response.data;
       // console.log($scope.users);      
    });
  }
  
  var getMostPopular = function(){
    $scope.mostPopular = [];
    serviceAjax.fiveMostPopular()
      .then(function (response) {
        /*for (const element of response.data.results) {
          console.log(element)
          for (let index = 0; index < 5; index++) {
            const element = array[index];
            
          }
        }*/
        
        let firstMostPopular = response.data.results;
        //  console.log(firstMostPopular);
        firstMostPopular.forEach(function(element, index ) {
        //  console.log(index);
          if(index > 0 && index <= 4 )
          {
            $scope.mostPopular.push(element);
          }
        });
        console.log($scope.mostPopular);
    });
  }
  
  getRecentUsers();
  getMostPopular();
  

}]);


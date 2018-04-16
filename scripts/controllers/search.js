angular.module('myOpinion')
.controller('SearchCtrl', function ($scope, $http) {
 
    $scope.message = function(){
      return "Vive AngularJS";
    } 
    
    $scope.getFilms = function(){

      $http({
          method : "GET",
          url : "https://api.themoviedb.org/3/discover/movie?api_key=c6e5ecd7264efb34574c10cf8b8c1f68"
        }).then(function mySucces(response) {
            
            console.log(response.data)
            $scope.films = response.data.results;
            

          }, function myError(response) {
            alert('error');
              
        });

  }
  $scope.getSeries = function(){

      $http({
          method : "GET",
          url : "https://api.themoviedb.org/3/discover/tv?api_key=c6e5ecd7264efb34574c10cf8b8c1f68"
        }).then(function mySucces(response) {
            
            console.log(response.data)
             $scope.films = response.data.results;
            

          }, function myError(response) {
            alert('error');
              
        });

  }
  });

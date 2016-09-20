angular.module("photoBrowser", [])
    .service("imageService", function ($http) {
        return {
            getImage: function () {
                return $http.get("photos.json", { responseType: "json" });
            }
        }
    })
    .controller("photoList", function ($scope, imageService) {
        $scope.message = "Hola ASP.NET MVC & Angular.JS"
        imageService.getImage().success(function (result) {
            $scope.images = result;
        })
    })
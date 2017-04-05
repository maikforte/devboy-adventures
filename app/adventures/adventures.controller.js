angular.module("AdventuresModule")

.controller("AdventuresController", function($scope, $mdDialog, AdventuresService) {
    
    $scope.init = function() {
        $scope.comicList = [];
        $scope.isLoading = true;
        
        AdventuresService.listComics().then(
            function(successResponse) {
                $scope.comicList = successResponse.data;
                for(i = 0; i < $scope.comicList.length; i++ ) {
                    if (i == 0) {
                        $scope.comicList[i].size = 2;
                    } else {
                        $scope.comicList[i].size = 1;  
                    }
                };
                $scope.isLoading = false;
            }, function(errorResponse) {
                console.log(errorResponse);
            }
        );
    };
    
    $scope.previewComics = function(ev, selectedComic) {
        AdventuresService.selectedComic = selectedComic;
        
        $mdDialog.show({
          controller: "DialogController",
          templateUrl: "./views/template/previewComics.tmpl.html",
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true,
          fullscreen: true
        });
    };
    
    $scope.init();
})

.controller("DialogController", function($scope, AdventuresService) {
    $scope.selectedComic = AdventuresService.selectedComic;
    console.log($scope.selectedComic);
    $scope.message = "TEST";
});
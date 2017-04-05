angular.module("AdventuresModule")

.service("AdventuresService", function(HTTPService, $http) {
    this.selectedComic = null;
    
    this.listComics = function() {
        return HTTPService.get("/adventure-comics", null);
    };
});
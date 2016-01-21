//var client = new ZeroClipboard( document.getElementById("copy-button"));
//
//client.on("ready", function( readyEvent ){
//  client.on("aftercopy", function( event ){
//    event.target.style.display = "one";
//    alert("Copied text to clipboard: " + event.data["text/plain"]);
//  });
//});
var appClip = angular.module('appClip', ['ngClipboard']);

appClip.config(['ngClipProvider', function(ngClipProvider){
  ngClipProvider.setPath("zeroclipboard/dist/ZeroClipboard.swf");
}]);

appClip.controller('Ctrl', function($scope, $http, $filter){
  $scope.current = "current text";
  //$scope.data = [
  //  {
  //    "email":"wazenseisho2013@yahoo.co.jp",
  //    "password":"foobar",
  //    "postcode":"891-0105"
  //  },
  //  {
  //    "email":"wazenseisho@yahoo.co.jp",
  //    "password":"foobar",
  //    "postcode":"891-0105"
  //  }
  //];

  $http.get('account.json').success(function(data){
    $scope.data = data;
  });

  $scope.fallback = function(copy){
    window.prompt('Press cmd+c to copy the text below.', copy);
  };

  $scope.showMessage = function(){
    console.log("clip-click work");
  };

  $scope.showText = function(index, text){
    $scope.current = index + " " +text;
  };
  $scope.showHyphen = function(index, text){
    $scope.current = index + " " + $filter('hyphen')(text);

  };
  $scope.getHyphen = function(text){
    return $filter('hyphen')(text);
  };
}).filter('hyphen', function(){
  return function(input){
    var a = input.slice(0,3);
    var b = input.slice(3,7);
    return a + "-" + b;
  };
});



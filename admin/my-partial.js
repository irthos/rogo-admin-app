var adolfCtrl = function ($scope, service) {
    $scope.wordListObject = service.data.wordListObject;
    $scope.wordListArray = service.data.wordListArray;
    $scope.textObj = service.data.textObj;
    $scope.documentation = service.data.documentation;
    $scope.wordSave = service.api.wordSave;
    $scope.remove = service.api.remove;
    $scope.update = service.api.update;
    $scope.new = {name:'New Word', meanings:['meaning 1','meaning 2']};
    $scope.wordListObject.$bindTo($scope,'data');
    $scope.textObj.$bindTo($scope,'text');
    $scope.documentation.$bindTo($scope,'docs');
};

angular.module('rogoadmin').controller('MyPartialCtrl', adolfCtrl);

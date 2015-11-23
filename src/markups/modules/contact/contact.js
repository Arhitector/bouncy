var contactModel = "../src/markups/modules/contact/contact.json";

bouncyApp.controller("contactCtrl", function ($scope, jsonLoader) {
	jsonLoader(contactModel).then(function (data) {
		$scope.contacteData = data;
		$scope.model = data;
	});
});
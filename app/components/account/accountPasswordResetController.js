(function () {
    "use strict";
    
    coreLegacy.controller("AccountPasswordResetController", ["ApiService", "IdentityService", function(ApiService, IdentityService) {
        let vm = this;
        vm.ErrorMessages = [];
        vm.User = IdentityService.CurrentUser();
        
        vm.LogOut = function() {
            vm.ErrorMessages = [];
            let request = ApiService.SendRequest("logout", null, "GET");
            vm.Loading = true;
            request.Then(
                function(data){
                    vm.Loading = false;
                    IdentityService.ClearUser();
                    // ApiService will redirect
                },
                function (data, status) {
                    vm.Loading = false;
                    vm.ErrorMessages.push("Failed to log out. Try again.");
                }
            );
        }
        
    }]);
    
})(coreLegacy);
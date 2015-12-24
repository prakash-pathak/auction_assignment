auctionApp
    .service('CustomerAuthService', ['$http', function($http) {
        var response = {
            isSuccess: false,
            email: null
        };
        this.loginUser = function(username, pwd) {
            var allUsers = [{
                username: "1",
                email: "prakash",
                pwd: "1"
            }, {
                email: "akash",
                username: "2",
                pwd: "2"
            }, {
                username: "3",
                pwd: "3",
                email: "test user"
            }];
            var reqUser = null;
            allUsers.forEach(function(user) {
                console.log(user.username);
                if (username === user.username) {
                    reqUser = user;
                    return true;
                }
            });
            if (reqUser && reqUser.pwd === pwd) {
                response.email = reqUser.email;
                response.isSuccess = true;
            } 
            return response;
        };
    }]);

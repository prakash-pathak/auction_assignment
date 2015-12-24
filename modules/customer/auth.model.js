auctionApp
    .factory('customerAuth', function() {
        var customer = {
            authToken: null,
            fName: null,
            lName: null,
            message:null
        };

        customer.getAuthToken = function() {
            return this.authToken;
        };
        customer.setAuthToken = function(token) {
            this.authToken = token;
        };
        customer.getAuthMessage = function() {
            return this.message;
        };
        customer.setAuthMessage = function(message) {
            this.message = message;
        };
        return customer;
    });

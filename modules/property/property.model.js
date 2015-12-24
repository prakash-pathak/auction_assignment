auctionApp
    .factory('PropertyModel', function() {
        var property = function(sizeUnit, listerName) {
            this.isSelected = false;
            this.bathroom_number = null;
            this.bedroom_number = null;
            this.img_url = null;
            this.keywords = null;
            this.lister_name = null;
            this.listing_type = null;
            this.price = null;
            this.price_currency = null;
            this.price_formatted = null;
            this.property_type = null;
            this.size = null;
            this.summary = null;
            this.size_unit = null;
            this.title = null;
            this.thumb_url = null;
            this.updated_in_days_formatted = null;
            this.construction_year = null
        };

        property.prototype.setListerName = function(lister_name) {
            this.lister_name = lister_name;
        };
        property.prototype.getTitle = function() {
            return this.title;
        };
        property.prototype.setTitle = function(title) {
            this.title = title;
        };
        property.prototype.getSelected = function() {
            return this.isSelected;
        };
        property.prototype.setSelected = function(isSelected) {
            this.isSelected = isSelected;
        };
        property.prototype.getThumbUrl = function() {
            return this.thumb_url;
        };
        property.prototype.setThumbUrl = function(url) {
            this.thumb_url = url;
        };

        property.prototype.getPriceFormatted = function() {
            return this.price_formatted;
        };

        property.prototype.getImgUrl = function() {
            return this.img_url;
        };

        property.prototype.getSize = function() {
            return this.size;
        };

        property.prototype.getSizeUnit = function() {
            return this.size_unit;
        };
        property.prototype.getListerName = function() {
            return this.lister_name;
        };

        property.prototype.getKeywords = function() {
            return this.keywords;
        };
        property.prototype.getSummary = function() {
            return this.summary;
        };
        property.prototype.getBedroomNumber = function() {
            return this.bedroom_number;
        };
        property.prototype.getBathroomNumber = function() {
            return this.bathroom_number;
        };
        return property;
    });

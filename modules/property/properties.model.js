auctionApp
    .factory('PropertiesModel', function(PropertyModel) {
        var properties = function() {
            this.property = new PropertyModel();
            this.propertyList = [];
        };
        properties.prototype.map = function(properties) {
            this.propertyList = [];
            var self = this;
            properties.forEach(function(property) {
                var propertyModel = new PropertyModel();
                propertyModel.bathroom_number = property.bathroom_number;
                propertyModel.bedroom_number = property.bedroom_number;
                propertyModel.img_url = property.img_url;
                propertyModel.keywords = property.keywords;
                propertyModel.lister_name = property.lister_name;
                propertyModel.listing_type = property.listing_type;
                propertyModel.price = property.price;
                propertyModel.price_currency = property.price_currency;
                propertyModel.price_formatted = property.price_formatted;
                propertyModel.property_type = property.property_type;
                propertyModel.size = property.size;
                propertyModel.summary = property.summary;
                propertyModel.size_unit = property.size_unit;
                propertyModel.title = property.title;
                propertyModel.thumb_url = property.thumb_url;
                propertyModel.updated_in_days_formatted = property.updated_in_days_formatted;
                propertyModel.construction_year = property.construction_year;
                self.propertyList.push(propertyModel);
            });

        };
        properties.prototype.createOrUpdate = function(propertyModel) {
            if (!propertyModel.getSelected()) //insert new
                this.propertyList.push(propertyModel);
            else //update property
            {
                var selectedPropertyIndex = this.getSelectedIndex();
                if (selectedPropertyIndex)
                    this.propertyList[selectedPropertyIndex] = propertyModel;
            }
        };
        properties.prototype.resetSelected = function() {
            this.propertyList.forEach(function(p) {
                p.setSelected(false);
            });
        };
        properties.prototype.deleteThisProperty = function() {
            var selectedPropertyIndex = this.getSelectedIndex();
            console.log(selectedPropertyIndex);
            this.propertyList.splice(selectedPropertyIndex, 1);
        };
        properties.prototype.getSelected = function(disableFallback) {
            var selectedProperty = null;
            this.propertyList.forEach(function(p) {
                if (p.getSelected()) {
                    selectedProperty = p;
                    return true;
                }
            });
            if (!selectedProperty && !disableFallback) {
                return selectedProperty = this.propertyList[0];
            }
            return selectedProperty;
        };
        properties.prototype.getAllSelected = function(disableFallback) {
            var selectedProperty = [];
            this.propertyList.forEach(function(p) {
                if (p.getSelected()) {
                    selectedProperty.push(p);
                }
            });
            return selectedProperty;
        };
        properties.prototype.getSelectedIndex = function() {
            var selectedPropertyIndex = -1;
            this.propertyList.forEach(function(p, index) {
                if (p.getSelected()) {
                    selectedPropertyIndex = index;
                    return true;
                }
            });
            return selectedPropertyIndex;
        };
        properties.prototype.getAll = function() {
            return this.propertyList;
        };
        properties.prototype.searchProperty = function(keywords) {
            this.propertyList.forEach(function(p) {
                if(p.title.toLowerCase().indexOf(keywords) > -1 || p.summary.toLowerCase().indexOf(keywords) > -1 || p.keywords.toLowerCase().indexOf(keywords) > -1 )
                p.setSelected(true);
            });
        };
        return new properties;
    });

var React = require('react');

function runValidation(value, validations) {
    var validationResults = {
        all: true
    }

    validations.map(function(currentValidation) {
        switch (typeof currentValidation) {
            case 'string':
                validationString(value, currentValidation);
                break;
        }
    })

    function validationString(value, currentValidation) {
        var result = false;

        switch(currentValidation) {
            case 'email':
                result = !!value.match(/^[_A-z0-9-]+(?:\.[_A-z0-9-]+)*@[A-z0-9-]+(?:\.[A-z0-9-]+)*(?:\.[A-z]{2,12})$/);
                break;
            case 'url':
                result = !!value.match(/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i)
                break;
            case 'required':
                result = !!value;
                break;
            case 'number':
                return parseFloat(val) === 0 ? true : parseFloat(val) / val === 1;
                break;
            case 'positiveNumber':
                result = !!(parseFloat(value) > 0);
                break;
        }

        validationResults[currentValidation] = result;

        if(!result) validationResults.all = false;
    }

    return validationResults;
}

var StateValidationMixin = {

    validate: function(toValidate) {
        var validations = this.stateValidations();

        if(toValidate) {
            return runValidation(
                validations[toValidate].value,
                validations[toValidate].validations
            );
        } else {
            for(var currentValidation in validations) {
                if(validations.hasOwnProperty(currentValidation)) {
                    if( !runValidation(validations[currentValidation].value, validations[currentValidation].validations).all ) {
                        return false;
                    }
                }
            }
            return true;
        }
    }
};


module.exports = StateValidationMixin;

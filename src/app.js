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
            case 'required':
                result = !!value;
                break;
            case 'number':
                result = !!(typeof value === 'number');
                break;
            case 'positiveNumber':
                result = !!(parseInt(value, 10) > 0);
                break;
        }

        validationResults[currentValidation] = result;

        if(!result) validationResults.all = false; // this fails, so not EVERYone is valid.
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

# React State Validator

This is a state validator inspired in the React `propTypes` style.

# Installation

    npm install react-statevalidator

# Usage

    var stateValidatorMixin = require('react-statevalidator');

    /* ... /*

    mixins: ['stateValidatorMixin'];


add a `stateValidations` function to your component that returns an object with the desired validations.

Every property in this object must map to a property in the state of the current component.

The validations are arrays of strings describing the validations (see shortcuts below) or functions that receive the value to evaluate and must return `true` for valid and `false` for invalid.

Everything is valid until proven unvalid.


    stateValidations: function() {
        return {
            aNumber: [
                'number'
            ],
            anEmail: [
                'email',
                'required'
            ],
            thingLessThan10: [
                function(evaluate) {
                    return evaluate < 10
                }
            ],
            stringLessThan10: [
                function(evaluate) {
                    return evaluate.length < 10
                },
                'required'
            ]
        }
    }


And when you need to validate...


    this.getInvalidStates();


This returns an object with the INVALID values, like:

    {
        aNumber: true,
        stringLessThan10: tue
    }

Everything else is valid.
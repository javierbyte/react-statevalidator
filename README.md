# React State Validator

This is a state validator inspired in the React `propTypes` style. Everything is valid until proven unvalid.

# Installation

    npm install react-statevalidator

# Usage

    var stateValidator = require('react-statevalidator');

    /* ... /*

    mixins: ['stateValidator'];

    // set all your validation options
    stateValidations: function() {
        return {
            validateState: [
                'number'
            ],
            validateEmail: [
                'email',
                'required'
            ],
            lessThan10: [
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


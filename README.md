# React State Validator.

React state validation tool.

# Installation.

    npm install react-statevalidator --save

# Usage.

    var stateValidatorMixin = require('react-statevalidator');

    /* ... /*

    mixins: ['stateValidatorMixin'];

## Setting validation rules.

Add a `stateValidations` object to your component that returns an object with the desired validations (see bellow for available validation rules).

    stateValidations: {
        isNumberRequired: [
            this.state.aValue,
            [
                'number',
                'required'
            ]
        ],
        isEmail: [
            this.state.email,
            [
                'email'
            ]
        ],
        numberLessThan10: [
            this.state.aNumber,
            [
                'number'
            ]
        ],
        stringLargerThan20: [
            this.state.aString,
            [
                'string',
                'required'
            ]
        ]
    }

## Validating.

Example: validating the `isNumberRequired` rule we previously defined:

    this.validate('isNumberRequired');

Will return `true` if valid, or `false` is invalid.

Is we want to validate all, simple run `this.validate` without parameters:

    this.validate();

Will return `true` if ALL our rules are valid ones.

# Available validation rules.

`email`: The value is an email.
`number`: The value is strictly a number.
`positiveNumber`: The value evaluates to a positive number.
`required`: The value is there.

`all`: All the selected values are valid.

# Roadmap.

Allow custom function validations.
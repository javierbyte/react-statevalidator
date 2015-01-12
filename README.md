# React State Validator.

React state validation tool.

# Installation.

    npm install react-statevalidator --save

# Usage.

    var stateValidatorMixin = require('react-statevalidator');

    /* ... */

    mixins: ['stateValidatorMixin'];

## Setting validation rules.

Add a `stateValidations` function to your component that returns an object with the desired validations.

Each property must be an object with a `value` that is the state that we will evaluate, and `validations` wich is an array with the validation strings (see available validations below).

    stateValidations: function() {
        return {
            positiveNumber: {
                value: this.state.positiveNumber,
                validations: [
                    'positiveNumber',
                    'required'
                ]
            },
            requiredThing: {
                value: this.state.something,
                validations: [
                    'required'
                ]
            },
            validEmail: {
                value: this.state.email
                validations: [
                    'email'
                ]
            }
        }
    },


## Validating.

Example: validating the `positiveNumber` rule we previously defined:

    this.validate('positiveNumber');

Will return and `object` with the validation results.

    // for this.state.positiveNumber = 'a'
    {
        all: false,
        number: false,
        required: true
    }

    // for this.state.positiveNumber = 3
    {
        all: true,
        number: true,
        required: true
    }

If we want to validate all our rules in `stateValidations`, simple run `this.validate` without parameters:

    this.validate();

Will return `true` if ALL our rules are valid ones, otherwise, `false`. Note that this method currently don't return an object.

# Available validation rules.

* `email`: The value is an email.
* `number`: The value is strictly a number.
* `positiveNumber`: The value evaluates to a positive number.
* `required`: The value is there.
* `all`: All the rules in the object are valid. This rule is created automatically.

# Roadmap.

* Allow custom function validations.
* Tets.
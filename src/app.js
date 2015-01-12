var React = require('react');

var StateValidationMixin = {
    componentWillMount: function() {
        console.log('yeah! im creating a mixin')
    },

    componentWillUpdate: function() {
        console.log('');
        console.log('The current validation options are');
        console.log(this.stateValidations() );
        console.log('The current state is:');
        console.log(this.state)
    }
};


module.exports = StateValidationMixin;

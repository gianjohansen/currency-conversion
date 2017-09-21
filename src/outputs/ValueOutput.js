import React from 'react';

var ValueOutput = React.createClass({

  calculateValue: function() {

    // if we havent loaded rates yet
    if (!this.props.rates[this.props.currencies.from]) return null;

    // output conversion
    return this.props.totalInput * this.props.rates[this.props.currencies.from].rates[this.props.currencies.to];
    
  },

  render: function(){
    if (!this.props.currencies.from) return null;
    if (!this.props.currencies.to) return null;

    return (
      <div>
        <strong>Calculation:</strong> 
        {this.props.totalInput} from {this.props.currencies.from} to {this.props.currencies.to} = {this.calculateValue(this.props.totalInput)}
      </div>
    )
  }
});

export default ValueOutput;
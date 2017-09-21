import React from 'react';

var ValueOutput = React.createClass({

  calculateValue: function() {
    return this.props.totalInput * 1.2;
  },

  render: function(){
    return (
      <div>
          <strong>Calculation:</strong> {this.props.totalInput} from {this.props.currencyFrom} to {this.props.currencyTo} = {this.calculateValue(this.props.totalInput)}
      </div>
    )
  }
});

export default ValueOutput;
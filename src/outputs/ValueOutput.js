import React from 'react';

var ValueOutput = React.createClass({

  calculateValue: function() {
    return this.props.totalInput * 1.2;
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
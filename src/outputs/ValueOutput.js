import React from 'react';

require('../../www/assets/css/outputs/value-output.scss');
var NumberFormat = require('react-number-format');

var ValueOutput = React.createClass({

  calculateValue: function() {

    // if we havent loaded rates yet
    if (!this.props.rates[this.props.currencies.from]) return null;

    console.log("doing output conversion");
    console.log(this.props.totalInput);

    // output conversion
    return this.props.totalInput * this.props.rates[this.props.currencies.from].rates[this.props.currencies.to];
    
  },

  render: function(){
    return (
      <div className="value-output">
        <div className="value-output-inner">
          <span className="title">{this.props.currencies.from}</span>
          <span className="seperator">↓</span>
          <span className="value">
            <NumberFormat value={this.calculateValue(this.props.totalInput)} displayType={'text'} thousandSeparator={true} decimalPrecision={2}/>
            <span className="to">{this.props.currencies.to}</span>
          </span>
        </div>
      </div>
    )
  }
});

export default ValueOutput;
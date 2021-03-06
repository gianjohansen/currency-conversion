import React from 'react';

var OtherConversions = React.createClass({

  calculateValueByOffset: function() {

    // if we havent loaded rates yet
    if (!this.props.rates[this.props.currencies.from]) return null;
    
    // output conversion
    return this.props.totalInput / 10 * this.props.rates[this.props.currencies.from].rates[this.props.currencies.to];

  },

  render: function(){
    return (
      <div className={this.props.currencies.from == null || this.props.currencies.from == null ? "wait" : ""}>
        <strong>Other Conversions:</strong> {this.props.totalInput / 10}: {this.calculateValueByOffset(this.props.totalInput)}
      </div>
    )
  }
});

export default OtherConversions;
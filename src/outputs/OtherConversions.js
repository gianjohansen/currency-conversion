import React from 'react';

var OtherConversions = React.createClass({

  calculateValueByOffset: function() {
    return this.props.totalInput / 10 * 1.2;
  },

  render: function(){
    if (!this.props.currencies.from) return null;
    if (!this.props.currencies.to) return null;

    return (
      <div>
        <strong>Other Conversions:</strong> {this.props.totalInput / 10}: {this.calculateValueByOffset(this.props.totalInput)}
      </div>
    )
  }
});

export default OtherConversions;
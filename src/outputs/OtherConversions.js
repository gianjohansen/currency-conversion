import React from 'react';

var OtherConversions = React.createClass({

  calculateValueByOffset: function() {
    return this.props.totalInput / 10 * 1.2;
  },

  render: function(){
    return (
      <div>
          <strong>Other Conversions:</strong> {this.props.totalInput / 10}: {this.calculateValueByOffset(this.props.totalInput)}
      </div>
    )
  }
});

export default OtherConversions;
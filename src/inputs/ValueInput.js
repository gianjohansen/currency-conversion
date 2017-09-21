import React from 'react';

var ValueInput = React.createClass({
  render: function(){
    return (
      <form>
        <p>Enter a value:</p>
        <input type="text" value={this.props.totalInput} name="valueinput" onChange={this.props.setTotalInput} />
      </form>
    )
  }
});

export default ValueInput;
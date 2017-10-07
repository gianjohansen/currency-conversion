import React from 'react';
import ReactDOM from 'react-dom';
import Cleave from '../../node_modules/cleave.js/react';

require('../../www/assets/css/inputs/value-input.scss');

var ValueInput = React.createClass({
  componentDidMount(){
    $(".cleaveInput").focus();
  },

  onChange(event) {
    // formatted pretty value
    console.log(event.target.value);

    // raw value
    console.log(event.target.rawValue);
  },

  render: function(){
    return (
      <form className="value-input">
        <p>Enter a value:</p>
        <Cleave className='cleaveInput'
                options={{ numericOnly: true, numeral: true, numeralThousandsGroupStyle: 'thousand' }}
                onChange={this.props.setTotalInput} />
        {/* <input  type="text" value={this.props.totalInput} name="valueinput" onChange= /> */}
      </form>
    )
  }
});

export default ValueInput;
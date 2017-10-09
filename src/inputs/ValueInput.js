import React from 'react';
import ReactDOM from 'react-dom';
import Cleave from '../../node_modules/cleave.js/react';

require('../../www/assets/css/inputs/value-input.scss');

var ValueInput = React.createClass({
  componentDidMount(){
    setTimeout(function() {
      $(".value-input").css("opacity", "1");
      $(".cleaveInput").focus();
    }, 600);
  },

  onChange(event) {

    if (event.target.rawValue == "") {
      $(".currency-selectors").css("height", "0");
    }
    else {
      setTimeout(function() {
        $(".currency-selectors").css("height", $(".currency-selectors-inner").innerHeight());
      }, 200);
      setTimeout(function() {
        $(".currency-selectors").css("opacity", "1");
      }, 700);
    }
    
    this.props.setTotalInput(event.target.rawValue);
  },

  render: function(){
    return (
      <form className="value-input">
        <p>Enter a value:</p>
        <Cleave className='cleaveInput'
                options={{ numericOnly: true, numeral: true, numeralThousandsGroupStyle: 'thousand' }}
                onChange={this.onChange} />
        {/* <input  type="text" value={this.props.totalInput} name="valueinput" onChange= /> */}
      </form>
    )
  }
});

export default ValueInput;
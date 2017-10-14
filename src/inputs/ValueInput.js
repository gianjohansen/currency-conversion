import React from 'react';
import ReactDOM from 'react-dom';
import Cleave from '../../node_modules/cleave.js/react';

require('../../www/assets/css/inputs/value-input.scss');

var animationtimer;
var ValueInput = React.createClass({
  componentDidMount(){
    setTimeout(function() {
      $(".value-input").css("opacity", "1");
      $(".cleaveInput").focus();
    }, 600);
  },

  onChange(event) {

    // cancel previous animations
    clearTimeout(animationtimer);

    // show or hide next section
    if (event.target.rawValue == "") {
      $(".currency-selectors").css("height", "0");
      $(".currency-selectors").css("opacity", "0");
      $(".value-output").addClass("not-ready");
    }
    else {
      animationtimer = setTimeout(function() {
        $(".currency-selectors").css("height", $(".currency-selectors-inner").innerHeight());
        $(".value-output").removeClass("not-ready");

        animationtimer = setTimeout(function() {
          $(".currency-selectors").css("opacity", "1");
        }, 500);
      }, 200);
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
        <div className="mobile-divider"></div>
      </form>
    )
  }
});

export default ValueInput;
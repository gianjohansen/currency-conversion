import React from 'react';
import ValueInput from './inputs/ValueInput';
import CurrencySelectors from './inputs/CurrencySelectors';
import ValueOutput from './outputs/ValueOutput';
import OtherConversions from './outputs/OtherConversions';

require('../www/assets/css/vendor/normalize.scss');
require('../www/assets/css/core.scss');

class CurrencyConversion extends React.Component {
  constructor() {
    super();
    this.state = {
      totalInput: '',
      currencies: {},
      rates: {}
    };
  }

  setTotalInput(e) {
    console.log("setting total input");
    this.setState({totalInput: e});
  }

  setCurrency(isBase, e) {
    console.log("setting currencies");
    var currencies = this.state.currencies;
    currencies[(isBase ? "from" : "to")] = e.label;
    this.setState({ currencies: currencies}, () => { this.requestExchangeRates(); });

    setTimeout(function() {
      if (currencies.from && currencies.to) {
        $(".value-output").css("height", $(".value-output-inner").innerHeight());
      }
    }, 600);
  }

  requestExchangeRates() {
    console.log("requesting exchange rates");
    $.getJSON( "http://api.fixer.io/latest?base=" + this.state.currencies.from, (data) => {
      var rates = this.state.rates;
      data.rates[this.state.currencies.from] = 1;
      rates[this.state.currencies.from] = data;
      this.setState({ rates: rates});
    });
  }

 render() {
   return (<div>
      <ValueInput totalInput={this.state.totalInput} setTotalInput={this.setTotalInput.bind(this)} />
      <CurrencySelectors totalInput={this.state.totalInput} setCurrencyFrom={this.setCurrency.bind(this, true)} setCurrencyTo={this.setCurrency.bind(this, false)} />
      <ValueOutput totalInput={this.state.totalInput} currencies={this.state.currencies} rates={this.state.rates} />
      {/* <OtherConversions totalInput={this.state.totalInput} currencies={this.state.currencies} rates={this.state.rates} /> */}
    </div>
   );
 }
}

export default CurrencyConversion;
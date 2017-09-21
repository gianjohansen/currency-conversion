import React from 'react';
import ValueInput from './inputs/ValueInput';
import CurrencySelectors from './inputs/CurrencySelectors';
import ValueOutput from './outputs/ValueOutput';
import OtherConversions from './outputs/OtherConversions';

class CurrencyConversion extends React.Component {
  constructor() {
    super();
    this.state = {
      totalInput: '0',
      currencyFrom: 'USD',
      currencyTo: 'USD'
    };
  }

  setTotalInput(e) {
    this.setState({totalInput: e.target.value});
  }
  setCurrencyFrom(e) {
    this.setState({currencyFrom: e.target.value});
  }
  setCurrencyTo(e) {
    this.setState({currencyTo: e.target.value});
  }

 render() {
   return (<div>
      <ValueInput totalInput={this.state.totalInput} setTotalInput={this.setTotalInput.bind(this)} />
      <CurrencySelectors setCurrencyFrom={this.setCurrencyFrom.bind(this)} setCurrencyTo={this.setCurrencyTo.bind(this)} />
      <ValueOutput totalInput={this.state.totalInput} currencyFrom={this.state.currencyFrom} currencyTo={this.state.currencyTo} />
      <OtherConversions totalInput={this.state.totalInput} currencyFrom={this.state.currencyFrom} currencyTo={this.state.currencyTo} />
    </div>
   );
 }
}

export default CurrencyConversion;
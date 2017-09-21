import React from 'react';
import ValueInput from './inputs/ValueInput';
import CurrencySelectors from './inputs/CurrencySelectors';

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
      <strong>Calculation:</strong> {this.state.totalInput} from {this.state.currencyFrom} to {this.state.currencyTo}
      <ValueInput totalInput={this.state.totalInput} setTotalInput={this.setTotalInput.bind(this)} />
      <CurrencySelectors setCurrencyFrom={this.setCurrencyFrom.bind(this)} setCurrencyTo={this.setCurrencyTo.bind(this)} />
    </div>
   );
 }
}

export default CurrencyConversion;
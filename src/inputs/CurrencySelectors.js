import React from 'react';

var CurrencySelectors = React.createClass({
  render: function(){
    return (
        <div className="currency-selectors">
            <select onChange={this.props.setCurrencyFrom}>
                <option>USD</option>
                <option>AUD</option>
            </select>
            -
            <select onChange={this.props.setCurrencyTo}>
                <option>USD</option>
                <option>AUD</option>
            </select>
        </div>
    )
  }
});

export default CurrencySelectors;
import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyConversion from './CurrencyConversion';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(CurrencyConversion),
    document.getElementById('mount')
  );
});
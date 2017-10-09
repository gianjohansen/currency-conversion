import React from 'react';
import { findDOMNode } from 'react-dom';
import ReactSuperSelect from 'react-super-select';
import classNames from 'classnames';

require('../../vendor/react-super-select/react-super-select.scss');
require('../../www/assets/css/inputs/currency-selectors.scss');

var currencyList = [
  {
    id: 1,
    attributeName: "usd",
    label: "USD",
    name: "US Dollar",
    iconClass: "rss-grocery rss-grocery-apple",
    group: "Fruit",
    price: 0.79
  },{
    id: 2,
    attributeName: "aud",
    label: "AUD",
    name: "Australian Dollar",
    iconClass: "rss-grocery rss-grocery-carrot",
    group: "Vegetable",
    price: 0.21
  }
  ];

var CurrencySelectors = React.createClass({

  componentDidMount: function() {
  },

  allCurrencies: function() {
    let items = [];
    items.push(<option key=""></option>);
    items.push(<option key="USD">USD</option>);
    items.push(<option key="AUD">AUD</option>);
    return items;
  },

  currencyDropdownItemTemplate: function(item, search) {
    if (console && console.info) {
      // console.info('search term (%s) is provided for highlighting/modifying template output', search);
    }
    var iconClasses = classNames('grocery-icon',
                              'rss-grocery',
                            'rss-grocery-' + item.attributeName),
    labelMarkup = search ? _getHighlightedSearchLabel(item, search, new RegExp( search, 'i')) : item.label;
  
    return(
      <div key={item.label} className="currency-dropdown-template">
        <span className="currency-icon"><img src={"assets/img/flags/" + item.label + ".png"}></img></span>
        <p className="currency-label"><strong>{labelMarkup}</strong> - {item.name}</p>
      </div>);
  },

  render: function(){
    return (
      <div className="currency-selectors">
        <div className="currency-selectors-inner">
          <ReactSuperSelect placeholder="Convert from..." 
          onChange={this.props.setCurrencyFrom} 
          dataSource={currencyList} 
          customOptionTemplateFunction={this.currencyDropdownItemTemplate} 
          clearable={false}
          />

          <ReactSuperSelect placeholder="Convert to..." 
          onChange={this.props.setCurrencyTo} 
          dataSource={currencyList} 
          customOptionTemplateFunction={this.currencyDropdownItemTemplate} 
          clearable={false}
          />
        </div>
      </div>
    )
  }
});

export default CurrencySelectors;
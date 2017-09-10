import React from 'react';

class CurrencyConversion extends React.Component {
 constructor() {
   super();
   this.state = {
     count: 0,
   };
 }

 render() {
   return (
       <form>
            <p>Enter a value:</p>
            <input type="text" name="name" />
        </form>
   );
 }
}
export default CurrencyConversion;
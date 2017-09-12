import React from 'react';

class ValueInput extends React.Component {
 constructor() {
   super();
 }

 render() {
   return (
    <form>
        <p>Enter a value:</p>
        <input type="text" name="valueinput" />
    </form>
   );
 }
}
export default ValueInput;
// export function PrintComponent() {
//     return (
//       <div>
//         <p>Count is: 1</p>
//       </div>
//     );
//   }
  
//   export default PrintComponent;

import React, { Component } from 'react'

class PrintThisComponent extends Component {
  render() {
    return (
      <div id="printButton">
        <button id="print" onClick={() => window.print()}>PRINT</button>
        {/* <p>Click above button opens print preview with these words on page</p> */}
      </div>
    )
  }
}

export default PrintThisComponent
import React, { Component } from 'react'

class PrintThisComponent extends Component {
  render() {
    return (
      <div className="printButton">
        <button className="print" onClick={() => window.print()}>PRINT</button>
      </div>
    )
  }
}

export default PrintThisComponent
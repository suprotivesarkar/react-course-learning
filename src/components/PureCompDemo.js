import React, { PureComponent } from 'react'

class PureCompDemo extends PureComponent {
  render() {
    console.log('Pure Comp')
    return (
      <div>PureCompDemo {this.props.name}</div>
    )
  }
}

export default PureCompDemo
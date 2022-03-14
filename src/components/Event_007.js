import React, { Component } from 'react'

class Event_007 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1,
    }
  }

  btnClick = e => {
    console.log(e)

    //state와 count 같이 return
    this.setState(state => ({
      ...state,
      count: state.count + 1,
    }))
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.btnClick}>click me!</button>
      </div>
    )
  }
}

export default Event_007

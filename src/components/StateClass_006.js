import React, { Component } from 'react'

class StateClass_006 extends Component {
  /*
        state는 class 컴포넌트에서 쓰인다.
      */
  constructor(props) {
    super(props)
    this.state = {
      count: 1,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      })

      // this.setState((prevState)=>{
      //   const newState = { count: prevState.count + 1 };
      //   return newState;
      // });
    }, 1000)
  }

  render() {
    return <h2>{this.state.count} [ THIS IS stateClass_006 ]</h2>
  }
}

export default StateClass_006

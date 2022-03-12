import React, { Component } from 'react';

class LifeCycle_008 extends Component {
    state = {
        age: 39,
    };
    interval = null;
    constructor(props) {
        super(props);

        console.log("constructor", props);
    }
    render() {
        console.log("render");
        return (
            <div>
                <h2>
                    Hello {this.props.name} - {this.state.age}
                </h2>
            </div>
        );
    }

    // 여기서 특정 객체를 반환하게 되면 해당 객체 안에 있는 내용들이 컴포넌트의 state로 설정된다
    // null을 반환시 아무 일도 발생하지 않음
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log("getDerivedStateFromProps", nextProps, prevState);

    //     return {
    //         age: 390,
    //     };
    // }
    componentDidMount() {
        console.log("componentDidMount");

        this.interval = setInterval(() => {
            // console.log("setInterval");
            this.setState((state) => ({ ...state, age: state.age + 1 }));
        }, 1000);
    }

    // componentWillReceiveProps(nextProps) {
    //   console.log("componentWillReceiveProps", nextProps);
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate", nextProps, nextState);

        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate", prevProps, prevState);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

export default LifeCycle_008;
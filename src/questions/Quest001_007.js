import React, { Component } from 'react';

class Quest001_007 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtVal1: 0,
            txtVal2: 0,
            result: 0
        };
    }
    
    add = () => {
        this.setState({
            result: Number(this.state.txtVal1) + Number(this.state.txtVal2)
        });
    };

    sub = () => {
        this.setState({
            result: Number(this.state.txtVal1) - Number(this.state.txtVal2)
        });
    };

    multiple = () => {
        this.setState({
            result: Number(this.state.txtVal1) * Number(this.state.txtVal2)
        });
    };

    division = () => {
        this.setState({
            result: Number(this.state.txtVal1) / Number(this.state.txtVal2)
        });
    };

    render() {
        return (
            <div>
                <p>결과: {this.state.result || "값 없음"} </p>
                <label>숫자1:</label><input type="text" onChange={(e) => this.setState({txtVal1: e.target.value})} />
                <label>숫자2:</label><input type="text" onChange={(e) => this.setState({txtVal2: e.target.value})} />
                <br />
                <br />
                <button onClick={this.add}>더하기</button>
                <button onClick={this.sub}>빼기</button>
                <button onClick={this.multiple}>곱하기</button>
                <button onClick={this.division}>나누기</button>
            </div>
        );
    }
}

export default Quest001_007;
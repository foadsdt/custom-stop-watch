import React, { Component } from "react"
import { TestContext } from "./TestContext";
let interval;
class Timer extends Component {
    constructor() {
        super()
        this.state = {
            hour: 0,
            minute: 0,
            second: 0,
            isStart: false
        }
    }

    static contextType = TestContext;

    handleStart = () => {
        if (this.state.isStart == false) {
            interval = setInterval(() => {
                let s = this.state.second;
                let m = this.state.minute;
                let h = this.state.hour;

                s = s + 1;

                if (s == 60) {
                    s = 0;
                    m = m + 1;
                }

                if (m == 60) {
                    m = 0;
                    h = h + 1;
                }

                this.setState({
                    second: s,
                    minute: m,
                    hour: h
                })
            }, 1000)
        }
    }

    handleStop = () => {
        this.setState({ isStart: false })
        clearInterval(interval)
    }

    handleReset = () => {
        this.handleStop();
        this.setState({
            second: 0,
            minute: 0,
            hour: 0
        })
    }

    handleSetTimeArray = () => {
        let newTime = document.querySelector('.timer').innerHTML;
        this.context.setTimeArray([ ... this.context.timeArray, newTime ])

    }

    render() {

        let h = this.state.hour;
        let m = this.state.minute;
        let s = this.state.second;


        return (
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div
                    onClick={this.handleSetTimeArray}
                    className="bg-primary rounded-circle d-flex justify-content-center align-items-center mb-2 timer fs-6 fs-lg-5 fs-xl-4 text-white" style={{ width: '300px', height: '300px' }}>
                    {`${h > 9 ? h : '0' + h}:${m > 9 ? m : '0' + m}:${s > 9 ? s : '0' + s}`}
                </div>
                <div>
                    <button className="btn btn-success btn-lg lh-xl me-1" onClick={this.handleStart}>start</button>
                    <button className="btn btn-warning btn-lg lh-xl me-1" onClick={this.handleStop}>stop</button>
                    <button className="btn btn-secondary btn-lg lh-xl" onClick={this.handleReset}>reset</button>
                </div>
                <div>

                </div>
            </div>
        )
    }

}

export default Timer;
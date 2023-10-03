import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const { date } = this.state;
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return (
      <div className="clock">
        <div className="clock-face">
          <div className="clock-hands">
            <div className="hand hour-hand" style={{ transform: `rotate(${(hours % 12) * 30 + minutes / 2}deg)` }}></div>
            <div className="hand minute-hand" style={{ transform: `rotate(${minutes * 6 + seconds / 10}deg)` }}></div>
            <div className="hand second-hand" style={{ transform: `rotate(${seconds * 6}deg)` }}></div>
          </div>
          <div className="clock-center"></div>
        </div>
        <div className="digital-clock text-white">
          {`${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}
        </div>
      </div>
    );
  }
}

export default Clock;
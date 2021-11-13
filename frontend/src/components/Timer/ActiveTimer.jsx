import React, { Component } from "react";
import IdleTimer, { useIdleTimer } from "react-idle-timer";
import format from "date-fns/format";
import { CircularLoader } from "../index";

const minuteSeconds = 60;
export default class ActiveTimer extends Component {
  constructor(props) {
    super(props);
    let minutes = this.props.minutes
      ? this.props.minutes
      : 10;
    this.idleTimer = null;
    this.originalTime = minutes * minuteSeconds * 1000;
    this.timeout = minutes * minuteSeconds * 1000;
    // seconds
    this.state = {
      originalTime:
        this.props.minutes * minuteSeconds * 1000,
      remaining: this.timeout,
      totalActive: 0,
      isIdle: false,
      lastActive: new Date(),
      elapsed: 0,
      lastEvent: "Events Emitted on Leader",
      leader: false,
    };
    // Bind event handlers and methods
    this.handleOnActive = this.handleOnActive.bind(this);
    this.handleOnIdle = this.handleOnIdle.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleResume = this.handleResume.bind(this);
  }

  componentDidMount() {
    this.setState({
      //   totalActive: this.idleTimer.getTotalActiveTime(),
      lastActive: this.idleTimer.getLastActiveTime(),
      elapsed: this.idleTimer.getElapsedTime(),
      leader: this.idleTimer.isLeader(),
      isIdle: this.idleTimer.isIdle(),
      remaining: this.idleTimer.getRemainingTime(),
    });

    setInterval(() => {
      this.setState({
        // totalActive: this.idleTimer.getTotalActiveTime(),
        lastActive: this.idleTimer.getLastActiveTime(),
        elapsed: this.idleTimer.getElapsedTime(),
        leader: this.idleTimer.isLeader(),
        isIdle: this.idleTimer.isIdle(),
        remaining: this.idleTimer.getRemainingTime(),
      });
    }, 1000);
  }

  render() {
    let percentage = Math.floor(
      100 -
        (this.state.remaining / this.state.originalTime) *
          100
    );
    return (
      <div>
        <IdleTimer
          ref={(ref) => {
            this.idleTimer = ref;
          }}
          onActive={this.handleOnActive}
          onIdle={this.handleOnIdle}
          timeout={this.timeout}
          crossTab={{
            emitOnAllTabs: true,
          }}
        />
        <div>
          <div>
            <span>
              <CircularLoader value={percentage} />
              {percentage}
              {/* Timeout: {format(this.state.timeout, "mm:ss")} */}
            </span>
            <span>
              Time Remaining:
              {format(this.state.remaining, "mm:ss")}
            </span>
            <span>
              Time Elapsed: {this.state.elapsed * 60}
            </span>
            <span>
              Last Active:{" "}
              {format(
                this.state.lastActive,
                "dd-MMM-yyyy h:m:ss"
              )}
            </span>
            <span>
              Total Active Time:{" "}
              {/* {format(this.state.totalActive, "hh:mm:ss")} */}
            </span>
            <span>Last Event: {this.state.lastEvent}</span>
            <span>
              Is Leader: {this.state.leader.toString()}
            </span>
            <span>
              Idle: {this.state.isIdle.toString()}
            </span>
          </div>
          <div>
            <button onClick={this.handleReset}>
              RESET
            </button>
            <button onClick={this.handlePause}>
              PAUSE
            </button>
            <button onClick={this.handleResume}>
              RESUME
            </button>
          </div>
        </div>
      </div>
    );
  }

  handleOnActive() {
    this.setState({ lastEvent: "active" });
  }

  handleOnIdle() {
    this.setState({ lastEvent: "idle" });
  }

  handleReset() {
    this.idleTimer.reset();
  }

  handlePause() {
    this.idleTimer.pause();
  }

  handleResume() {
    this.idleTimer.resume();
  }
}

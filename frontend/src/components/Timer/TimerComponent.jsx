import React, { useState } from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Countdown from "./Countdown";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function AddSign() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-plus-circle"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
        <path
          fill-rule="evenodd"
          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
        />
      </svg>
    </div>
  );
}

function MinusSign() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-dash-circle"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
        <path
          fill-rule="evenodd"
          d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
        />
      </svg>
    </div>
  );
}

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6,
};
const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) =>
  ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) =>
  ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

const renderTime = (dimension, time) => {
  return (
    <div
      className="time-wrapper"
      style={{ flexDirection: "row" }}
    >
      <div
        className="time"
        style={{ flexDirection: "row" }}
      >
        {time}
      </div>
      <div style={{ flexDirection: "row" }}>
        {dimension}
      </div>
    </div>
  );
};
export default function TimerComponent() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 24000; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  const start = () => {};
  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${minutes}:${seconds}`;
  };
  return (
    <div>
      {" "}
      <Countdown minutes={25} />
      <button onClick={start}>Start</button>
      <div className="row">
        <div className="col">
          <div className="input-group md-form">
            <div
              className="input-group-append"
              onClick={() => setHour(Math.floor(hour) - 1)}
            >
              <span
                className="form-control btn-outline-warning waves-effect"
                id="basic-text1"
              >
                <MinusSign />
              </span>
            </div>
            <input
              className="form-control amber-border"
              placeholder="Hours"
              value={hour}
              onChange={(event) =>
                setHour(event.target.value)
              }
              type="number"
            />{" "}
            <div
              className="input-group-append"
              onClick={() => setHour(Math.floor(hour) + 1)}
            >
              <span
                className="form-control btn-outline-warning waves-effect"
                id="basic-text1"
              >
                <AddSign />
              </span>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="input-group md-form">
            <div
              className="input-group-append"
              onClick={() =>
                setMinute(Math.floor(minute) - 1)
              }
            >
              <span
                className="form-control btn-outline-warning waves-effect"
                id="basic-text1"
              >
                <MinusSign />
              </span>
            </div>
            {/* <label for="minutes">Minutes</label> */}
            <input
              className="form-control amber-border"
              placeholder="Minutes"
              value={minute}
              onChange={(event) =>
                setMinute(event.target.value)
              }
              type="number"
            />{" "}
            <div
              className="input-group-append"
              onClick={() =>
                setMinute(Math.floor(minute) + 1)
              }
            >
              <span
                className="form-control btn-outline-warning waves-effect"
                id="basic-text1"
              >
                <AddSign />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import {
  CardComponent,
  TableComponent,
  CircularLoader,
  ActiveTimer,
  TimerComponent,
  ToastComponent,
} from "./index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useStoreActions, useStoreState } from "easy-peasy";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import { useTimer } from "react-timer-hook";

import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import FolderIcon from "@mui/icons-material/Folder";
function CircularTimer(props) {
  let text = `${props.minutes}: ${props.seconds}`;
  return (
    <ListItem>
      <ListItemAvatar>
        <Box
          sx={{
            position: "relative",
            display: "inline-flex",
          }}
        >
          <CircularProgress
            variant="determinate"
            {...props}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
            >
              {`${Math.round(props.value)}%`}
            </Typography>
          </Box>{" "}
        </Box>
      </ListItemAvatar>

      <ListItem button>
        <ListItemText
          primary={text}
          secondary="Jan 9, 2014"
        />
        <ListItemText
          style={{ color: "#ff6f00" }}
          primary="MyText"
        />
      </ListItem>

      <button>hi</button>
    </ListItem>
  );
}
CircularTimer.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;
function TimerHook({ expiryTimestamp, ogTime }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });
  //   console.log("original time", originalTime);
  //   console.log("timestamp", expiryTimestamp);
  let getSeconds = parseInt(ogTime);
  //   console.log(getSeconds);
  let passedTime = minutes * 60;
  let passedSeconds = seconds;
  //   console.log(passedSeconds);
  let totalPassed = passedTime + passedSeconds;
  let percentage = 100 - (totalPassed / ogTime) * 100;
  //   console.log(percentage);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>react-timer-hook </h1>

      <p>Timer Demo</p>
      <CircularTimer
        value={percentage}
        minutes={minutes}
        seconds={seconds}
      />

      <div style={{ fontSize: "100px" }}>
        <span>{days}</span>:<span>{hours}</span>:
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300);
          restart(time);
        }}
      >
        Restart
      </button>
    </div>
  );
}
function RealTimer({ minutes }) {
  const time = new Date();
  let getTime = minutes * 60;
  //   console.log("get time");
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div>
      <TimerHook expiryTimestamp={time} ogTime={getTime} />
    </div>
  );
}
const Playground = () => {
  return (
    <div>
      <h1>Timer omg need a break</h1>
      <ListItem
        secondaryAction={
          <Box>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>

            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Box>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Single-line item" />
      </ListItem>
      Always open this Today: 1. Timer. 2. Toast 3. Bug App
      To Do List: finish routing,
      <br />
      How do we make it easy to play with components?
      <br />
      List of all components, just render on the side
      <br />
      Info tag, making it clear what props go in
      <RealTimer minutes={10} />
      <TableComponent />
      <CardComponent />
      <TimerComponent />
      {/* <ToastComponent /> */}
      {/* <ActiveTimer minutes={1} /> */}
    </div>
  );
};

export default Playground;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AudioPlayer from "react-audio-player";

// import Carousel
import CarouselHome from "./Carousel";
// import audio
import Mp3 from "../audio/wind.mp3";

const Timer = () => {
  //Handle the logic of the timer

  const [time, setTime] = useState(120);
  const [intervalId, setIntervalId] = useState(null);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning && time > 0) {
      const id = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      setIntervalId(id);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Function to start the timer

  const startTimer = () => {
    setIsRunning(true);
  };

  // Function to stop the timer

  const stopTimer = () => {
    setIsRunning(false);

    clearInterval(intervalId);
  };

  // set the logic of the timer's button

  const setTimeRemaining = (minutes) => {
    if (isRunning) {
      stopTimer();
    }
    setTime(minutes * 60);
  };

  // set the minutes and seconds

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <section className="wind timerBox container-fluid ">
      <CarouselHome />
      <div>
        <Link className="btnBox" to="/">
          <button className="btn">Home</button>
        </Link>
      </div>
      <div className="time">
        {time < 1 ? (
          <div>
            <h2>You are done</h2>
            <h3>reset the timer before restart</h3>
          </div>
        ) : (
          <h2>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h2>
        )}
      </div>
      <div className="container">
        <div className="audio">
          {isRunning && time > 0 ? <AudioPlayer src={Mp3} autoPlay /> : null}
          {isRunning ? (
            <p>Now relax and listen to your breath</p>
          ) : (
            <p>
              Please make yourself comfortable, <br />
              set the timer how you prefer and press play
            </p>
          )}
        </div>
      </div>
      <div className="btnBoxWind">
        <div>
          <button
            className={"btnPlay btn "}
            onClick={isRunning ? stopTimer : startTimer}
          >
            {isRunning ? "Pause" : "Play"}
          </button>
        </div>
        <button className={"btn "} onClick={() => setTimeRemaining(2)}>
          2
        </button>
        <button className={"btn "} onClick={() => setTimeRemaining(5)}>
          5
        </button>
        <button className={"btn "} onClick={() => setTimeRemaining(10)}>
          10
        </button>
      </div>
    </section>
  );
};

export default Timer;

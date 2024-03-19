"use client";
import "./Timer.css";
import React, { useState, useEffect } from "react";
import TextPSM from "../TextPSM/TextPSM";

const Timer = () => {
  const [time, setTime] = useState({
    hours: 60,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (
          prevTime.hours === 0 &&
          prevTime.minutes === 0 &&
          prevTime.seconds === 0
        ) {
          clearInterval(interval);
          return prevTime;
        }

        let updatedHours = prevTime.hours;
        let updatedMinutes = prevTime.minutes;
        let updatedSeconds = prevTime.seconds;

        if (updatedSeconds === 0) {
          if (updatedMinutes === 0) {
            updatedHours -= 1;
            updatedMinutes = 59;
          } else {
            updatedMinutes -= 1;
          }
          updatedSeconds = 59;
        } else {
          updatedSeconds -= 1;
        }

        return {
          hours: updatedHours,
          minutes: updatedMinutes,
          seconds: updatedSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="timer">
        <TextPSM style={{fontSize: '12px', marginBottom: '10px'}}>Auction ends in:</TextPSM>
        <div style={{display: 'flex', width: '235px', justifyContent: 'space-between', opacity: '100%'}}>
            <div>
                <div style={{display: 'flex', width: '75px', justifyContent: 'space-between'}}>
                    <TextPSM style={{fontSize: '38px', fontWeight: '700'}}>{time.hours}</TextPSM>
                    <TextPSM style={{fontSize: '38px', fontWeight: '700'}}>:</TextPSM>
                </div>
                <TextPSM style={{fontSize: '12px'}}>Hours</TextPSM>
             </div>
             <div>
             <div style={{display: 'flex', width: '75px', justifyContent: 'space-between'}}>
                    <TextPSM style={{fontSize: '38px', fontWeight: '700'}}>{time.minutes}</TextPSM>
                    <TextPSM style={{fontSize: '38px', fontWeight: '700'}}>:</TextPSM>
                </div>
                <TextPSM style={{fontSize: '12px'}}>Minutes</TextPSM>
             </div>
             <div>
                <TextPSM style={{fontSize: '38px', fontWeight: '700'}}>{time.seconds}</TextPSM>
                <TextPSM style={{fontSize: '12px'}}>Seconds</TextPSM>
             </div>
        </div>
    </div>
  );
};

export default Timer;
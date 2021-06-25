import React, { useState } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  const timer = () => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  };
  return (
    <div>
      <h1>Current time is: {time.toLocaleTimeString()} </h1>
      {timer()}
    </div>
  );
}

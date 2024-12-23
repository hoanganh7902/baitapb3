import React, { useEffect, useState } from 'react'

export default function Timer() {
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() => {
        if(start === true) {
            const interval = setInterval(() => {
                setTime(time => time + 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [start])
  return (
    <div>
      <h1>Bài tập 4: Bộ đếm thời gian</h1>
      <button onClick={(e) => setStart(true)}>Start</button>
      <button onClick={(e) => setTime(0)}>End</button>
      <button onClick={(e) => setStart(false)}>Pause</button>
      <br/>
      {time}
    </div>
  )
}

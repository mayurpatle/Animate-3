import React,   {useState} from 'react'
import './Bounce.css'
const Bounce = () => {
    const [bouncing  ,  setBouncing ]  = useState(true) ; 

  return (
    <div>
      <div className={bouncing ? "bounce" : "normal"}>
        <p> this content bounces </p>
      </div>
      <button onClick={() => setBouncing(!bouncing)} className='btn'>
        {bouncing ? "Stop Bounce" : "Start Bounce"}
      </button> 

    </div>
  );
}

export default Bounce
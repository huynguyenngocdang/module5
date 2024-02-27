import React, { useState } from "react";
import "../../css/ToggleStyles.css";
//stateless functional component: component ko su dung state
// function Toggle() {
//     return(
//         <div className="toggle"></div>
//     );
// }
// //stateful functional component: component co su dung state

// function Toggle2() {
//     const{count, setCount} = useState;
//     return(
//         <div className="toggle"></div>
//     );

// }

function Toggle() {
  //1. enable state : {useState(...)}
  //2. init state: useState(false)
  //3. reading state:
  //4. update state:
  // const a = useState(false)
  // console.log(a);

  const [on, setOn] = useState(false);
  const handleToggle = () => {
    setOn((on) => !on)
  };

  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </div>
  );
}

export default Toggle;

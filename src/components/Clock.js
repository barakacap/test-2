import React, { useState,useEffect } from "react";
// import sTimer from "../context/context";

import MintWrapper from "./MintWrapper";



function Clock({showTimer, setShowTimer}){



  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [deadline, setDeadline] = useState("July,27,2022 14:00:00 UTC");

  // const {showTimer, setShowTimer} = useContext(sTimer);
  useEffect(() => {
      getTimeUntil(deadline);
      let timer=
      setInterval(() => {
        getTimeUntil(deadline)
        if(showTimer===false){
          clearInterval(timer)
        }
      }, 1000);
      return () => {
          // Anything in here is fired on component unmount.
        clearInterval(timer)
      }
  }, []);

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  }

  const getTimeUntil = (deadline) => {

    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setShowTimer(false);
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } 
    else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
      // setShowTimer(false);

     
    }
  }


  return (
    <>
      { showTimer ? 
        <div id="fs-timer">
          <div>
            <div>
              <h2 id="timer-days">{leading0(days)}</h2>
              <p>DAYS</p>
            </div>
          </div>
          <div>
            <div>
              <h2 id="timer-hours">{leading0(hours)}</h2>
              <p>HRS</p>
            </div>
          </div>
          <div>
            <div>
              <h2 id="timer-minutes">{leading0(minutes)}</h2>
              <p>MIN</p>
            </div>
          </div>
          <div>
            <div>
              <h2 id="timer-seconds">{leading0(seconds)}</h2>
              <p>SEC</p>
            </div>
          </div>
              
        </div>
        :
        <MintWrapper/>
      }
    </>
  );
    

}

// class Clock extends Component {
//   constructor(props) {
//     const { showTimer, setShowTimer } = useContext(sTimer);
//     super(props);
//     this.state = {
//       days: 0,
//       hours: 0,
//       minutes: 0,
//       seconds: 0,
//       deadline: "July, 10, 2022"
//     };
//   }
//   componentWillMount(){
//     this.getTimeUntil(this.state.deadline);
//   }
//   componentDidMount() {
//     setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
//   }
//   leading0(num) {
//     return num < 10 ? "0" + num : num;
//   }
//   getTimeUntil(deadline) {
//     const time = Date.parse(deadline) - Date.parse(new Date());
//     if (time < 0) {
//       setShowTimer(false)
//       // this.context.showTimer =false;
//       this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//     } else {
//       const seconds = Math.floor((time / 1000) % 60);
//       const minutes = Math.floor((time / 1000 / 60) % 60);
//       const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
//       const days = Math.floor(time / (1000 * 60 * 60 * 24));
//       this.setState({ days, hours, minutes, seconds });
//     }
//   }
//   render() {
//     return (
//         <>
//         { this.state.showTimer ? 
//             <div id="fs-timer">
//              <div>
//                <div>
//                  <h2 id="timer-days">{this.leading0(this.state.days)}</h2>
//                  <p>DAY</p>
//                </div>
//              </div>
//              <div>
//                <div>
//                  <h2 id="timer-hours">{this.leading0(this.state.hours)}</h2>
//                  <p>HRS</p>
//                </div>
//              </div>
//              <div>
//                <div>
//                  <h2 id="timer-minutes">{this.leading0(this.state.minutes)}</h2>
//                  <p>MIN</p>
//                </div>
//              </div>
//              <div>
//                <div>
//                  <h2 id="timer-seconds">{this.leading0(this.state.seconds)}</h2>
//                  <p>SEC</p>
//                </div>
//              </div>     
//              </div>
//              :
//              <div id="fs-calc">
//               <div>
//                 <div>
//                   <h2>
//                     <span> 224 </span> / <span>1,111</span>{" "}
//                   </h2>
//                   <p>WolfBoss minted</p>
//                 </div>
//                 <div>
//                   <div>
//                     <p>
//                       {" "}
//                       <span id="range-n">10</span> x 20.01 ETH
//                     </p>
//                     <span>max 10 per wallet</span>
//                   </div>
//                   <h2>
//                     <span id="multiple">200.1</span> <br /> ETH
//                   </h2>
//                 </div>
//               </div>
//               <div>
//                 <div id="input-range-scales">
//                   <div />
//                   <div />
//                   <div />
//                   <div />
//                   <div />
//                   <div />
//                   <div />
//                   <div />
//                 </div>
//                 <input
//                   onInput={window["change"]}
//                   type="range"
//                   min={1}
//                   max={10}
//                   step={1}
//                   name="range"
//                   id="price-counter"
//                 />
//               </div>
//             </div>
//              }
//             </>
//     );
//   }
// }
export default Clock;

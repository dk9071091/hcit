import React, { useEffect, useState } from "react";
import Child from "./Child";
import './style.css'
const Parent = () => {
    const [Shuffle, setShuffle] = useState([1,2,3,4,5,6]);
    const [Remaining, setRemaining] = useState();
    const [check, setCheck] = useState(false);

    const ResetButton=()=>{
      setShuffle(Shuffle.sort());
      setCheck((r)=>!r);
      setRemaining(Shuffle[4]+','+Shuffle[5])

    }
    const ShuffleButton=()=>{
          setShuffle(Shuffle.sort(() =>0.5- Math.random()));
          setCheck((r)=>!r);
          setRemaining(Shuffle[4]+','+Shuffle[5])
    }
  return (
    <>
      <div className="container mt-5 ">
        <h1>Parent Component</h1>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
              <table style={{width:"100%"}}>
                    <tr>

                        <td>{Shuffle[0]}</td>
                        <td>{Shuffle[1]}</td>
                    </tr>
                    <tr>
                        <td>{Shuffle[2]}</td>
                        <td>{Shuffle[3]}</td>
                    </tr>
                    </table>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <button type="button" className="btn btn-primary " onClick={ShuffleButton}>Shuffle</button>
                </div>
                <div className="col-md-2">
                  <button type="button" className="btn btn-secondary float-right ml-1" onClick={ResetButton}>
                    Reset
                  </button>
                </div>
              </div>
              <Child
                Array={Shuffle.toString()}
                Remaining={Remaining}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Parent;

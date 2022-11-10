import React from 'react';

const Details = ({ times, bt }) => {
    
    // const toast = () => {
    //      <div className="toast">
    //         <div className="alert alert-info">
    //             <div>
    //             <span>Activity Completed.</span>
    //             </div>
    //         </div>
    //     </div>
    // }
  

    return (
       
        <div>
            <div className="flex justify-between bg-slate-200 rounded p-5 w-80">
            <p className="font-bold">Exercise Time</p>
            <p className="font-extralight"> {times} seconds</p>
            </div>
            <div className="flex mt-5 justify-between bg-slate-200 rounded p-5 w-80">
            <p className="font-bold">Break Time</p>
            <p className="font-extralight"> {bt} seconds</p>
            </div>
            <button className="btn rounded w-80 mt-5">Activity Completed</button>
           
        </div>
        
        
    );
};

export default Details;
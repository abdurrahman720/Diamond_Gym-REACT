import React from 'react';

const Details = ({ times }) => {
    
    return (
        <div className="flex justify-between bg-slate-200 rounded p-5 w-80">
            <p className="font-bold">Exercise Time</p>
            <p className="font-extralight"> {times} seconds</p>
        </div>
    );
};

export default Details;
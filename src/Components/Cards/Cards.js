import React, { useState } from 'react';

const Cards = ({ exercise , setTimes, times }) => {
  const { id, picture, name, about, time, age } = exercise;
  

  const addTolist = (t) => {
    const newTime = times + t;
    setTimes(newTime);

    console.log(times);
  } 

    return (
        <div>
                   <div className="card w-46 h-100 m-5 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10 ">
    <img src={picture} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-start text-start">
    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <p>For age: {age}</p>
                    <p>Time required: {time}</p>
    <div className="card-actions">
      <button onClick={()=>addTolist(time)} className="btn btn-primary">Add to List</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Cards;
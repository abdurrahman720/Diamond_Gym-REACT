import './Sidebar.css'

import React from 'react';
import Details from '../Details/Details';

const Sidebar = ({ times, setTimes }) => {
  
    return (
        <div className="bg-white">
            <div className="profile flex justify-center items-center  mt-5">
                <div className="img w-16">
                    <img className="" src="https://d.searchengines.guru/avatar/2001000/2002588_1.png" alt="" />
                </div>
                <div className="profile-text m-5">
                    <p className="font-bold">Zahid Hasan</p>
                    <div className="font-extralight">Sydney,Australia</div>
                </div>
            </div>
            <div className="stats stats-vertical lg:stats-horizontal shadow">
  
                <div className="stat">
                    <div className="stat-value">75<span className="stat-text">kg</span></div>
                    <div className="stat-desc">Weight</div>
                </div>
                
                <div className="stat">
                
                    <div className="stat-value">6.5</div>
                    <div className="stat-desc">Height</div>
                </div>
                
                <div className="stat">
                    <div className="stat-value">25<span className="stat-text">yrs</span> </div>
                    <div className="stat-desc">Age</div>
                </div>
  
            </div>
            <p className="font-bold text-lg my-5">Add a Break</p>

            <div className="flex justify-between bg-slate-200 rounded p-5 w-80">
                <button className="btn btn-circle ">10 <sub>s</sub></button>
                <button className="btn btn-circle ">20<sub>s</sub></button>
                <button className="btn btn-circle ">30<sub>s</sub></button>
                <button className="btn btn-circle ">40<sub>s</sub></button>
             </div>
          
            <p className="font-bold text-lg mt-10 mb-5">Exercise Details</p>
            <div>
                <Details times={times}></Details>
            </div>
        </div>
    );
};

export default Sidebar;
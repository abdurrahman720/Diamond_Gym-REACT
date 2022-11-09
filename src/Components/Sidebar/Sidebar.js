import './Sidebar.css'

import React from 'react';

const Sidebar = () => {
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
        </div>
    );
};

export default Sidebar;
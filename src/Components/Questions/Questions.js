import React from 'react';

const Questions = () => {
    return (
        <div>
               <div className="mt-5"></div>
           <div className="collapse">
            <input type="checkbox" className="peer" /> 
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-extrabold">
                  How does React Work?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                 <p>
React is a declarative, efficient, and flexible JavaScript library for building user interfaces.ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. </p>
                </div>
            </div>
            <div className="mt-5"></div>
           <div className="collapse">
            <input type="checkbox" className="peer" /> 
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-extrabold">
                  What is the Difference between state and props in React
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                 <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. </p>
                </div>
            </div>
            <div className="mt-5"></div>
           <div className="collapse">
            <input type="checkbox" className="peer" /> 
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-extrabold">
                    What is the uses of useEffect except calling API?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                    <p>
                        <li>Running on state change: validating input field</li>
                        <li>Running on state change: live filtering</li>
                        <li>Running on state change: trigger animation on new array value</li>
                        <li>Running on props change: update paragraph list on fetched API data update</li>
                 </p>
                </div>
            </div>
        </div>
    );
};

export default Questions;
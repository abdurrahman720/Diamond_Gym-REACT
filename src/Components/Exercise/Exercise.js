import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Sidebar from '../Sidebar/Sidebar';
import './Exercise.css';
// import '../../../public/gym.json'

const Exercise = () => {
    const [exercises, setExercise] = useState([]);
    
    useEffect(() => {
        fetch(`https://mocki.io/v1/b2af8258-d97d-49ff-8da5-fc3512e3e373`)
            .then(res => res.json())
            .then(data => setExercise(data));
        
    
}, [exercises]);

    return (
            <div className="container flex flex-col md:flex-row justify-evenly ">
                <div className="left-side w-5/6">
                    <div className="text-xl mx-10">
                    <h2 className="font-extrabold">Diamond Gym</h2>
                    <h4 className="font-light">Select your exercise</h4>
                    </div>
            <div className="exercises grid grid-cols-1 grid-row-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    exercises.map(exercise =>
                        <Cards exercise={exercise} key={exercise.id}></Cards>
                    
                      
                    )
                }
                </div>
               
            </div>
                <div className="right-side w-1/6 mx-5">
                    <div className="Sidebar w-full mx-5">
                        <Sidebar></Sidebar>
                    </div>
                </div>
        </div>
    
    );
};

export default Exercise;
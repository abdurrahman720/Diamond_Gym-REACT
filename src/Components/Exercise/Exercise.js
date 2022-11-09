import React, { useEffect, useState } from 'react';
import './Exercise.css';
// import '../../../public/gym.json'

const Exercise = () => {
    const [exercise, setExercise] = useState([]);
    
    useEffect(() => {
        fetch(`https://mocki.io/v1/b2af8258-d97d-49ff-8da5-fc3512e3e373`)
            .then(res => res.json())
            .then(data => setExercise(data));
        
    
}, [exercise]);

    return (
        <div>
            
        </div>
    );
};

export default Exercise;
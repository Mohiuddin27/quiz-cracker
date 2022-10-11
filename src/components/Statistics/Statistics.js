import React from 'react';
import {useLoaderData} from 'react-router-dom';

const Statistics = () => {
    const quizs= useLoaderData();
    const quiztime=quizs.data;
    return (
        <div>
            <h3>This is Statistics components</h3>
        </div>
    );
};

export default Statistics;
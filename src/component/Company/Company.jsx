import React from 'react';
import './Company.css'

const Company = ({comdata}) => {
    return (
        <div>
            <h1 className='semi_headline'> {comdata.category_name} </h1>
            <h1> {comdata.jobs_available} jobs available</h1>

        </div>
    );
};

export default Company;
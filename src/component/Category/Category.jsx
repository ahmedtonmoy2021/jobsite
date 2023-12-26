import './Category.css'
import React, { useEffect, useState } from 'react';
import Company from '../Company/Company';

const Category = () => {
    const [companies , setCompany] = useState([]);

    useEffect ( () => {
        fetch('company.json')
        .then(res=> res.json())
        .then(data => setCompany(data))
    } , [])

    return (
        <div>
            <div>
            <h2 className='heading'>Job Category List</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='container'>
            {
                companies.map(comdata => <Company
                key={comdata.id}
                comdata= {comdata}
                ></Company> )
            }
            </div>
        </div>
    );
};

export default Category;
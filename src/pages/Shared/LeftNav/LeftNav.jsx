import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories,setCategories] =useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/categories')
        .then(res =>res.json())
        .then(data =>setCategories(data))
        .catch(error =>console.error(error))
    },[])
    return (
        <div>
            <h2>All categories </h2>
            {
                categories.map(categori => <p
                key={categori.id}

                >
                    <Link to={`/category/${categori.id}`} className='text-black text-decoration-none'>{categori.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftNav;
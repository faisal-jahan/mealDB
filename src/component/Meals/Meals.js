import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Meals = ({handleCart}) => {

    const [meals,setMeals] = useState([])

    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    },[]);

    return (
        <div className='md:col-span-3'>
            <Meal key={meals.idMeal} meals={meals} handleCart={handleCart}></Meal>
        </div>
    );
};

export default Meals;
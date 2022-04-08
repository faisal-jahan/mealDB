import { ShoppingBagIcon } from '@heroicons/react/solid';
import React from 'react';

const Meal = ({meals,handleCart}) => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:justify-items-center gap-5'>
            {
                meals.map( meal => 
                    <div className='p-3 rounded text-center bg-lime-100'>
                        <img src={meal.strMealThumb} alt=""/>
                        <p className='text-xl py-2'>{meal.strMeal}</p>
                        <p>{meal.strInstructions.slice(0,100)}</p>
                        
                        <div className='justify-items-center'>
                            <button onClick={()=>handleCart(meal)} className='mx-auto px-10 py-1 mt-2 rounded-full bg-orange-400 text-white hover:bg-sky-700 duration-300 flex absolu'><ShoppingBagIcon className='w-5'></ShoppingBagIcon>Add Me</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Meal;
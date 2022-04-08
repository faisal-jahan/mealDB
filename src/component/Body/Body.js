
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Meals from '../Meals/Meals';

const Body = () => {

    const [cart, setCart] = useState([]);

    const handleCart = meal => {
        const duplicateItem = cart.find(item=>item.idMeal === meal.idMeal);

        if(duplicateItem){
            const duplicateItem = cart.map( item=> item.idMeal===meal.idMeal ? {...item, qty: item.qty + 1} : item);
            // const updateqty = [...cart,{...duplicateItem,qty:meal.qty+1}]
            setCart(duplicateItem)
        }
        else{
            meal = {...meal,qty:1}
            setCart([...cart,meal])
        }
    }

    const emptyCart=()=>{
        const newCart=[];
        setCart(newCart)
    }

    const deleteItem = item =>{

        const meal = cart.find(cartItem=>cartItem.idMeal === item.idMeal);

        if(meal.qty === 1){
            setCart(cart.filter(cartProducts => cartProducts.idMeal !== item.idMeal))
        }
        else{
            const meals = cart.map(product=> product.idMeal === item.idMeal ? {...item,qty:item.qty - 1} : product)
            setCart(meals);
        }
        
    }

    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 sm:justify-items-center md:gap-5 p-5'>
            <Meals handleCart={handleCart}></Meals>
            <Cart cart={cart} emptyCart={emptyCart} deleteItem={deleteItem}></Cart>
        </div>
    );
};

export default Body;
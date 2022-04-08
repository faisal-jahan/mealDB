import React from "react";

const Cart = ({ cart,emptyCart }) => {
  return (
    <div className="bg-slate-500 sm:w-full p-3 sm:col-span-full md:col-auto sm:mt-3">
      <h1 className="text-3xl text-center">Cart</h1>
      <div className="p-5">
        <table className="w-full">
          <tr className="text-left">
            <th>Images</th>
            <th>Item Name</th>
            <th>Item Qty</th>
          </tr>
          {cart.map((product) => (
            <tr>
                <td className="text-center">
                    <img className="w-10 rounded-full" src={product.strMealThumb} alt="" />
                </td>
                <td>
                    {product.strMeal}
                </td>
                <td>
                    {product.qty}
                </td>
            </tr>
          ))}
        </table>
      </div>
      <div>
          <button className="w-full bg-lime-200 px-5 py-3 rounded" onClick={()=>emptyCart()}>Empty Cart</button>
      </div>
    </div>
  );
};

export default Cart;

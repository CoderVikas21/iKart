import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {decrement, remove, subAmount} from '../redux/slices/cartslice'


const CartItem = ({item}) => {

  const dispatch = useDispatch();

  function deleteitem(){
      dispatch(decrement());
      dispatch(remove(item.id));
      dispatch(subAmount(item.price));
  }

  return (
    <>
      <div className="item_container">
        <div className="itemImage">
            <img src={item.image} />
        </div>
        <div className="itemInfo">
            <div className="title auto">
                <p>{item.title}</p>
            </div>
            <div className="desc">
                <p>{item.description}</p>
            </div>
            <br />
            <div className="cart_bottom">
                <div className='price auto'>
                    <p>${item.price}</p>
                </div>
                <div className="delete_item">
                    <button onClick={deleteitem}>
                    <MdDelete />
                    </button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default CartItem

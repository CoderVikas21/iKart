import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { increment,decrement,add,remove,addAmount,subAmount} from '../redux/slices/cartslice';


const Card = ({post}) => {

    const dispatch = useDispatch();

    function removefromcart(){
        toast.error("Item Removed"),
        dispatch(decrement()),
        dispatch(remove(post.id)),
        dispatch(subAmount(post.price))
    }

    function addtocart(){
        toast.success("Added to Cart"),
        dispatch(increment()),
        dispatch(add(post)),
        dispatch(addAmount(post.price))
        }

    const [added , setAdded] = useState(false);
    function addhandler(){
        added? (removefromcart()) : (addtocart())
        setAdded(!added)
    }
    let title = post.title.substring(0,20)+'...'
    let desc  = post.description.substring(0,60)+'...'

  return (
    <>
    <div className="card_container">
        <div className="title">
            <p>{title}</p>
        </div>
        <div className="desc"> 
            <p>{desc}</p>
        </div>
        <div className="image margin">
            <img src={post.image}/>
        </div>
        <div className="price-add margin">
        <div className="price">
            <p>${post.price}</p>
        </div>
        <div>
            <button onClick={addhandler}>
                {
                    added? "Remove Item" : "Add to Cart"
                }
            </button>
        </div>
        </div>
    </div> 
    </>
    )
}
export default Card

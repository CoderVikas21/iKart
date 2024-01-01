import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import Card from '../components/Card'

const Home = () => {
  const apiUrl = "https://fakestoreapi.com/products/";
  const [loading , setLoading]  = useState(false);
  const [posts,setPosts] = useState([]);

  async function fetchdata(){
    setLoading(true);
    try{
    const res = await fetch(apiUrl);
    const data = await res.json();
    setPosts(data);
    }
    catch(e){
      console.log("Error Occured");
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchdata();
  },[])

  return (
    <>
      <div className="home_container">
          {
          loading? (<Spinner/> ):(
              posts.length > 0? (
                posts.map((post)=>{
                  return (
                    <Card key={post.id} post = {post}/>
                  )
                })
              ):
              (
                <div className='empty_cart'>
                  <p>No Post Found</p>
                </div>
              )
          )
          }
      </div>
    </>
  )
}

export default Home

import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import Card from '../components/Card'
import LoadingBar from 'react-top-loading-bar'

const Home = () => {
  const apiUrl = "https://fakestoreapi.com/products/";
  const [loading , setLoading]  = useState(false);
  const [posts,setPosts] = useState([]);
  const [progress, setProgress] = useState(0);

  async function fetchdata(){
    setProgress(50);
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
    setProgress(100);
  }

  useEffect(()=>{
    fetchdata();
  },[])

  return (
    <>
    <LoadingBar
        className='loadingbar'
        color='red'
        progress={progress}
        shadow = "true"
        onLoaderFinished={() => setProgress(0)}
      />
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

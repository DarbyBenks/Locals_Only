import React from 'react'
import { useEffect, useState} from 'react'
import {useLocation} from "react-router-dom"



function SinglePost() {
  const {state} = useLocation()
  const [post, setPost] = useState([])


    useEffect(() => {
        fetch(`/posts/${state.id}`)
        .then(res => res.json())
        .then(data => setPost(data))
        .catch(err => console.log(err))
      }, [])

        // return(
        //   <div className="singlePost">
        //     <h1>{post.title}</h1>
        //     <img className="postImages" src={post.img_url} alt={post.title} />
        //     <p>{post.description}</p>
        //   </div>
        // )
      


    return(
      <div className="singlePostDiv">
        <h1 id='singlePost'>{post.title}</h1>
        <p1 id="singlePostLocation">{post.location}</p1>
        <img className="singlePostImage" src={post.img_url} alt={post.title} />
        <p id="singlePostDescription">{post.description}</p>
      </div>
    )
}

export default SinglePost
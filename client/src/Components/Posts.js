import { useEffect } from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'



function Posts(){
  let navigate = useNavigate()
const [posts, setPosts] = useState([]);


  useEffect(() => {
    fetch('/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
    .catch(err => console.log(err))
  }, [])

  const displayPosts = posts.map(
    post => {
    return (
    <div onClick={() => {navigate(`/single`, {state: {id: post.id}})}} className="posts" key={post.id}> 
    <h1 id={post.id} className="postTitle"> {post.title} </h1>
    <img className="postImages" id='imagesPost' src={post.img_url} alt={post.title} />
    </div>

    )})

  return(
    <div id='postsPage'>
        <p>{displayPosts}</p>
    </div>
  )
}


export default Posts
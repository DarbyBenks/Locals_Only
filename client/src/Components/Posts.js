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
    <h1 id={post.id}> {post.title} </h1>
    <img className="postImages" src={post.img_url} alt={post.title} />
    </div>

    )})

  return(
    <div>
      <h1>Posts</h1>
        {displayPosts}
    </div>
  )
}


export default Posts
import React from 'react'
import './Posts.css'
import {getTimelinePosts} from '../../actions/postAction'
import Post from '../Post/Post'
import { useDispatch, useSelector  } from 'react-redux'
import { useEffect } from 'react'
const Posts = () => {

const dispatch = useDispatch()
const {user} = useSelector((state)=> state.authReducer.authData)
const {posts , loading} = useSelector((state)=>state.postReducer)
 
 useEffect(()=>{
  dispatch(getTimelinePosts(user._id))
 },[])

return (
    <div className="Posts">
        {loading ? "fetching post...." : 
        posts.map((post, id)=>{
            return <Post data={post} id={id}/>
        })}
    </div>
  )
}

export default Posts
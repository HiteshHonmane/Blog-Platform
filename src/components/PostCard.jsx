import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {

  return (
   <Link to={`/post/${$id}`}>
    <div className= '  sm:w-full h-full sm:h-full bg-gray-700 rounded-xl p-4 '>
        <div className='w-full justify-center flex sm:flex-col mb-4'>
            <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
            className='rounded-xl sm:h-[10vw] ' />
        </div>
        <h2 className='relative bottom-0 sm:text-[20px] font-bold text-gray-300'>
            {title}
        </h2>
    </div>
   </Link>
  )
}

export default PostCard
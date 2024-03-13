import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {

  return (
   <Link to={`/post/${$id}`}>
    <div className='w-full h-full bg-gray-100 rounded-xl p-4 '>
        <div className='w-full justify-center flex flex-col mb-4'>
            <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
            className='rounded-xl h-[10vw] ' />
        </div>
        <h2 className='relative bottom-0 text-xl font-bold'>
            {title}
        </h2>
    </div>
   </Link>
  )
}

export default PostCard
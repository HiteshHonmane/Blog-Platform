import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage, content}) {

    

  return (
   <Link to={`/post/${$id}`}>
    <div className="max-w-sm relative bg-white border border-gray-200 rounded-lg shadow ">
  <a href="#">
   <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
            className='rounded-xl h-[16vh] sm:h-[] sm:w-full w-full ' />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 h-[6vh] sm:h-full text-base font-bold tracking-tight text-gray-900 ">
        {title}
      </h5>
    </a>
    
    <a
      href="#"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Read more
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  </div>
</div>
   </Link>
  )
}

export default PostCard
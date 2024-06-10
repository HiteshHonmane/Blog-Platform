import React from 'react';
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';

function PostCard({ $id, title, featuredImage, content }) {
  const sanitizedContent = DOMPurify.sanitize(content);

  return (
    <Link to={`/post/${$id}`}>
   <div className="flex flex-col sm:flex-row min-w-[592px] gap-6">
    <img className="min-w-[326px] sm:min-w-[326px] sm:w-80 xl:w-[326px] h-auto sm:h-[200px] xl:h-[228px] object-cover" src={appwriteService.getFilePreview(featuredImage)} />
    <div className="flex flex-col justify-start items-start gap-6 flex-grow">
        <div className="w-full flex flex-col justify-start items-start gap-3">
            <div className="w-full text-violet-700 text-sm font-semibold font-['Inter'] leading-tight"> 
                {/* date */}
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-2 md:gap-4">
                <div className="w-full h-[50px] text-zinc-900 text-lg sm:text-2xl font-semibold font-['Inter'] xl:leading-7 sm:leading-loose">
                    {title}
                </div>
                <div className="w-full h-[90px] text-gray-500 text-base font-normal font-['Inter'] leading-normal overflow-hidden" dangerouslySetInnerHTML={{ __html: sanitizedContent }}></div>
            </div>
        </div>
        <div className="w-full flex justify-start items-start gap-2">
            <div className="px-2.5 py-0.5 bg-purple-50 rounded-2xl flex justify-center items-center">
                <div className="text-center text-violet-700 text-sm font-medium font-['Inter'] leading-tight">Design</div>
            </div>
            <div className="px-2.5 py-0.5 bg-indigo-50 rounded-2xl flex justify-center items-center">
                <div className="text-center text-indigo-700 text-sm font-medium font-['Inter'] leading-tight">Research</div>
            </div>
            <div className="px-2.5 py-0.5 bg-pink-50 rounded-2xl flex justify-center items-center">
                <div className="text-center text-pink-700 text-sm font-medium font-['Inter'] leading-tight">Presentation</div>
            </div>
        </div>
    </div>
</div>

    </Link>
  );
}

export default PostCard;

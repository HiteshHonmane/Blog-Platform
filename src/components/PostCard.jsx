import React from 'react';
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';

function PostCard({ $id, title, featuredImage, content }) {
  const sanitizedContent = DOMPurify.sanitize(content);

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-[592px] h-[200px] justify-start items-start gap-6 inline-flex">
        <img
          src={appwriteService.getFilePreview(featuredImage)}
          alt={title}
          className='w-80 h-[200px] relative'
        />
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
          <div className="self-stretch h-[140px] flex-col justify-start items-start gap-3 flex">
            <div className="self-stretch text-violet-700 text-sm font-semibold font-['Inter'] leading-tight">
              
            </div>
            <div className="self-stretch h-[108px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-zinc-900 text-lg font-semibold font-['Inter'] leading-7">
                {title}
              </div>
              <div 
                className="self-stretch w-full  h-full text-gray-500 text-base font-normal font-['Inter'] leading-normal  overflow-hidden  "
                dangerouslySetInnerHTML={{ __html: sanitizedContent }}  
              />
            </div>
          </div>
          <div className="self-stretch justify-start items-start gap-2 inline-flex">
            <div className="mix-blend-multiply justify-start items-start flex">
              <div className="px-2.5 py-0.5 bg-sky-50 rounded-2xl justify-center items-center flex">
                <div className="text-center text-sky-700 text-sm font-medium font-['Inter'] leading-tight">
                 IT
                </div>
              </div>
            </div>
            <div className="mix-blend-multiply justify-start items-start flex">
              <div className="px-2.5 py-0.5 bg-pink-50 rounded-2xl justify-center items-center flex">
                <div className="text-center text-pink-700 text-sm font-medium font-['Inter'] leading-tight">
                  Tech
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;

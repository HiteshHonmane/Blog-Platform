import React from 'react';
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import longimg from '/longimg.svg'

function PostCard2({ $id, title, featuredImage, content }) {
  const sanitizedContent = DOMPurify.sanitize(content);

  return (
    <Link to={`/post/${$id}`}>
<div className="w-[834px] h-[460px] py-[30px] flex-col justify-start items-start gap-16 inline-flex">
    <div className="self-stretch h-[400px] px-8 flex-col justify-start items-start gap-8 flex">
        <div className="self-stretch h-[400px] flex-col justify-start items-start gap-8 flex">
            <div className="self-stretch h-[400px] flex-col justify-start items-start gap-6 flex">
                <img className="min-w-[834px] min-h-[288px] max-w-[834px] h-[288px] relative" src={longimg} />
                <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch h-[172px] flex-col justify-start items-start gap-3 flex">
                        <div className="self-stretch text-violet-700 text-sm font-semibold font-['Inter'] leading-tight">Sunday , 1 Jan 2023</div>
                        <div className="self-stretch justify-start items-start gap-4 inline-flex">
                            <div className="grow shrink basis-0 text-zinc-900 text-2xl font-semibold font-['Inter'] leading-loose">Grid system for better Design User Interface</div>
                            <div className="pt-1 flex-col justify-start items-start inline-flex">
                                <div className="w-6 h-6 relative" />
                            </div>
                        </div>
                        <div className="self-stretch text-gray-500 text-base font-normal font-['Inter'] leading-normal">A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.</div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-2 inline-flex">
                        <div className="mix-blend-multiply justify-start items-start flex">
                            <div className="px-2.5 py-0.5 bg-purple-50 rounded-2xl justify-center items-center flex">
                                <div className="text-center text-violet-700 text-sm font-medium font-['Inter'] leading-tight">Design</div>
                            </div>
                        </div>
                        <div className="mix-blend-multiply justify-start items-start flex">
                            <div className="px-2.5 py-0.5 bg-pink-50 rounded-2xl justify-center items-center flex">
                                <div className="text-center text-pink-700 text-sm font-medium font-['Inter'] leading-tight">Interface</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </Link>
  );
}

export default PostCard2;

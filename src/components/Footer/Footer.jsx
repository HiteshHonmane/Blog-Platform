import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <div className="w-[100vw] flex items-center bottom-0 absolute h-auto mt-28  bg-white  justify-center ">
    <div className="w-[1216px] justify-start items-center gap-3.5 inline-flex">
        <div className="text-zinc-900 text-xl font-normal font-['Inter'] leading-normal">© 2024</div>
        <div className="justify-start items-start gap-3.5 flex">
            <div className="text-zinc-900 text-xl font-normal font-['Inter'] leading-normal">Twitter </div>
            <div className="text-zinc-900 text-xl font-normal font-['Inter'] leading-normal">LinkedIn</div>
            <div className="text-zinc-900 text-xl font-normal font-['Inter'] leading-normal">Email</div>
            <div className="text-zinc-900 text-xl font-normal font-['Inter'] leading-normal">RSS feed</div>
            <div className="text-zinc-900 text-xl font-normal font-['Inter'] leading-normal">Add to Feedly</div>
        </div>
    </div>
</div>

  )
}

export default Footer;

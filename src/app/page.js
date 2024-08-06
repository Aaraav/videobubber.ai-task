"use client";

import Header from "@/components/Header";
import Upvote from "@/components/Upvote";
import Image from "next/image";
import { useState } from 'react';

export default function Home() {
  const [showUpvote, setShowUpvote] = useState(false);

  const handleUpvoteClick = () => {
    setShowUpvote(x=>!x);
  };

  return (
    <div className="relative items-center justify-center">
      <Header />
      <div className="w-full h-[300px] items-start justify-start">
        <h3 className='text-md ml-[25%] mt-10'>Home &gt; Product &gt; Videodubber-Fast video translator </h3>
        <Image 
          src="https://ph-files.imgix.net/3153ed76-d013-4a2b-a7ac-f2f4cbfc3cc4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=1"
          alt="Videodubber Logo"
          width={72}
          height={72}
          className="ml-[25%] mt-5"
        />
        <div className="ml-[25%] mt-12">
          <h1 className="font-bold text-2xl">VideoDubber-Fast Video Translator</h1>
          <div className="w-full h-20 flex mt-5">
            <p className="text-gray-400 text-2xl items-center justify-center">Translate videos in your own voice,<br /> globalize in a click!</p>
            <button className="ml-10 text-black border-2 font-bold py-2 px-4 rounded h-12" onClick={handleUpvoteClick}>
              Visit
            </button>
            <button className="bg-orange-500 ml-10 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded h-12 w-[150px]" onClick={handleUpvoteClick}>
              Upvote53
            </button>
          </div>
        </div>
      </div>
      {showUpvote && (
        <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center">
          <Upvote />
        </div>
      )}
      <div className="w-full flex items-center justify-center">
        <p className="text-sm"><span className="text-orange-400 text-lg mr-4">PHAnnual</span>
        Copied!
        •
        Free Options</p>
        <ul className="flex ml-[18%] space-x-4 text-sm">
          <li>Discuss</li>
          <li>Collect</li>
          <li>Share</li>
          <li>Stats</li>
        </ul>
      </div>
      <p className="w-[55%] text-left text-sm ml-[25%] mt-4">Translate video in one click with AI to 150+ languages &amp; accents in original voice. Prime features: 1. 0.1 USD/min for premium video translation with voice cloning 2. Unlimited Editing 3. Exports MP4/SRT/MP3</p>
      <p className="w-[55%] text-left text-sm ml-[25%] mt-4 space-x-3">Launched in 
        <span className="bg-blue-300 rounded-lg px-3 py-2">Languages</span>
        <span className="bg-blue-300 rounded-lg px-3 py-2">Artificial Intelligence</span>
        <span className="bg-blue-300 rounded-lg px-3 py-2">Video</span>
      </p>
      <div className="w-[50%] ml-[25%] items-center h-20 flex mt-14 border-2">
        <p className="text-gray-400 text-xl items-center justify-center">Maker Shoutouts<br />We couldn&apos;t have built this without...</p>
        <Image 
          src="https://ph-files.imgix.net/2ac55d3a-eb08-44f4-ab25-721c75f14dc0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=34&h=34&fit=crop&dpr=1" 
          alt="Shoutout 1"
          width={34}
          height={34}
          className="w-10 h-10 ml-10"
        />
        <Image 
          src="https://ph-files.imgix.net/37d77c0c-f875-49bc-a840-a347e9ee4a5f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=34&h=34&fit=crop&dpr=1"
          alt="Shoutout 2"
          width={34}
          height={34}
          className="w-10 h-10"
        />
        <Image 
          src="https://ph-files.imgix.net/7a01a00b-d41d-4367-b44e-e1d0a672819b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=34&h=34&fit=crop&dpr=1"
          alt="Shoutout 3"
          width={34}
          height={34}
          className="w-10 h-10"
        />
        <button className="ml-10 text-black border-2 font-bold py-2 px-4 rounded h-12 w-[150px]">
          ShowMore
        </button>
      </div>
      <p className="w-[55%] text-left text-sm ml-[33%] mt-4">Please, confirm your email address (your email) to join the discussion 😺</p>
    </div>
  );
}

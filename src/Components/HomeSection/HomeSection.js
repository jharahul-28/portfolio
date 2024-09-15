import React from 'react'
import Profile from './Profile';
import Image from 'next/image';
import selfPortrait from "@/app/images/selfPortrait.png";

const HomeSection = () => {
    const profiles= ["linkedin", "leetcode", "github"];
  return (
    <div className='flex flex-row justify-evenly my-12'>
        <div>
            <div>
                <p className='text-xl'>Welcome to my website</p>
                <p className='text-3xl'>Hi, I am <span className='text-contrastYellow'>Rahul Jha</span></p>
                <p className='text-xl'>a developer.</p>
                <p className='my-8 text-sm'>I am a dedicated B.Tech student with a fervent ,<br />
                    passion for technology. Proficient in <b>web development <br />
                    and competitive programming,</b> with a solid <br />
                    understanding of  <b>Data Structures and Algorithms</b> <br />
                    for effective problem-solving. Recognized for collaborative <br />
                    teamwork and innate leadership skills. <br />
                </p>
            </div>
            <span className='flex flex-row justify-start align-middle w-min'>
                {profiles.map((profile)=>(
                    <span className='rounded-lg p-4 flex flex-col justify-center align-middle' key={profile}>
                        <Profile value={profile}></Profile>
                    </span>
                ))}
            </span>
        </div>
        {/* <div className='rounded-full bg-gradient-to-t from-black to-zinc-950 flex flex-row justify-center align-middle'> */}
        <div className='rounded-full flex flex-row justify-center align-middle'>
            <Image src={selfPortrait} className='h-64 w-full'/>
        </div>
    </div>
  )
}

export default HomeSection
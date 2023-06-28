import React from 'react';
import Image from 'next/image';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';


export default function SummaryContent(){
  return (
    <div className='text-center p-10 row-auto'>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ borderRadius: '50%', overflow: 'hidden', width: '200px', height: '200px', }}>
        <Image
          src="/Steven Liu.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </div>

    <div className=' bg-gradient-to-tr from-slate-50 to-slate-400 h-auto p-5 rightQuaterSize mt-10 rounded-md'>
      <h2 className='text-3xl py-2 text-black font-bold'>Hongyuan (Steven) Liu</h2>
      <h3 className='text-xl text-gray-500 mb-4'>Softwore/Mobile App Developer & Data Scientist</h3>
      <div className='flex justify-center my-2'>
        <ul className='flex items-center'>
          <li><AiOutlineMail className='text-2xl text-black mr-2' /></li>
          <li><p>liuhongyuan2001@gmail.com</p></li>
        </ul>
      </div>

      <div className='flex justify-center my-2'>
        <ul className='flex items-center'>
          <li><GrLocation className='text-2xl text-black mr-2' /></li>
          <li><p>1000 portage pkwy, Vaughan ON</p></li>
        </ul>
      </div>

      <div className='flex justify-center my-2'>
        <ul className='flex items-center'>
          <li><AiOutlinePhone className='text-2xl text-black mr-2' /></li>
          <li><p>647-309-9649</p></li>
        </ul>
      </div>

      <p className='text-md mb-2 mt-4 leading-8 text-gray-800'>
        An ambitious and dedicated third-year undergraduate student at the University of Toronto, with GPA 3.9/4.0. Currently working as a Cloud and Mobile App Co-op developer at Johnson Controls and serving as President of the University of Toronto Tutoring Club. I am actively contributing to a diverse range of 10+ projects, software business startups, over 1000+ contribution on github.
      </p>
    </div>

  </div>
  );
};

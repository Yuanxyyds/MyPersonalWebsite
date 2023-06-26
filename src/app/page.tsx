"use client";
import Image from 'next/image';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { useState } from 'react';


export default function Home() {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    if (activeTab === 'tab1') {
      return getProjectContent();
    } else if (activeTab === 'tab2') {
      return getProjectContent();
    }
  }

  return (
    <main className='bg-white'>
      <section className='min-h-screen'>
        {/* Start of the navigation bar */}
        <nav className='py-5 flex justify-between px-10'>
          <h1 className='text-xl font-burtons'>developedbyed</h1>
          <ul className='flex items-center'>
            <li>
              <a href='https://github.com/Yuanxyyds'>
                <AiFillGithub className='cursor-pointer text-2xl flex justify-center text-black' />
              </a>
            </li>
            <li>
              <a href='#'>
                <AiFillLinkedin className='cursor-pointer text-2xl flex justify-center ml-8 text-blue-600' />
              </a>
            </li>
            <li>
              <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='#'>
                Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* The main container with bg image */}
        <div className=' content-container max-h-screen'>
          {/* Two Rows */}
          <div className="flex justify-between ">
            {/* First Row */}

            <div className="bg-gray-200 leftrow-container"> <div className='flex justify-center py-3'>
              <button
                className={`px-4 py-2 rounded-md ${activeTab === 'tab1' ? 'bg-gray-200' : 'bg-gray-100'
                  }`}
                onClick={() => handleTabChange('tab1')}
              >
                Tab 1
              </button>
              <button
                className={`px-4 py-2 rounded-md ${activeTab === 'tab2' ? 'bg-gray-200' : 'bg-gray-100'
                  } ml-4`}
                onClick={() => handleTabChange('tab2')}
              >
                Tab 2
              </button>
            </div>
              {renderContent()}</div>

            {/* Second Row */}
            <ul className='rightrow-container'>
              <div className='text-center p-10'>
                <h2 className='text-5xl py-2 text-teal-600 font-medium'>Hongyuan Liu</h2>
                <h3 className='text-2xl py-2'>Developer and designer</h3>
                <p className='text-md py-5 leading-8 text-gray-800'>
                  Hello everyone, welcome to my personal website. Hello everyone, welcome to my personal website. Hello everyone,
                  welcome to my personal website. Hello everyone, welcome to my personal website.
                </p>
              </div>

            </ul>
          </div>
        </div>


      </section>
    </main>
  );

}

function getProjectContent() {
  return (<div className='text-center p-10'>
    <h2 className='text-3xl py-2'>Tab 1 Content</h2>
    <p>Content for Tab 1 goes here...</p>
  </div>);
}

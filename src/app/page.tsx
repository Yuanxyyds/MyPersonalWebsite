"use client";
import Image from 'next/image';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { useState } from 'react';


export default function Home() {
  const [activeTab, setActiveTab] = useState('summary');

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
        <nav className='bg-black py-5 flex justify-between px-10'>
          <h1 className='text-xl font-burtons text-white'>Welcome to my personal website!</h1>
          <ul className='flex items-center'>
            <li>
              <a href='https://github.com/Yuanxyyds'>
                <AiFillGithub className='cursor-pointer text-3xl flex justify-center text-white' />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/hongyuan-steven-liu/'>
                <AiFillLinkedin className='cursor-pointer text-3xl flex justify-center ml-8 text-blue-800' />
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
        <div className=' content-container'>
          {/* Two Rows */}
          <div className="flex justify-between">
            {/* First Row */}

            <div className=" bg-white leftrow-container p-10">
              <h1 className='text-center mb-4 font-extrabold'> About Me</h1>
              <div className='flex flex-col rounded-md' style={{ border: '1px solid black' }}>

                <button
                  className={`px-4 py-2 rounded-t-md  ${activeTab === 'summary' ? 'bg-blue-500' : 'bg-gray-100'
                    }`}
                  onClick={() => handleTabChange('summary')}
                >Summary
                </button>

                <button
                  className={`px-4 py-2 ${activeTab === 'tab2' ? 'bg-blue-500' : 'bg-gray-100'
                    }`}
                  onClick={() => handleTabChange('tab2')}
                >Tab 2
                </button>

                <button
                  className={`px-4 py-2  ${activeTab === 'tab3' ? 'bg-blue-500' : 'bg-gray-100'
                    }`}
                  onClick={() => handleTabChange('tab3')}
                >Tab 3
                </button>

                <button
                  className={`px-4 py-2 rounded-b-md ${activeTab === 'tab4' ? 'bg-blue-500' : 'bg-gray-100'
                    }`}
                  onClick={() => handleTabChange('tab4')}
                >Tab 4
                </button>

              </div>
            </div>

            {/* Second Row */}
            <ul className='rightrow-container'>
              <div className='text-center p-10'>
                <div className=' text-center' style={{ borderRadius: '50%', overflow: 'hidden', width: '100px', height: '100px' }}>
                  <Image
                    src="/Steven Liu.jpg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                  />
                </div>

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

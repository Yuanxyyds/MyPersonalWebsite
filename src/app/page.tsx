"use client";
import Image from 'next/image';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';
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
        <nav className='bg-black py-5 flex justify-between px-10 minWidthNavBar'>
          <h1 className='text-xl font-burtons text-white'>Welcome to my personal website!</h1>
          <ul className='flex items-center'>
            <li>
              <a href='https://github.com/Yuanxyyds'>
                <AiFillGithub className='cursor-pointer text-3xl flex justify-center text-white' />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/hongyuan-steven-liu/'>
                <AiFillLinkedin className='cursor-pointer text-3xl flex justify-center ml-8 fill-white' />
              </a>
            </li>
            <li>
              <a className='bg-gray-800 text-white px-4 py-2 rounded-md ml-8' href='#'>
                Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* The main container with bg image */}
        <div className=' background-container'>
          {/* Two Rows */}
          <div className="flex justify-between">
            {/* First Row */}

            <div className=" bg-white leftrow-container p-10">
              {/* Learn About Me */}
              <h1 className='text-center mb-4 font-bold font-burtons text-lg'> Learn About Me :)</h1>
              <div className='flex flex-col rounded-md' style={{ border: '1px solid black' }}>

                <button
                  className={`px-4 py-2 text-sm rounded-t-md  ${activeTab === 'summary' ? 'bg-blue-500' : 'bg-gray-100'
                    }`} style={{ borderBottom: '1px solid black' }}
                  onClick={() => handleTabChange('summary')}
                >Overall Summary
                </button>

                <button
                  className={`px-4 py-2 text-sm ${activeTab === 'skill' ? 'bg-blue-500' : 'bg-gray-100'
                    }`} style={{ borderBottom: '1px solid black' }}
                  onClick={() => handleTabChange('skill')}
                >Skill Summary
                </button>

                <button
                  className={`px-4 py-2 text-sm ${activeTab === 'experience' ? 'bg-blue-500' : 'bg-gray-100'
                    }`} style={{ borderBottom: '1px solid black' }}
                  onClick={() => handleTabChange('experience')}
                >Work Experience
                </button>

                <button
                  className={`px-4 py-2 text-sm rounded-b-md  ${activeTab === 'project' ? 'bg-blue-500' : 'bg-gray-100'
                    }`} 
                  onClick={() => handleTabChange('project')}
                >Project Experience
                </button>
              </div>

              {/* Mobile App Development */}
              <h1 className='text-center mb-4 font-bold font-burtons text-lg mt-10'> Mobile App Series</h1>
              <div className='flex flex-col rounded-md' style={{ border: '1px solid black' }}>

                <button
                  className={`px-4 py-2 text-sm rounded-t-md  ${activeTab === 'campusEat2' ? 'bg-blue-500' : 'bg-gray-100'
                    }`} style={{ borderBottom: '1px solid black' }}
                  onClick={() => handleTabChange('campusEat2')}
                >Campus Eats 2.0
                </button>

                <button
                  className={`px-4 py-2 text-sm ${activeTab === 'campusEat1' ? 'bg-blue-500' : 'bg-gray-100'
                    }`} style={{ borderBottom: '1px solid black' }}
                  onClick={() => handleTabChange('campusEat1')}
                >Campus Eats 1.0
                </button>

                <button
                  className={`px-4 py-2 text-sm ${activeTab === 'utft' ? 'bg-blue-500' : 'bg-gray-100'
                    }`} style={{ borderBottom: '1px solid black' }}
                  onClick={() => handleTabChange('utft')}
                > Group Asoul - UofT Food Truck
                </button>

                <button
                  className={`px-4 py-2 rounded-b-md  text-sm ${activeTab === 'dtc' ? 'bg-blue-500' : 'bg-gray-100'
                    }`} 
                  onClick={() => handleTabChange('dtc')}
                > DTC
                </button>
              </div>

               {/* Web Development */}
               <h1 className='text-center mb-4 font-bold font-burtons text-lg mt-10'> Web Develop Series</h1>
              <div className='flex flex-col rounded-md' style={{ border: '1px solid black' }}>

                <button
                  className={`px-4 py-2 rounded-md text-sm  ${activeTab === 'personalweb' ? 'bg-blue-500' : 'bg-gray-100'
                    }`} 
                  onClick={() => handleTabChange('personalweb')}
                >Personal Website
                </button>
              </div>


                 {/* Data Science Project */}
                 <h1 className='text-center mb-4 font-bold font-burtons text-lg mt-10'> Data Science Project</h1>
              <div className='flex flex-col rounded-md' style={{ border: '1px solid black' }}>

                <button
                  className={`px-4 py-2 rounded-t-md text-sm  ${activeTab === 'greatlakes' ? 'bg-blue-500' : 'bg-gray-100'
                    }`} style={{ borderBottom: '1px solid black' }}
                  onClick={() => handleTabChange('greatlakes')}
                > Analyzing Great Lakes Pollution
                </button>

                <button
                  className={`px-4 py-2 rounded-b-md text-sm  ${activeTab === 'dsothers' ? 'bg-blue-500' : 'bg-gray-100'
                    }`} 
                  onClick={() => handleTabChange('dsothers')}
                > Other Data Science Projects
                </button>
              </div>

            </div>

            {/* Second Row */}
            <ul className='rightrow-container'>
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

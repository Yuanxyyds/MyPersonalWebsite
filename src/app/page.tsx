"use client";
import { AiFillGithub, AiFillLinkedin, } from 'react-icons/ai';
import { useState } from 'react';
import SkillContent from './pages/skill';
import SummaryContent from './pages/summary';


export default function Home() {
  const [activeTab, setActiveTab] = useState('summary');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const RenderContent = () => {
    if (activeTab === 'summary') {
      return <SummaryContent />;
    } else if (activeTab === 'skill') {
      return <SkillContent />;
    } else {
      return;
    }
  }

  return (
    <main className='font-poppin'>
      <section className='bg-black py-5 flex justify-between px-10 minWidthNavBar'>
        {/* Start of the navigation bar */}
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

      </section>

      {/* The main container with bg image */}
      <section className=' background-container flex'>
        {/* First Row */}
        <section className=" bg-white leftrow-container p-10">
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
              className={`px-4 py-2 text-sm ${activeTab === 'nlp' ? 'bg-blue-500' : 'bg-gray-100'
                }`} style={{ borderBottom: '1px solid black' }}
              onClick={() => handleTabChange('nlp')}
            > NLPS
            </button>

            <button
              className={`px-4 py-2 rounded-b-md text-sm  ${activeTab === 'dsothers' ? 'bg-blue-500' : 'bg-gray-100'
                }`}
              onClick={() => handleTabChange('dsothers')}
            > Other Data Science Projects
            </button>
          </div>

        </section>

        {/* Second Row */}
        <section className='rightrow-container'>
          <RenderContent />
        </section>

      </section>



    </main>
  );

}

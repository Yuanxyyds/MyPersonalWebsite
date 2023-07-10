"use client";
import { AiFillGithub, AiFillLinkedin, } from 'react-icons/ai';
import { useState } from 'react';
import SkillContent from './pages/skill';
import SummaryContent from './pages/summary';
import Link from 'next/link'


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
    <main className='font-poppin background-container'>
      <section className='bg-black py-5 flex justify-between px-10 minWidthNavBar'>
        {/* Start of the app bar */}
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
      <section className='flex'>
        {/* First Row */}
        <section className=" bg-gray-100 leftrow-container py-10 px-5">
          {/* Learn About Me */}
          <h1 className=' text-gray-700 mb-4 text-lg'> Learn About Me</h1>
          <div>
            <p
              className={`cursor-pointer mb-2 text-sm ${activeTab === 'summary' ? 'text-gray-800' : 'text-gray-400'
                }`}
              onClick={() => handleTabChange('summary')}
            >Overall Summary
            </p>
          </div>
          <div>
            <p
              className={`cursor-pointer mb-2 text-sm ${activeTab === 'skill' ? 'text-gray-800' : 'text-gray-400'
                }`}
              onClick={() => handleTabChange('skill')}
            >Skill Summary
            </p>
          </div>
          <div>
            <p
              className={`cursor-pointer mb-2  text-sm ${activeTab === 'experience' ? 'text-gray-800' : 'text-gray-400'
                }`}
              onClick={() => handleTabChange('experience')}
            > Experience
            </p>
          </div>

          {/* My Projects */}
          <h1 className=' text-gray-700 my-4 text-lg'> My Projects</h1>
          <div>
            <p
              className={`cursor-pointer mb-2 text-sm ${activeTab === 'project-campusEats' ? 'text-gray-800' : 'text-gray-400'
                }`}
              onClick={() => handleTabChange('project-campusEats')}
            >CampusEats
            </p>
          </div>
          <div>
            <p
              className={`cursor-pointer mb-2 text-sm ${activeTab === 'project-dtc' ? 'text-gray-800' : 'text-gray-400'
                }`}
              onClick={() => handleTabChange('project-dtc')}
            >DTC
            </p>
          </div>
          <div>
            <p
              className={`cursor-pointer mb-2  text-sm ${activeTab === 'project-web' ? 'text-gray-800' : 'text-gray-400'
                }`}
              onClick={() => handleTabChange('project-web')}
            > Personal Website
            </p>
          </div>
          <div>
            <p
              className={`cursor-pointer mb-2  text-sm ${activeTab === 'project-cs' ? 'text-gray-800' : 'text-gray-400'
                }`}
              onClick={() => handleTabChange('project-cs')}
            > Other CS course projects
            </p>
          </div>

          <div>
            <p
              className={`cursor-pointer mb-2  text-sm ${activeTab === 'project-lakes' ? 'text-gray-800' : 'text-gray-400'
                }`}
              onClick={() => handleTabChange('project-lakes')}
            > Analyzing Great Lakes Pollution
            </p>
          </div>

          <div>
            <p
              className={`cursor-pointer mb-2  text-sm ${activeTab === 'project-nlp' ? 'text-gray-800' : 'text-gray-400'
                }`}
              onClick={() => handleTabChange('project-nlp')}
            > Identify Abusive Clash Royale Tweets
            </p>
          </div>

          <div>
            <p
              className={`cursor-pointer mb-2  text-sm ${activeTab === 'project-nba' ? 'text-gray-800' : 'text-gray-400'
                }`}
              onClick={() => handleTabChange('project-nba')}
            > NBA2K Player Rating Predictions
            </p>
          </div>

          <div>
            <p
              className={`cursor-pointer mb-2  text-sm ${activeTab === 'project-ds' ? 'text-gray-800' : 'text-gray-400'
                }`}
              onClick={() => handleTabChange('project-ds')}
            > Other DS course projects
            </p>
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

import React from 'react';
import { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


export default function SkillContent() {
const [activeTab, setActiveTab] = useState('cs');

const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  if (activeTab === 'cs'){
    {/* Start of the CS Skill */}
    return (
        <div className='p-10'>
            <div className='container-stack'>
                <button className="rectangle bg-cyan-300 rounded-3xl">
                    <p className='box-center text-3xl text-black font-queensides font-bold mb-2'  onClick={() => handleTabChange('ds')}>Data Scientist Skills</p>
                
                </button>
                <button className="rectangle rounded-3xl">
                        <p className='box-center text-3xl text-black font-queensides font-bold mb-2'  onClick={() => handleTabChange('other')}>Other Skills</p>
                </button>
                
                {/* Start of the Main Skill */}
                <div className="rectangle rounded-3xl">
                    <div className='px-4 py-4'>

                        <p className='text-3xl text-black font-queensides font-bold mb-2'>Software Developing Skills</p>
                        <div className='flex'>
                            <p className='text-xl mr-2 font-bold'>Mobile App Developing:</p>
                            <YellowStars number={5} />
                        </div>
                        <p> <strong>Flutter Frontend Expert</strong>, <strong>Project Learder</strong>, IOS + Android Developing, Dart language, <strong>Firebase Backend</strong>, Java Backend, Firestore Database, SQLite Local Database, Xcode, Kotlin, <strong>Figma UI Design</strong>.</p>
                        <div className='flex mt-2'>
                            <p className='text-xl mr-2 font-bold'>Web Developing:</p>
                            <YellowStars number={4} />
                        </div>
                        <p> React, <strong> Next.js</strong>, HTML, CSS, Java Webserver, Flutter, Figma Design.</p>
                        <div className='flex mt-2'>
                            <p className='text-xl mr-2 font-bold'>More General:</p>
                            <YellowStars number={4} />
                        </div>
                        <p> <strong>Python</strong>, <strong>Java</strong>, <strong>SQL</strong>, C, Basic AI Algorithms, Basic Computer Vision, Djongo API/Backend, Custom Backend Design.</p>
                    </div>
                </div>
                <div className="skill-image-tl"></div>
                <div className="skill-image-br"></div>
            </div>
        </div>
    );
    
  } else if (activeTab === 'ds'){
    {/* Start of the DS Skill */}
    return (
        <div className='p-10'>
            <div className='container-stack'>
                <button className="rectangle bg-cyan-300 rounded-3xl">
                    <p className='box-center text-3xl text-black font-queensides font-bold mb-2'  onClick={() => handleTabChange('cs')}>Software Developing Skills</p>
                
                </button>
                <button className="rectangle rounded-3xl">
                        <p className='box-center text-3xl text-black font-queensides font-bold mb-2'  onClick={() => handleTabChange('other')}>Other Skills</p>
                </button>
                
                {/* Start of the Main Skill */}
                <div className="rectangle rounded-3xl">
                    <div className='px-4 py-4'>

                        <p className='text-3xl text-black font-queensides font-bold mb-2'>Data Scientist Skill</p>
                        <div className='flex'>
                            <p className='text-xl mr-2 font-bold'>Data Engineer:</p>
                            <YellowStars number={4} />
                        </div>
                        <p> <strong>MySQL</strong>, SQLite, NoSQL, <strong>Firestore Database</strong>, Database Design with E&R model, DD.</p>
                        <div className='flex mt-2'>
                            <p className='text-xl mr-2 font-bold'>Data Scientist:</p>
                            <YellowStars number={4} />
                        </div>
                        <p> Machine Learning, NLP, <strong> R</strong>, Python Notebook, Model Building, Strong Statistics Knowledge, Excel, Mathlab, Numpy.</p>
                    </div>
                </div>
                <div className="skill-image-tl"></div>
                <div className="skill-image-br"></div>
            </div>
        </div>
    );
  } else {
    {/* Start of the Other Skill */}
    return (
        <div className='p-10'>
            <div className='container-stack'>
                <button className="rectangle bg-cyan-300 rounded-3xl">
                    <p className='box-center text-3xl text-black font-queensides font-bold mb-2'  onClick={() => handleTabChange('ds')}>Data Scientist Skills</p>
                </button>
                <button className="rectangle rounded-3xl">
                        <p className='box-center text-3xl text-black font-queensides font-bold mb-2'  onClick={() => handleTabChange('cs')}>Software Developing Skills</p>
                </button>
                
                {/* Start of the Main Skill */}
                <div className="rectangle rounded-3xl">
                    <div className='px-4 py-4'>

                        <p className='text-3xl text-black font-queensides font-bold mb-2'>Other Skills</p>
                        <div className='flex'>
                            <p className='text-xl mr-2 font-bold'>Personal Initiative:</p>
                            <YellowStars number={5} />
                        </div>
                        <p> Ready for Challenge, Quick Adaption, Multidisciplinary Expertise.</p>
                        <div className='flex mt-2'>
                            <p className='text-xl mr-2 font-bold'>Leadership:</p>
                            <YellowStars number={5} />
                        </div>
                        <p> Team management, <strong>Github Project Planning & Assigning</strong>, Team working, <strong>Project Leader</strong>, Club President.</p>
                        <div className='flex mt-2'>
                            <p className='text-xl mr-2 font-bold'>Business:</p>
                            <YellowStars number={4} />
                        </div>
                        <p> Business Model Writing, Business Hypothesis testing, Custom Inverview, Early Start Up Business Planning.</p>
                    </div>
                </div>
                <div className="skill-image-tl"></div>
                <div className="skill-image-br"></div>
            </div>
        </div>
    );

  }

};

const YellowStars = ({ number }: { number: number }) => {
    const stars = getYellowStars(number);

    return (
        <div className="flex mt-1">
            {stars.map((star, index) => (
                <div key={index}>
                    {star}
                </div>
            ))}
        </div>
    );
};

function getYellowStars(number: number) {
    if (number < 0 || number > 5) {
        throw new Error('Invalid input. Number must be between 0 and 5.');
    }

    const yellowStar = <AiFillStar className="h-5 w-5 text-yellow-500" />;
    const emptyStar = <AiOutlineStar className="h-5 w-5 text-gray-400" />;

    const stars = [];

    for (let i = 0; i < number; i++) {
        stars.push(yellowStar);
    }

    for (let i = number; i < 5; i++) {
        stars.push(emptyStar);
    }

    return stars;
}







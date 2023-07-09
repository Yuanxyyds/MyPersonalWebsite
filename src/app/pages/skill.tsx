import React from 'react';
import { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BiSolidStarHalf } from 'react-icons/bi';


export default function SkillContent() {
    const [activeTab, setActiveTab] = useState('cs');

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    if (activeTab === 'cs') {
        {/* Start of the CS Skill */ }
        return (
            <section>
                <nav className='flex'>
                    <button className='bg-black text-white px-4 py-2 rounded-b-lg' onClick={() => handleTabChange('cs')}> Software Developing Skills</button>
                    <button className='ml-4 text-gray-600' onClick={() => handleTabChange('ds')}> Data Scientist Skills</button>
                    <button className='ml-4 text-gray-600' onClick={() => handleTabChange('other')}> Business & Management Skills</button>
                </nav>
                <section className='m-10'>
                    <div className='flex font-poppin'>
                        {/* Mobile App */}
                        <div className='leftrow-skill-container mr-4'>
                            <div className='flex'>
                                <h1 className='text-xl font-semibold text-black mb-4 mr-4'> Mobile App Developing </h1>
                                <YellowStars number={5} />
                            </div>
                            <p className=' text-gray-600'> I have participated in several mobile app projects (IOS & Android), notably DTC and Campus Eats. I possess extensive expertise in Flutter with Dart language, and I have acquired a deep understanding of Firebase for back-end development and Figma for front-end design. Additionally, I am proficient in utilizing various tools such as Google Cloud Plaftorm, SQLite local database, Xcode for IOS building, among others. </p>
                        </div>
                        {/* Mobile App Skill */}
                        <div className='rightrow-skill-container'>
                            <h1 className='text-xl text-black font-semibold mb-4'> Skill </h1>
                            <div>
                                <h2 className='text-gray-600 mr-4'>Flutter/Dart</h2>
                                <ProgressBar percentage={100} />
                            </div>
                            <div>
                                <h2 className=' text-gray-600 mr-4'>Firebase/Firestore No-SQL Database</h2>
                                <ProgressBar percentage={100} />
                            </div>
                            <div>
                                <h2 className='text-gray-600 mr-4'>Figma UI Design</h2>
                                <ProgressBar percentage={75} />
                            </div>
                            <div>
                                <h2 className=' text-gray-600 mr-4'>Kotlin/Swift</h2>
                                <ProgressBar percentage={70} />
                            </div>
                            <div>
                                <h2 className=' text-gray-600 mr-4'>Google cloud plaform/Other Mobile app Developing packages</h2>
                                <ProgressBar percentage={90} />
                            </div>

                        </div>
                    </div>

                    <div className='flex font-poppin mt-8'>
                        {/* Web Development */}
                        <div className='leftrow-skill-container mr-4'>
                            <div className='flex'>
                                <h1 className='text-xl font-semibold text-black mb-4 mr-4'> Web Developing </h1>
                                <YellowStars number={4.5} />
                            </div>
                            <p className=' text-gray-600'>
                                I have a personal interest in web development, and currently engaged in the continuous development and maintenance of my own website. Initially, I constructed my personal website using pure HTML/CSS with a Java/Djongo backend. With a expand my skill set in ReactJS and Next.js. As a result, I rebuit this website using Next.js. I have developed a strong understanding of state management using Next.js, allowing me to maintain a high standard of quality in my web projects. </p>
                        </div>

                        {/* Web Development Skill*/}
                        <div className='rightrow-skill-container'>
                            <h1 className='text-xl text-black font-semibold mb-4'> Skill </h1>
                            <div>
                                <h2 className='text-gray-600 mr-4'>HTML/CSS</h2>
                                <ProgressBar percentage={70} />
                            </div>
                            <div>
                                <h2 className=' text-gray-600 mr-4'>React JS/ Next JS Framework</h2>
                                <ProgressBar percentage={85} />
                            </div>
                            <div>
                                <h2 className='text-gray-600 mr-4'>Java</h2>
                                <ProgressBar percentage={95} />
                            </div>
                            <div>
                                <h2 className=' text-gray-600 mr-4'>JavaScript</h2>
                                <ProgressBar percentage={75} />
                            </div>
                            <div>
                                <h2 className=' text-gray-600 mr-4'>Djongo</h2>
                                <ProgressBar percentage={50} />
                            </div>

                        </div>
                    </div>

                    <div className='flex font-poppin mt-8'>
                        {/* Other CS */}
                        <div className='leftrow-skill-container mr-4'>
                            <div className='flex'>
                                <h1 className='text-xl font-semibold text-black mb-4 mr-4'> Other Developing Skills </h1>
                                <YellowStars number={4} />
                            </div>
                            <p className=' text-gray-600'>
                                In addition to the mentioned skills, I have practical experience with programming languages such as Python, C, and SQL. Furthermore, I have studied basic computer vision, artificial intelligence and machine learning with valuable assignments. </p>
                        </div>

                        {/* Other*/}
                        <div className='rightrow-skill-container'>
                            <h1 className='text-xl text-black font-semibold mb-4'> Skill </h1>
                            <div>
                                <h2 className='text-gray-600 mr-4'>Python</h2>
                                <ProgressBar percentage={90} />
                            </div>
                            <div>
                                <h2 className='text-gray-600 mr-4'>C</h2>
                                <ProgressBar percentage={75} />
                            </div>
                            <div>
                                <h2 className='text-gray-600 mr-4'>SQL</h2>
                                <ProgressBar percentage={100} />
                            </div>
                            <div>
                                <h2 className=' text-gray-600 mr-4'>Computer Vision/Python CV</h2>
                                <ProgressBar percentage={60} />
                            </div>
                            <div>
                                <h2 className='text-gray-600 mr-4'>AI Algorithm</h2>
                                <ProgressBar percentage={80} />
                            </div>

                        </div>
                    </div>
                </section>
            </section>

        );

    } else if (activeTab === 'ds') {
        {/* Start of the DS Skill */ }
        return (
            <section>
                <nav className='flex'>
                    <button className='ml-4 text-gray-600' onClick={() => handleTabChange('cs')}> Software Developing Skills</button>
                    <button className='ml-4 bg-black text-white px-4 py-2 rounded-b-lg' onClick={() => handleTabChange('ds')}> Data Scientist Skills</button>
                    <button className='ml-4 text-gray-600' onClick={() => handleTabChange('other')}> Business & Management Skills</button>
                </nav>
                <section className='m-10'>
                    <div className='flex font-poppin'>
                        {/* Data Scientist */}
                        <div className='leftrow-skill-container mr-4'>
                            <div className='flex'>
                                <h1 className='text-xl font-semibold text-black mb-4 mr-4'> Data Scientist </h1>
                                <YellowStars number={4.5} />
                            </div>
                            <p className=' text-gray-600'> As a specialized student in Data Sciences, I have actively worked on multiple projects within the field. I am fluent to use R for data management, creating interactive plots and generating data reports. Additionally, I possess a solid understanding of natural language processing (NLP), machine learning using Python, managing data using SQL or Excel. Furthermore, my strong background in statistics equips me with a comprehensive understanding of various common statistical methods. </p>
                        </div>
                        {/* Data Scientist */}
                        <div className='rightrow-skill-container'>
                            <h1 className='text-xl text-black font-semibold mb-4'> Skill </h1>
                            <div>
                                <h2 className='text-gray-600 mr-4'>R</h2>
                                <ProgressBar percentage={95} />
                            </div>
                            <div>
                                <h2 className='text-gray-600 mr-4'>Data Visualizing</h2>
                                <ProgressBar percentage={95} />
                            </div>
                            <div>
                                <h2 className=' text-gray-600 mr-4'>SQL/Excel</h2>
                                <ProgressBar percentage={95} />
                            </div>
                            <div>
                                <h2 className='text-gray-600 mr-4'>NLP</h2>
                                <ProgressBar percentage={75} />
                            </div>
                            <div>
                                <h2 className=' text-gray-600 mr-4'>Machine Learning</h2>
                                <ProgressBar percentage={80} />
                            </div>
                            <div>
                                <h2 className=' text-gray-600 mr-4'>Statistics Methods</h2>
                                <ProgressBar percentage={85} />
                            </div>

                        </div>
                    </div>

                    <div className='flex font-poppin mt-8'>
                        {/* Data Engineer */}
                        <div className='leftrow-skill-container mr-4'>
                            <div className='flex'>
                                <h1 className='text-xl font-semibold text-black mb-4 mr-4'> Data Engineering </h1>
                                <YellowStars number={5} />
                            </div>
                            <p className=' text-gray-600'>
                                Database work is one of my favorite areas, and I have gained extensive experience in this field. I have worked extensively with SQL databases, as well as Firebase NoSQL databases. I am expereinced with database design using the Entity-Relationship (E&R) model, defining database schemas using Data Definition Language (DDL). Additionally, I have substantial experience in serializing and deserializing data with JSON, a skill that has proven invaluable in various projects.</p>
                        </div>

                        {/* Data Engineer Skill*/}
                        <div className='rightrow-skill-container'>
                            <h1 className='text-xl text-black font-semibold mb-4'> Skill </h1>
                            <div>
                                <h2 className='text-gray-600 mr-4'>SQL/No-SQL Database</h2>
                                <ProgressBar percentage={100} />
                            </div>
                            <div>
                                <h2 className=' text-gray-600 mr-4'>Database Design: E&R/DDL</h2>
                                <ProgressBar percentage={90} />
                            </div>
                            <div>
                                <h2 className='text-gray-600 mr-4'>JSON</h2>
                                <ProgressBar percentage={90} />
                            </div>
                            <div>
                                <h2 className=' text-gray-600 mr-4'>API</h2>
                                <ProgressBar percentage={85} />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        );
    } else {
        {/* Start of Business & Management Skills */ }
        return (
            <section>
                <nav className='flex'>
                    <button className='ml-4 text-gray-600' onClick={() => handleTabChange('cs')}> Software Developing Skills</button>
                    <button className='ml-4 text-gray-600' onClick={() => handleTabChange('ds')}> Data Scientist Skills</button>
                    <button className='ml-4 bg-black text-white px-4 py-2 rounded-b-lg' onClick={() => handleTabChange('other')}> Business & Management Skills</button>
                </nav>
                <section className='m-10'>
                    <div className='flex font-poppin'>
                        {/* Personal Intiative */}
                        <div className='leftrow-skill-container mr-4'>
                            <div className='flex'>
                                <h1 className='text-xl font-semibold text-black mb-4 mr-4'> Personal Intiative </h1>
                                <YellowStars number={5} />
                            </div>
                            <p className=' text-gray-600'> I am always ready for a challenge and thrive in dynamic environments that require quick adaptation. With my multidisciplinary expertise, I can bring a versatile skill set to tackle diverse tasks and projects. Whether it's learning new technologies, exploring unfamiliar domains, or collaborating across disciplines, I am prepared to take on any challenge and deliver effective results. </p>
                        </div>
                        {/* Personal Intiative Skill */}
                        <div className='rightrow-skill-container'>
                            <h1 className='text-xl text-black font-semibold mb-4'> Skill </h1>
                            <div>
                                <h2 className='text-gray-600 mr-4'>Ready for challenge</h2>
                                <ProgressBar percentage={100} />
                            </div>
                            <div>
                                <h2 className=' text-gray-600 mr-4'>Quick Adaption</h2>
                                <ProgressBar percentage={100} />
                            </div>
                            <div>
                                <h2 className='text-gray-600 mr-4'>Multidisciplinary Expertise</h2>
                                <ProgressBar percentage={100} />
                            </div>
                        </div>
                    </div>

                    <div className='flex font-poppin mt-8'>
                        {/* Management */}
                        <div className='leftrow-skill-container mr-4'>
                            <div className='flex'>
                                <h1 className='text-xl font-semibold text-black mb-4 mr-4'> Leadership </h1>
                                <YellowStars number={4} />
                            </div>
                            <p className=' text-gray-600'>
                                I possess strong abilities in team management, project planning, and team collaboration. As a project leader and club president, I have honed my skills in effectively managing and coordinating teams to achieve project objectives. I am well-versed in utilizing tools such as GitHub for project planning, assigning tasks, and tracking progress. I understand the importance of clear communication, delegation, and fostering a positive team environment to promote collaboration and ensure project success. </p>
                        </div>

                        {/* Management Skill*/}
                        <div className='rightrow-skill-container'>
                            <h1 className='text-xl text-black font-semibold mb-4'> Skill </h1>
                            <div>
                                <h2 className='text-gray-600 mr-4'>Project Management</h2>
                                <ProgressBar percentage={90} />
                            </div>
                            <div>
                                <h2 className=' text-gray-600 mr-4'>Github Projects Planing - backlog</h2>
                                <ProgressBar percentage={90} />
                            </div>
                            <div>
                                <h2 className='text-gray-600 mr-4'>Leadership</h2>
                                <ProgressBar percentage={100} />
                            </div>
                            <div>
                                <h2 className=' text-gray-600 mr-4'>Communication</h2>
                                <ProgressBar percentage={85} />
                            </div>
                        </div>
                    </div>

                    <div className='flex font-poppin mt-8'>
                        {/* Business*/}
                        <div className='leftrow-skill-container mr-4'>
                            <div className='flex'>
                                <h1 className='text-xl font-semibold text-black mb-4 mr-4'> Business </h1>
                                <YellowStars number={3.5} />
                            </div>
                            <p className=' text-gray-600'>
                                I had experience in various aspects of business development, including writing concise and effective business models, testing business hypotheses, conducting customer interviews, and planning for early-stage startups. Notably, I am currently working on transforming several personal projects into viable startup ideas. </p>
                        </div>

                        {/* Business Skills*/}
                        <div className='rightrow-skill-container'>
                            <h1 className='text-xl text-black font-semibold mb-4'> Skill </h1>
                            <div>
                                <h2 className='text-gray-600 mr-4'>Business Model Writing</h2>
                                <ProgressBar percentage={70} />
                            </div>
                            <div>
                                <h2 className='text-gray-600 mr-4'>Hypothesis Testing</h2>
                                <ProgressBar percentage={70} />
                            </div>
                            <div>
                                <h2 className='text-gray-600 mr-4'>UX/customer interviews</h2>
                                <ProgressBar percentage={70} />
                            </div>
                            <div>
                                <h2 className=' text-gray-600 mr-4'>Startups Planing</h2>
                                <ProgressBar percentage={95} />
                            </div>

                        </div>
                    </div>
                </section>
            </section>
        );

    }

};

const YellowStars = ({ number }: { number: number }) => {
    const stars = getYellowStars(number);

    return (
        <div className="flex mt-1">
            {stars.map((star, index) => (
                <div key={index}>{star}</div>
            ))}
        </div>
    );
};

function getYellowStars(number: number) {
    if (number < 0 || number > 5) {
        throw new Error('Invalid input. Number must be between 0 and 5.');
    }

    const yellowStar = <AiFillStar className="h-5 w-5 text-yellow-500" />;
    const halfStar = <BiSolidStarHalf className="h-5 w-5 text-yellow-500" />;
    const emptyStar = <AiOutlineStar className="h-5 w-5 text-gray-400" />;

    const stars = [];

    const fullStars = Math.floor(number);
    const hasHalfStar = number % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars.push(yellowStar);
    }

    if (hasHalfStar) {
        stars.push(halfStar);
    }

    const remainingStars = 5 - stars.length;

    for (let i = 0; i < remainingStars; i++) {
        stars.push(emptyStar);
    }

    return stars;
}

const ProgressBar = ({ percentage }: { percentage: number }) => {
    const filledWidth = `${percentage}%`;
    const label = `${percentage}%`;

    return (
        <div className="progress-bar">
            <div className="progress-bar-filled" style={{ width: filledWidth }}></div>
            <div className="progress-bar-label text-gray-100">{label}</div>
        </div>
    );
};






import React from 'react';
import Image from 'next/image';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';
import CommonComponent from '@/app/helpers/common-component';



export default function ExperienceContent() {
    return (
        <CommonComponent activeTab="experience">
            <button className='bg-black text-white px-4 py-2 rounded-b-lg'> Work/Project Experience</button>
            <section className=' experience-padding experience-placeholder'>
                <section className=' relative'>
                    <section>
                        <div className=' experience-container'>
                            <h1 className=' experience-header1 text-center mt-1'>Sep 2019 - Dec 2019</h1>
                            <div className='right-experience-content1'>
                                <h1 className=' experience-header mr-3 ml-10 text-right'>Student Tutor</h1>
                                <p className=' text-white text-xs mr-3 ml-10 text-right'> YTA Tutor | Surrey </p>
                                <p className=' text-white text-xs mr-3 ml-10 text-right mt-2'> - Teaching the ideas of solving tough math/computer science/physics questions to high school students. </p>
                                <p className=' text-white text-xs mr-3 ml-10 text-right mt-1'> - Assisting students in finding useful study methods to enhance academic performance. </p>
                            </div>
                        </div>
                        <div className=' experience-container'>
                            <h1 className=' experience-header2 text-center mt-1'>Sep 2020 - Jan 2021</h1>
                            <div className='left-experience-content1'>
                                <h1 className=' experience-header ml-3'>UofT Food Truck</h1>
                                <p className=' text-white text-xs ml-3 mr-10'> UofT Project | Mrs. Karan | Toronto</p>
                                <p className=' text-white text-xs ml-3 mr-10 mt-2'> - Android App Design for the UofT Food Truck System. </p>
                                <p className=' text-white text-xs ml-3 mr-10 mt-1'> - Participated in Java Backend Writing and XML frontend Designing </p>
                                <p className=' text-white text-xs ml-3 mr-10 mt-1'> - Familar with Design Pattern and OOP architeture </p>
                                <p className=' text-white text-xs ml-3 mr-10 mt-1'> - Data Serialization using SQLite </p>
                            </div>
                        </div>
                        <div className=' experience-container'>
                            <h1 className=' experience-header3 text-center mt-1'>May 2022 - Current</h1>
                            <div className='right-experience-content2'>
                                <h1 className=' experience-header mr-3 ml-10 text-right'>President of UTTC</h1>
                                <p className=' text-white text-xs mr-3 ml-10 text-right'> UofT Club | Toronto </p>
                                <p className=' text-white text-xs mr-3 ml-10 text-right mt-2'> - Founder of the University of Toronto Tutoring Club (Recognized) </p>
                                <p className=' text-white text-xs mr-3 ml-10 text-right mt-1'> - Organizing weekly activities, managing members & departments, and making plans about club development. </p>
                                <p className=' text-white text-xs mr-3 ml-10 text-right mt-1'> - Early startup business planning, business model testing, UX survey. </p>
                            </div>
                        </div>
                        <div className=' experience-container'>
                            <h1 className=' experience-header4 text-center mt-1'>Jun 2022 - Current</h1>
                            <div className='left-experience-content2'>
                                <h1 className=' experience-header ml-3'>Personal Web Devloping</h1>
                                <p className=' text-white text-xs ml-3 mr-10'> Self-Project | Toronto</p>
                                <p className=' text-white text-xs ml-3 mr-10 mt-2'> - Version 1: Java webserver writing and UI design with HTML/CSS. </p>
                                <p className=' text-white text-xs ml-3 mr-10 mt-1'> - Version 2: Rebuild website using ReactJS (NextJS) and Tailwind CSS </p>
                                <p className=' text-white text-xs ml-3 mr-10 mt-1'> - Write functional JavaScript and Djongo API</p>
                            </div>
                        </div>
                        <div className=' experience-container'>
                            <h1 className=' experience-header5 text-center mt-1'>Feb 2023 - May 2023</h1>
                            <div className='right-experience-content3'>
                                <h1 className=' experience-header mr-3 ml-10 text-right'>Great Lakes Analysis</h1>
                                <p className=' text-white text-xs mr-3 ml-10 text-right'> UofT Project | Toronto </p>
                                <p className=' text-white text-xs mr-3 ml-10 text-right mt-2'> - Identify most polluted places and pollution trend of Great Lakes </p>
                                <p className=' text-white text-xs mr-3 ml-10 text-right mt-1'> - Fetching Data by web scraping and Processing raw data using R </p>
                                <p className=' text-white text-xs mr-3 ml-10 text-right mt-1'> - Build Prediction Model and Interactive visual plots </p>
                                <p className=' text-white text-xs mr-3 ml-10 text-right mt-1'> - Build Rmarkdown website for project report</p>
                            </div>
                        </div>

                    </section>


                    {/* Left Line Section */}
                    <section>
                        <div className=' horizontal-line'></div>
                        <div className=' horizontal-line'></div>
                        <div className=' horizontal-line'></div>
                        <div className=' horizontal-line'></div>
                        <div className=' horizontal-line'></div>
                    </section>
                    {/* Center Line Section */}
                    <section>
                        <div className='center-line'> </div>
                        <div className='center-line'> </div>
                        <div className='center-line'> </div>
                        <div className='center-line'> </div>
                    </section>
                    {/* Ball Section */}
                    <section>
                        <div className='ball'> </div>
                        <div className='ball'> </div>
                        <div className='ball'> </div>
                        <div className='ball'> </div>
                        <div className='ball'> </div>
                        <div className='ball'> </div>
                        <div className='ball'> </div>
                        <div className='ball'> </div>
                        <div className='ball'> </div>
                        <div className='ball'> </div>
                    </section>
                </section>
            </section>
        </CommonComponent>
    );
};

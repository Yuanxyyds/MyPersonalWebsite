"use client";
import React from 'react';
import { useState } from 'react';
import CommonComponent from '../helpers/common-component';
import ReactPlayer from 'react-player';
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function CampusEatsContent() {
    const [activeTab, setActiveTab] = useState('campusEats2');

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        window.location.hash = tab;
    };

    React.useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            handleTabChange(hash);
        }
    }, []);

    if (activeTab === 'campusEats2') {
        {/* Start of CampusEats 2.0 */ }
        return (
            <CommonComponent activeTab="project-campusEats">
                <nav className='flex'>
                    <button className='bg-black text-white px-4 py-2 rounded-b-lg' onClick={() => handleTabChange('campusEats2')}> Campus Eats Version 2.0</button>
                    <button className='ml-4 text-gray-600' onClick={() => handleTabChange('campusEats1')}> Campus Eats Version 1.0</button>
                    <button className='ml-4 text-gray-600' onClick={() => handleTabChange('uoft-FoodTruck')}> UofT Food Truck Project</button>
                </nav>
            </CommonComponent>
        );

    } else if (activeTab === 'campusEats1') {
        {/* Start of CampusEats 1.0 */ }
        return (
            <CommonComponent activeTab="project-campusEats">
                <nav className='flex'>
                    <button className='ml-4 text-gray-600' onClick={() => handleTabChange('campusEats2')}> Campus Eats Version 2.0</button>
                    <button className='ml-4 bg-black text-white px-4 py-2 rounded-b-lg' onClick={() => handleTabChange('campusEats1')}> Campus Eats Version 1.0</button>
                    <button className='ml-4 text-gray-600' onClick={() => handleTabChange('uoft-FoodTruck')}> UofT Food Truck Project</button>
                </nav>
                <section className=' center-section px-40 py-20'>
                    <h1 className=' text-3xl'> Campus Eats - Version 1.0 </h1>
                    <p className='text-gray-600 mt-8'>
                        As an extension to the UofT FoodTruck Project. I have formed a new development team, continued this project&apos;s development and made significant enhancements. The project is hosted on GitHub, with separate repositories for the user-end code <a href="https://github.com/Yuanxyyds/FoodTruckMobile" className=' text-blue-500'>here</a> and the seller code <a href="https://github.com/Yuanxyyds/FoodTruckSeller" className=' text-blue-500'>here</a>.</p>
                    <p className='text-gray-600 mt-4'>This Project was developed with Flutter and Firebase backend, this project expanded my expertise in Kotlin/Swift, Android Gradle building, iOS building with Xcode. Additionally, I gained proficiency in Figma UI design, utilized public Flutter packages, and explored the Google Cloud platform for API integration. </p>
                    <p className='text-gray-600 mt-4'>
                        For user-end functionality, it includes features such as account creation, account editing (image uploading, address autocomplete), viewing restaurant, shopping cart managing, and seamless integration with the backend for communication with the seller-end.</p>
                    <p className='text-gray-600 mt-4'>
                        For the seller-end functionality, it includes additional features such as restaurant creation, food item creation, and backend for communication with the user-end.
                    </p>
                    <p className='text-gray-600 mt-4'>
                        To further enhance functionality and improve the user interface, development for this version has been halted. The latest and updated version can be accessed at the <a onClick={() => handleTabChange('campusEats2')} className=' text-blue-500 cursor-pointer'>here</a> . Here, you can explore the newest version of the CampusEats project with improved features and a refined user experience.
                    </p>
                    <h2 className=' text-xl my-4'> User & Seller End Demo</h2>
                    <ReactPlayer url='https://www.youtube.com/watch?v=0pP6WPmZV9M' />
                </section>
            </CommonComponent>
        );
    } else {
        {/* Start of UofT FoodTruck */ }
        return (
            <CommonComponent activeTab="project-campusEats">
                <nav className='flex'>
                    <button className='ml-4 text-gray-600' onClick={() => handleTabChange('campusEats2')}> Campus Eats Version 2.0</button>
                    <button className='ml-4 text-gray-600' onClick={() => handleTabChange('campusEats1')}> Campus Eats Version 1.0</button>
                    <button className='ml-4 bg-black text-white px-4 py-2 rounded-b-lg' onClick={() => handleTabChange('uoft-FoodTruck')}> UofT Food Truck Project</button>
                </nav>
                <section className=' center-section px-40 py-20'>
                    <h1 className=' text-3xl'> UofT FoodTruck Project - Group Asoul </h1>
                    <p className='text-gray-600 mt-8'>
                        This project was developed by Group Asoul as the final project for CSC207. The project is hosted on GitHub, and you can access the source code through the <a href="https://github.com/Yuanxyyds/UofT-FoodTruck-GroupAsoul" className=' text-blue-500'>this link</a>. It serves as the initial version of the CampusEats series. </p>
                    <p className='text-gray-600 mt-4'>
                        We have developed a FoodTruck ordering program with two main components: the Java backend and the Java/Android frontend. The backend handles user registration, login system, rating system, market sorting, serialization, and various functionalities like managing food trucks and orders. Users can act as both buyers and sellers, and they can edit their food trucks.</p>
                    <p className='text-gray-600 mt-4'>
                        For the frontend, we have implemented a fully-functional command-line interface that can be accessed in Intellij. It includes a help function to display available commands. Additionally, we have partially implemented an Android app, which can perform most of the command-line functions except dynamically viewing the market, order history, and placing orders.</p>
                    <h2 className=' text-xl my-4'> Command-line Interface Demo</h2>
                    <ReactPlayer url='https://www.youtube.com/watch?v=J3kfU4Ic8Uc' />
                    <h2 className=' text-xl my-4'> Android Interface Demo</h2>
                    <ReactPlayer url='https://www.youtube.com/watch?v=RT-l98ZasE4' />
                </section>
            </CommonComponent>



        );

    }

};









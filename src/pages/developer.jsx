import Image from 'next/image';
import React from 'react';
import arnab from '../../public/png/arnab.jpg';
import sakib from '../../public/png/sakib.jpeg';
import ohid from '../../public/png/ohid1.jpg';
import rafi from '../../public/png/rafi.jpg';
import yousha from '../../public/png/yousha.jpg';
import RootLayout from '@/components/RootLayout';

const DeveloperCard = ({ name, role, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-center mb-4">
        <Image
          src={imageUrl}
          alt={`${name} avatar`}
          width={400}
          height={400}
          className="w-56 h-56 rounded-full"
        />
      </div>
      <h2 className="text-xl font-semibold mb-2 text-center">{name}</h2>
      <p className="text-gray-700 mb-2 font-semibold text-center">{role}</p>
      <p className="text-gray-700 text-center text-sm">{description}</p>
    </div>
  );
};

const DeveloperPage = () => {
  const developers = [
    {
      name: 'Arnab Shikder',
      role: 'Software Engineer & CTO',
      description: "I'm Arnab Shikder, a Software Engineer with a passion for learning and utilizing new technologies to enhance my skills. As a dedicated and hardworking individual, I take pride in being professional and confident in my abilities to complete projects effectively.",
      imageUrl: arnab 
    },
    {
      name: 'Hafiz Sakib',
      role: 'Project manager & Backend Engineer',
      description: "Hi I am a Mern Stack developer. I'm a Problem Solver. Currently I'm learning Data Structures and Algorithms & Solving Problems in Several Online Judges With C++.",
      imageUrl: sakib 
    },
    {
      name: 'Mohammad Ohidul Alam ',
      role: 'Frontend Engineer & UI/UX Designer',
      description: "I'm Mohammad Ohidul Alam from Bangladesh, and I work in Front-end web development. I really enjoy working as well as learning languages and frameworks like JS, React JS. ",
      imageUrl: ohid 
    },
    {
      name: 'Sayed Hossain',
      role: 'Analyzer & Research',
      description: "I'm Sayed Hossain An Analyzer examines data to identify trends and insights, while a Researcher conducts investigations to gather and analyze information, contributing to knowledge and decision-making.",
      imageUrl: rafi 
    },
    {
      name: 'Mohammad Asmual Hoque Yousha',
      role: 'Performance Testing Engineer & CMS',
      description: "I'm Mohammad Asmual Hoque Yousha A Performance Testing Engineer ensures software runs efficiently by identifying and resolving performance issues. A CMS role involves managing and organizing digital content within a CMS platform for optimal accessibility and structure.",
      imageUrl: yousha 
    }
  ];

  return (
    <div className='bg-green-100 pt-20'>
      <div className="flex flex-col items-center justify-center min-h-screen py-6 container mx-auto">
      <h1 className="text-4xl font-bold mb-10">Meet Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {developers.map((developer, index) => (
          <DeveloperCard key={index} {...developer} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default DeveloperPage;

DeveloperPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

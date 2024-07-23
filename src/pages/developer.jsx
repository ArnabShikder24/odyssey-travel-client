import Image from 'next/image';
import React from 'react';
import arnab from '../../public/png/arnab.jpg';
import sakib from '../../public/png/sakib.jpeg';
import ohid from '../../public/png/ohid.jpg';
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
          className="w-56 h-60 rounded-full"
        />
      </div>
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-700 mb-2 font-semibold">{role}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const DeveloperPage = () => {
  const developers = [
    {
      name: 'Arnab Shikder',
      role: 'Software Engineer',
      description: "I'm Arnab Shikder, a Software Developer with a passion for learning and utilizing new technologies to enhance my skills. As a dedicated and hardworking individual, I take pride in being professional and confident in my abilities to complete projects effectively.",
      imageUrl: arnab 
    },
    {
      name: 'Hafiz Sakib',
      role: 'Software Engineer',
      description: "Hi I am a Mern Stack developer . I'm a Problem Solver. Currently I'm learning Data Structures and Algorithms & Solving Problems in Several Online Judges With C++.",
      imageUrl: sakib 
    },
    {
      name: 'Mohammad Ohidul Alam ',
      role: 'Software Engineer',
      description: "I'm Mohammad Ohidul Alam from Bangladesh, and I work in Front-end web development. I really enjoy working as well as learning languages and frameworks like JS, React JS. ",
      imageUrl: ohid 
    }
  ];

  return (
    <div className='bg-green-100 pt-8'>
      <div className="flex flex-col items-center justify-center min-h-screen py-6 container mx-auto">
      <h1 className="text-4xl font-bold mb-10">Meet Our Developers</h1>
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

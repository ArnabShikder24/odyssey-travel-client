import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Confirmed = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => router.push("/"), 4000)
  }, [router]);
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <h1 className='text-gray-500 text-xl'>Your Order is Confirmed</h1>
    </div>
  );
};

export default Confirmed;
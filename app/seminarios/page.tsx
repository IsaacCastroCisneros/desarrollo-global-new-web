import React from 'react'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'

export default function page() 
{
  return (
    <>
      <Hero />
      <div className="my-padding">
        <Programs />
      </div>
    </>
  );
}

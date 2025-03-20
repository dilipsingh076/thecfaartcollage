import React from 'react';
import Hero from '../components/Hero/Hero';

const HomePage = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://tabula.bold-themes.com/sunny/wp-content/uploads/sites/2/2019/03/hero_home_01.jpg')" }}
    >
      {/* <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to the CFA Art Collage there are you</h1>
      </div> */}
      <Hero />
    </section>
  );
};

export default HomePage;
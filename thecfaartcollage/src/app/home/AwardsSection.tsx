'use client';

import { awards } from '@/src/constants/homeData';
import AwardLeafIcon from './AwardLeafIcon';

const AwardsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Awards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="flex items-center mb-6">
                <AwardLeafIcon />
                <h3 className="text-2xl font-bold ml-4 text-[#1a1a1a] group-hover:text-[#FFD700] transition-colors">
                  {award.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{award.description}</p>
              <div className="text-sm text-gray-500">{award.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection; 
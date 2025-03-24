'use client';

import { departments } from '@/src/constants/homeData';
import Link from 'next/link';

const DepartmentsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Departments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((department) => (
            <Link
              key={department.title}
              href={department.link}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#1a1a1a] group-hover:text-[#FFD700] transition-colors">
                {department.title}
              </h3>
              <p className="text-gray-600">{department.description}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/departments"
            className="inline-block px-8 py-3 bg-[#FFD700] text-black font-semibold rounded-full hover:bg-[#FFC000] transition-colors"
          >
            View All Departments
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection; 
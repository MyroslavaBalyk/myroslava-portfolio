import React from 'react';
import Image from 'next/image';
import SectionHeading from '../ui/SectionHeading';

// Types
interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  imageUrl: string;
  description?: string;
  credentialNote?: string;
}

// Data
const education: EducationItem[] = [
  {
    degree: "Bachelor's Degree",
    institution: "Lesya Ukrainka Eastern European National University",
    period: "Graduated",
    imageUrl: "/beyond-coding/univercity-photo.jpg",
    credentialNote: "WES Credential Evaluation – Diploma recognized for educational equivalency in Canada"
  }
];

const EducationSection = () => {
  return (
    <section className="mb-16">
      <SectionHeading align="left" withAccent={true}>
        Education
      </SectionHeading>
      
      <div className="bg-[var(--color-accent-1)] rounded-lg py-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="w-40 h-40 rounded-full border-[5px] border-white shadow-lg bg-[var(--color-primary-light)] flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-125 hover:shadow-xl hover:z-10 relative overflow-hidden">
              <Image
                src={education[0].imageUrl}
                alt={`${education[0].institution} campus`}
                fill
                sizes="10rem"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-xl font-semibold text-[var(--color-primary-dark)] mb-2">
              {education[0].degree}
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              {education[0].institution}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              {education[0].credentialNote}
            </p>
            <p className="text-sm font-medium text-[#1A3E5D]">
              {education[0].period}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

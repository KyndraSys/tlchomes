import React from 'react';
import { X, Linkedin, Mail, Phone } from 'lucide-react';
import leadership from '../../assets/images/Sections/leadership.jpg';

const LeadershipPortfolioModal = ({ isOpen, onClose, leader }) => {
  if (!isOpen || !leader) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto relative scroll-smooth">
        {/* Header Section */}
        <div 
          className="sticky top-0 z-20 text-white p-8 pt-12 relative"
          style={{
            backgroundImage: `url(${leadership})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-black/80"></div>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white hover:text-gray-300 z-30"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="flex-shrink-0">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-48 h-48 object-cover shadow-xl"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold mb-2">{leader.name}</h2>
              <p className="text-xl mb-4 text-white/90">{leader.title}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {leader.linkedin && (
                  <a
                    href={leader.linkedin}
                    className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                )}
              </div>
            </div>
          </div>
          {/* White canvas footer for header */}
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-white"></div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#004f33] mb-4">Biography</h3>
              <div className="text-gray-700 leading-relaxed space-y-4">
                {leader.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {leader.expertise && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#004f33] mb-4">Areas of Expertise</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {leader.expertise.map((area, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-[#639e4e] rounded-full mr-3"></div>
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {leader.achievements && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#004f33] mb-4">Key Achievements</h3>
                <div className="space-y-3">
                  {leader.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#639e4e] rounded-full mr-3 mt-2"></div>
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {leader.education && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#004f33] mb-4">Education</h3>
                <div className="space-y-3">
                  {leader.education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-[#639e4e] pl-4">
                      <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                      <p className="text-[#639e4e] font-medium">{edu.institution}</p>
                      {edu.year && <p className="text-gray-600 text-sm">{edu.year}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipPortfolioModal;
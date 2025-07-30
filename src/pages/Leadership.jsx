import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronRight } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import leadership from '../assets/images/Sections/leadership1.jpg';
import executive1 from '../assets/images/executives/111.jpg';
import executive2 from '../assets/images/executives/2.jpg';
import executive3 from '../assets/images/executives/3.jpg';
import executive4 from '../assets/images/executives/4.jpg';
import LeadershipPortfolioModal from '../components/modals/LeadershipPortfolioModal';

const Leadership = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { leaderId } = useParams();
  const navigate = useNavigate();

  const executiveCommittee = [
    {
      id: "solomon-rimui-kamau",
      name: "Solomon Rimui Kamau",
      title: "Founder & CEO",
      image: executive1,
      linkedin: "https://ke.linkedin.com/in/solomon-rimui-aa593b229",
      email: "solomon@tlchomes.co.ke",
      bio: `Solomon Rimui Kamau is the visionary founder and CEO of TLC Homes Services Kenya, bringing over 15 years of transformative leadership in real estate development, sustainable agriculture, and technology innovation across East Africa.

Under Solomon's strategic leadership, TLC Homes has evolved from a boutique real estate firm into a diversified conglomerate that's reshaping Kenya's housing landscape through smart technology integration and sustainable development practices. His commitment to environmental stewardship and community empowerment has positioned TLC as a pioneer in green building solutions and affordable housing initiatives.

Prior to founding TLC Homes, Solomon held senior executive positions at leading Kenyan financial institutions, where he specialized in project financing and real estate investment. His deep understanding of capital markets and regulatory frameworks has been instrumental in securing over KES 2.8 billion in development funding for TLC's flagship projects.

Solomon's entrepreneurial journey began with his recognition that Kenya's housing deficit required innovative, technology-driven solutions that could scale rapidly while maintaining affordability and sustainability. This vision led to the development of TLC's proprietary smart home systems and modular construction methodologies.`,
      expertise: [
        "Strategic Leadership & Corporate Governance",
        "Real Estate Development & Investment",
        "Sustainable Building Technologies",
        "Capital Markets & Project Financing",
        "Public-Private Partnerships",
        "ESG Implementation & Impact Investing"
      ],
      achievements: [
        "Successfully raised over KES 2.8 billion in development capital",
        "Led TLC Homes to become Kenya's fastest-growing integrated housing developer",
        "Pioneered smart home technology adoption in Kenyan residential market",
        "Established strategic partnerships with 12+ international technology providers",
        "Delivered 1,200+ sustainable housing units across Nairobi and surrounding counties",
        "Recipient of Kenya Real Estate Developer of the Year Award (2023)"
      ],
      education: [
        {
          degree: "Master of Business Administration (MBA)",
          institution: "University of Nairobi Business School",
          year: "2012"
        },
        {
          degree: "Bachelor of Commerce (Finance)",
          institution: "Kenyatta University",
          year: "2008"
        }
      ]
    },
    {
      id: "dickens-otieno",
      name: "Dickens Otieno",
      title: "Co-Founder & CFO",
      image: executive2,
      linkedin: "https://linkedin.com/in/dickens-otieno",
      email: "dickens@tlchomes.co.ke",
      bio: `Dickens Otieno serves as Co-Founder and Chief Financial Officer of TLC Homes Services Kenya, bringing exceptional financial acumen and strategic planning expertise that has been crucial to the company's rapid expansion and market leadership position.

With over 12 years of experience in corporate finance, investment banking, and real estate financial modeling, Dickens has architected TLC's robust financial infrastructure and risk management frameworks. His innovative approach to project financing has enabled the company to maintain healthy cash flows while pursuing aggressive growth targets across multiple business verticals.

Before co-founding TLC Homes, Dickens held senior financial positions at Standard Chartered Bank Kenya and KCB Investment Bank, where he specialized in real estate project financing and structured products. His expertise in capital markets and regulatory compliance has been instrumental in navigating Kenya's complex financial landscape.

Dickens' strategic financial leadership has enabled TLC to maintain industry-leading margins while investing heavily in technology infrastructure and sustainable development practices. His commitment to financial transparency and stakeholder value creation has established TLC as a preferred partner for international investors and development finance institutions.`,
      expertise: [
        "Corporate Finance & Treasury Management",
        "Real Estate Financial Modeling",
        "Investment Banking & Capital Markets",
        "Risk Management & Compliance",
        "Financial Planning & Analysis",
        "Investor Relations & Stakeholder Management"
      ],
      achievements: [
        "Structured and executed KES 1.8 billion in project financing arrangements",
        "Implemented comprehensive ERP systems improving financial efficiency by 40%",
        "Established banking relationships with 8+ tier-1 financial institutions",
        "Led successful debt restructuring saving KES 180M in interest expenses",
        "Maintained company debt-to-equity ratio below 0.6 throughout expansion phase",
        "Certified Public Accountant (CPA-Kenya) with distinction"
      ],
      education: [
        {
          degree: "Master of Science in Finance",
          institution: "Strathmore University Business School",
          year: "2014"
        },
        {
          degree: "Bachelor of Commerce (Accounting)",
          institution: "University of Nairobi",
          year: "2010"
        }
      ]
    },
    {
      id: "bonface-makokha",
      name: "Bonface Makokha",
      title: "CTO & Strategic Partner",
      image: executive3,
      linkedin: "#",
      email: "bonface@tlchomes.co.ke",
      bio: `Bonface Makokha serves as Chief Technology Officer and Strategic Partner at TLC Homes Services Kenya, where he leads the company's digital transformation initiatives and oversees the development of cutting-edge smart home technologies that have positioned TLC as East Africa's most innovative housing developer.

With over 14 years of experience in software engineering, IoT systems, and construction technology, Bonface has been the architect behind TLC's proprietary smart home platform and automated building management systems. His technical leadership has enabled the company to achieve industry-leading energy efficiency ratings and resident satisfaction scores.

Prior to joining TLC Homes, Bonface held senior engineering positions at Safaricom PLC and IBM East Africa, where he specialized in large-scale system architecture and mobile technology solutions. His expertise in emerging technologies and deep understanding of the Kenyan market has been crucial in developing locally-relevant tech solutions.

Bonface's vision for technology-enabled sustainable living has driven TLC's partnerships with leading global technology companies and positioned the firm as a preferred testing ground for emerging PropTech solutions in the African market. His commitment to innovation and technical excellence continues to drive TLC's competitive advantage.`,
      expertise: [
        "Software Architecture & Systems Design",
        "IoT & Smart Home Technologies",
        "Construction Technology & PropTech",
        "Mobile Application Development",
        "Cloud Infrastructure & DevOps",
        "Artificial Intelligence & Machine Learning"
      ],
      achievements: [
        "Developed TLC's proprietary smart home platform serving 800+ residential units",
        "Led implementation of IoT systems reducing building operational costs by 35%",
        "Successfully integrated 15+ technology partners into TLC's ecosystem",
        "Architected mobile app with 4.8-star rating and 50,000+ downloads",
        "Patent holder for innovative building automation control systems",
        "Recipient of Kenya ICT Professional of the Year Award (2022)"
      ],
      education: [
        {
          degree: "Master of Science in Computer Science",
          institution: "University of Nairobi",
          year: "2013"
        },
        {
          degree: "Bachelor of Science in Electrical Engineering",
          institution: "Jomo Kenyatta University of Agriculture and Technology",
          year: "2009"
        }
      ]
    },
    {
      id: "carol-odhiambo",
      name: "Carol Odhiambo",
      title: "Company Admin",
      image: executive4,
      linkedin: "https://linkedin.com/in/carol-odhiambo",
      email: "carol@tlchomes.co.ke",
      bio: `Carol Odhiambo serves as Company Administrator at TLC Homes Services Kenya, where she oversees corporate governance, regulatory compliance, and operational excellence across all business units. Her exceptional organizational skills and attention to detail have been fundamental to TLC's ability to scale operations while maintaining the highest standards of professional service delivery.

With over 10 years of experience in corporate administration, legal compliance, and business operations, Carol has established robust systems and processes that support TLC's rapid growth trajectory. Her expertise in regulatory affairs and stakeholder management has ensured seamless compliance with Kenya's evolving real estate and construction regulations.

Before joining TLC Homes, Carol held senior administrative positions at Kenya Association of Manufacturers and Deloitte Kenya, where she specialized in corporate governance and regulatory compliance for large-scale organizations. Her background in legal affairs and business administration has been invaluable in navigating complex regulatory environments.

Carol's commitment to operational excellence and process optimization has enabled TLC to maintain industry-leading client satisfaction rates while supporting the company's expansion into new markets. Her leadership in corporate social responsibility initiatives has strengthened TLC's community relationships and enhanced the company's reputation as a responsible corporate citizen.`,
      expertise: [
        "Corporate Governance & Compliance",
        "Business Operations & Process Optimization",
        "Legal Affairs & Regulatory Management",
        "Stakeholder Relations & Communication",
        "Human Resources & Talent Management",
        "Corporate Social Responsibility"
      ],
      achievements: [
        "Established comprehensive compliance framework covering 12+ regulatory bodies",
        "Implemented operational systems reducing processing times by 45%",
        "Led successful ISO 9001:2015 certification process",
        "Managed legal affairs with zero regulatory violations in 5+ years",
        "Coordinated CSR initiatives impacting 2,000+ community members",
        "Certified Company Secretary with Institute of Certified Secretaries"
      ],
      education: [
        {
          degree: "Master of Laws (LL.M) in Corporate Law",
          institution: "University of Nairobi School of Law",
          year: "2016"
        },
        {
          degree: "Bachelor of Laws (LL.B)",
          institution: "Moi University",
          year: "2012"
        }
      ]
    }
  ];

  useEffect(() => {
    if (leaderId) {
      const leader = executiveCommittee.find(exec => exec.id === leaderId);
      if (leader) {
        setSelectedLeader(leader);
        setIsModalOpen(true);
      }
    }
  }, [leaderId]);

  const handleLeaderClick = (leader) => {
    setSelectedLeader(leader);
    setIsModalOpen(true);
    navigate(`/about/leadership/${leader.id}`);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedLeader(null);
    navigate('/about/leadership');
  };

  return (
    <>
      <Helmet>
        <title>Leadership - TLC Homes Services Kenya</title>
        <meta name="description" content="Meet the leadership team at TLC Homes Services Kenya, driving innovation in real estate, agriculture, and technology." />
        <link rel="canonical" href="https://tlchomes.co.ke/leadership" />
        <meta property="og:title" content="Leadership Team - TLC Homes Services Kenya" />
        <meta property="og:description" content="Learn about the experienced leaders guiding TLC Homes Services Kenya toward a transformative future." />
      </Helmet>
      <div className={`min-h-screen bg-white ${isModalOpen ? 'blur-sm' : ''}`}>
        {/* Modal overlay */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-[#004f33] bg-opacity-40 z-40"></div>
        )}
        
        {/* Hero Section */}
        <div
          className="relative bg-black text-white pt-32 pb-20"
          style={{
            backgroundImage: `url(${leadership})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="mb-8">
              <span className="text-[#d0c82a] text-sm font-medium tracking-wide uppercase">LEADERSHIP</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Our Leadership Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Meet the experienced leaders driving TLC Homes Services Kenya to deliver innovative solutions across real estate, agriculture, and technology.
            </p>
          </div>
        </div>

        {/* Executive Committee Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Executive Committee
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {executiveCommittee.map((executive, index) => (
                <div key={index} className="text-center bg-white p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="mb-6">
                    <img
                      src={executive.image}
                      alt={executive.name}
                      className="w-48 h-48 mx-auto object-cover shadow-md"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {executive.name}
                  </h3>
                  <p className="text-md text-[#639e4e] mb-4 font-medium">
                    {executive.title}
                  </p>
                  <button
                    onClick={() => handleLeaderClick(executive)}
                    className="inline-flex items-center px-4 py-2 text-[#004f33] hover:text-white font-medium bg-gray-100 hover:bg-[#004f33] transition-all duration-300 group"
                  >
                    Read {executive.name.split(' ')[0]}'s bio
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#48372A] py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl text-white font-bold mb-4">Investor Relations</h2>
            <p className="text-xl text-white mb-8 opacity-90 max-w-3xl mx-auto">
              Learn more about TLC's financial performance, strategic initiatives, and investment opportunities.
            </p>
            <a
              href="/investors"
              className="inline-flex items-center px-8 py-3 bg-white text-gray-800 font-semibold hover:bg-gray-100 transition-colors shadow-lg group"
            >
              View Investor Information
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Leadership Portfolio Modal */}
      <LeadershipPortfolioModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        leader={selectedLeader}
      />
    </>
  );
};

export default Leadership;
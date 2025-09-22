import React from 'react';

const CompanyCarousel = () => {
  const companies = [
    {
      id: 1,
      name: "TechFlow Solutions",
      description: "Innovative Software Development",
      logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      name: "GreenLeaf Organics",
      description: "Sustainable Food & Agriculture",
      logo: "https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=200&h=200",
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      name: "Creative Studio Pro",
      description: "Digital Design & Marketing",
      logo: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=200&h=200",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      name: "Urban Coffee Co.",
      description: "Premium Coffee & Cafe Chain",
      logo: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=200&h=200",
      color: "from-red-500 to-red-600"
    },
    {
      id: 5,
      name: "FitLife Gym",
      description: "Modern Fitness & Wellness",
      logo: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=200&h=200",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 6,
      name: "EcoTravel Adventures",
      description: "Sustainable Tourism & Travel",
      logo: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=200&h=200",
      color: "from-teal-500 to-teal-600"
    },
    {
      id: 7,
      name: "BookWorm Library",
      description: "Educational Resources & Learning",
      logo: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=200&h=200",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      id: 8,
      name: "AutoCare Express",
      description: "Professional Car Services",
      logo: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=200&h=200",
      color: "from-gray-500 to-gray-600"
    }
  ];

  // Duplicate the companies array to create seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies, ...companies];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
        <div className="mb-4 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Our Business Partners</h3>
          <p className="text-white/90 text-sm">Trusted Companies We Work With</p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-infinite space-x-6">
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.id}-${index}`}
                className="flex-shrink-0 w-72 bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <div className={`h-2 bg-gradient-to-r ${company.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="w-16 h-16 rounded-full object-cover border-4 border-gray-100 shadow-md"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-bold text-gray-900 truncate">
                        {company.name}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                        {company.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L0 6.91l6.564-.954L10 0l3.436 5.956L20 6.91l-5.245 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 font-medium">Trusted Partner</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white/20 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/20 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default CompanyCarousel;
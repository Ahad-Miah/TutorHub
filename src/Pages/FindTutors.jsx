import React from 'react';

const tutors = [
    {
      id: 1,
      name: "John Doe",
      image: "https://via.placeholder.com/150",
      language: "English",
      review: 4.5,
      details: "Experienced English tutor with a passion for teaching."
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "https://via.placeholder.com/150",
      language: "Spanish",
      review: 4.7,
      details: "Certified Spanish tutor with 10+ years of experience."
    },
    {
      id: 3,
      name: "Carlos Garcia",
      image: "https://via.placeholder.com/150",
      language: "French",
      review: 4.8,
      details: "Fluent French speaker offering personalized lessons."
    }
  ];

const FindTutors = () => {
    return (
        <div className="p-6 min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Find a Tutor
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tutors.map((tutor) => (
          <div
            key={tutor.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={tutor.image}
              alt={tutor.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {tutor.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{tutor.language}</p>
              <div className="flex items-center mb-4">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={index < tutor.review ? "currentColor" : "none"}
                      viewBox="0 0 20 20"
                      className="h-5 w-5 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 15.27l-3.4 2.14 1-4.33-3.2-2.79 4.4-.37L10 4l1.2 5.95 4.4.37-3.2 2.79 1 4.33z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">{tutor.review} / 5</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">{tutor.details}</p>
              <div className="badge badge-secondary mb-4">Price:$200</div>
              <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default FindTutors;
import React from 'react';
import { MapPin, Clock, DollarSign, Building } from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: 'Dairy Farm Manager',
    company: 'Amul Dairy',
    location: 'Gujarat, India',
    salary: '₹8,00,000 - ₹12,00,000',
    type: 'Full-time',
    posted: '2 days ago',
    description: 'Looking for an experienced dairy farm manager to oversee operations at our state-of-the-art facility in Anand.',
    requirements: [
      'Minimum 5 years experience in dairy farm management',
      'B.Tech/M.Tech in Dairy Technology',
      'Knowledge of FSSAI regulations',
      'Strong team leadership skills'
    ]
  },
  {
    id: 2,
    title: 'Dairy Production Specialist',
    company: 'Mother Dairy',
    location: 'Delhi NCR, India',
    salary: '₹6,00,000 - ₹9,00,000',
    type: 'Full-time',
    posted: '1 week ago',
    description: 'Seeking a dairy production specialist to oversee milk processing and quality control at our Delhi facility.',
    requirements: [
      'Degree in Dairy Technology or Food Science',
      'Experience with modern dairy processing equipment',
      'HACCP certification preferred',
      'Knowledge of milk procurement systems'
    ]
  },
  {
    id: 3,
    title: 'Quality Assurance Manager',
    company: 'Karnataka Milk Federation',
    location: 'Bangalore, India',
    salary: '₹7,00,000 - ₹10,00,000',
    type: 'Full-time',
    posted: '3 days ago',
    description: 'Join KMF as a Quality Assurance Manager to maintain highest quality standards in our dairy products.',
    requirements: [
      'M.Sc in Food Technology/Dairy Science',
      'ISO 22000 certification knowledge',
      'Experience in dairy quality control',
      'Strong analytical skills'
    ]
  },
  {
    id: 4,
    title: 'Dairy Plant Supervisor',
    company: 'Nandini Dairy',
    location: 'Mysore, India',
    salary: '₹4,50,000 - ₹6,00,000',
    type: 'Full-time',
    posted: '5 days ago',
    description: 'Supervise daily operations of milk processing plant and manage production staff.',
    requirements: [
      'Diploma/Degree in Dairy Technology',
      'Experience in dairy plant operations',
      'Knowledge of pasteurization processes',
      'Good communication skills in Kannada and English'
    ]
  },
  {
    id: 5,
    title: 'Dairy Farm Veterinarian',
    company: 'Punjab State Cooperative Milk Federation',
    location: 'Ludhiana, India',
    salary: '₹9,00,000 - ₹14,00,000',
    type: 'Full-time',
    posted: '1 day ago',
    description: 'Looking for an experienced veterinarian to maintain cattle health and oversee breeding programs.',
    requirements: [
      'B.V.Sc & A.H. degree required',
      'Minimum 3 years experience in dairy farm practice',
      'Knowledge of artificial insemination techniques',
      'Experience with herd health management'
    ]
  }
];

export default function FindWork() {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Dairy Industry Jobs in India
          </h1>
          <p className="text-lg text-gray-600">
            Discover opportunities in India's growing dairy sector
          </p>
        </div>

        <div className="grid gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {job.title}
                  </h2>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-1" />
                      {job.company}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {job.salary}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {job.posted}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{job.description}</p>

                  <div className="mb-4">
                    <h3 className="font-medium text-gray-900 mb-2">Requirements:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col gap-2 min-w-[200px]">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {job.type}
                  </span>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
                  <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    Save Job
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
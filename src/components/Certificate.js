import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaEye, FaTimes } from 'react-icons/fa';
import { certificateData } from '../data/CertificateData';

const CertificatesPage = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handlePrev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleViewCertificate = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseCertificate = () => {
    setSelectedCertificate(null);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleCertificates = certificateData.slice(startIndex, endIndex);

  return (
    <div id='certificates' className="bg-gradient-to-b from-green-100 to-yellow-300 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-extrabold text-yellow-400 font-mono mt-8 mb-4">
        My Certificates
      </h2>

      <div className="w-full flex justify-center items-center flex-wrap p-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="text-4xl text-gray-400 hover:text-yellow-400 cursor-pointer transition duration-300 ease-in-out"
        >
          <FaArrowLeft />
        </button>
        {visibleCertificates.map((certificate) => (
          <div
            key={certificate.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mx-2 p-4 rounded-lg bg-white cursor-pointer hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="w-full h-40 mb-4 overflow-hidden rounded-md shadow-md">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-full object-cover"
                onClick={() => handleViewCertificate(certificate)}
              />
            </div>
            <div className="text-xl text-gray-800">{certificate.title}</div>
            <div className="flex justify-center mt-2">
              <button className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out" title="View Certificate" onClick={() => handleViewCertificate(certificate)}>
                <FaEye />
              </button>
            </div>
          </div>
        ))}
        <button
          onClick={handleNext}
          disabled={endIndex >= certificateData.length}
          className="text-4xl text-gray-400 hover:text-yellow-400 cursor-pointer transition duration-300 ease-in-out"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Full size image modal */}
      {selectedCertificate && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center">
          <div className="relative max-w-xl">
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="w-full rounded-lg"
            />
            <button className="absolute top-2 right-2 text-white text-xl" onClick={handleCloseCertificate}>
              <FaTimes style={{ color: 'red' }} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificatesPage;

import React from "react";
import PageLayout from "./PageLayout";

const HomePage = () => {
  return (
    <PageLayout>
    <div className="min-h-screen bg-gray-100 flex flex-col">
  

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center flex-1 text-center px-6">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Empower Your Learning with <br />
          <span className="text-blue-600">Smart Student Dashboard</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Track your progress, access resources, and stay organized—all in one place.
        </p>
        <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg text-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

      {/* Footer */}
    
    </div>
    </PageLayout>
  );
};

export default HomePage;

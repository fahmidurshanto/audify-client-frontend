import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      {/* Hero Section */}
      <header className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Create Stunning Ad Creatives with AI</h1>
        <p className="text-xl mb-8">Your one-stop solution for designing high-impact social media and ad creatives.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started for Free
        </button>
      </header>

      {/* Features Section */}
      <section className="py-20 px-10">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-2">AI-Powered Tools</h3>
            <p>Generate compelling ad copy and design ideas in seconds.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-2">Drag-and-Drop Editor</h3>
            <p>Easily customize templates to match your brand.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-2">Pre-made Templates</h3>
            <p>Choose from a vast library of professionally designed templates.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;

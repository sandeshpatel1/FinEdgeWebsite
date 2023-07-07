import React from 'react';

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    // Add your logic here to subscribe the user to the newsletter
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-white rounded-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl text-center font-bold text-black mb-8 font-sanv">
          Subscribe to Finedge and never miss a beat in the world of payments.
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center">
            <input
              type="email"
              className="bg-gray-200 rounded-lg py-3 px-4 mb-4 md:mb-0 md:mr-4 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              className="bg-emerald-800 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

import React from 'react';
import "../ServiceSection/Service.css";
import image1 from "../../Images/service1.jpg";
import image2 from "../../Images/service2.jpg";
import image3 from "../../Images/service3.jpg";


function Service() {

      return (
        <section className="py-16 bg-gray-100">
      <div className="mt-20 container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl lg:text-2xl xl:text-4xl mb-8 text-center font-sans">Our Services</h2>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-8">
            <img
              src={image1}
              alt="Service 1"
              className="w-48 h-48 object-cover rounded-full mb-6"
            />
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 font-sand">Individual Money Transfers</h2>
              <p className="text-base lg:text-lg text-gray-800 mt-4 font-sand">
              Our platform allows individuals to send money to their loved ones across borders securely and
                    conveniently. With competitive exchange rates and low fees, you can transfer funds with ease.
              </p>
              <button className="bg-emerald-800 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full mt-6 font-sand">
                Show Service Details
              </button>
            </div>
          </div>
          <div className="card flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-8">
            <img
              src={image2}
              alt="Service 2"
              className="w-48 h-48 object-cover rounded-full mb-6"
            />
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 font-sand">Business Payments</h2>
              <p className="text-base lg:text-lg text-gray-800 mt-4 font-sand">
                    Simplify your international business payments with FinEdge. Our platform offers seamless and
                    cost-effective solutions for businesses to send and receive cross-border payments, helping you
                    expand your global reach..
              </p>
              <button className="bg-emerald-800 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full mt-6 font-sand">
                Show Service Details
              </button>
            </div>
          </div>
          <div className="card flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-8 ">
            <img
              src={image3}
              alt="Service 3"
              className="w-48 h-48 object-cover rounded-full mb-6"
            />
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 font-sand">Real-Time Payment Tracking</h2>
              <p className="text-base lg:text-lg text-gray-800 mt-4 font-sand">
                    Track your cross-border payments in real-time with our advanced tracking system. Know the exact
                    status and ensuring transparency and peace of mind throughout
                    the payment process.
              </p>
              <button className="bg-emerald-800 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full mt-6 font-sand">
                Show Service Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
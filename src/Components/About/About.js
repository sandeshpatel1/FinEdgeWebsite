import React from 'react'

function About() {
  return (
    <section className="pt-20 py-16 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-xl lg:text-5xl xl:text-6xl font-sans mb-8">Recreating Cross-Border Payments</h2>
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-x-6 lg:space-y-0">
          <div className="pt-10 w-full lg:w-1/2 pr-4">
            <p className="text-md text-gray-500 lg:text-lg xl:text-2xl font-sand">
            FinEdge offers a game-changing platform for seamless cross-border transactions, empowering individuals and
            businesses to expand beyond geographical boundaries.
            </p>
            <p className="text-md text-gray-500 lg:text-lg xl:text-2xl font-sand">
              Our vision is to enable seamless transactions for individuals and businesses,
              transcending geographical boundaries.
            </p>
          </div>
          <div className="pt-10 mb-15 w-full lg:w-1/2 lg:pl-4">
            <p className="text-md text-gray-500 lg:text-lg xl:text-2xl font-sand">
            Our innovative solutions, like individual money transfers, business payments, and real-time payment tracking,
             eliminate boundaries and take the worry out of international payments
            </p>
            <p className="text-md text-gray-500 lg:text-lg xl:text-2xl font-sand">
              Experience the convenience, reliability, and
              efficiency of FinEdge for all your cross-border payment needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
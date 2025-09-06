import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Build",
      description: "Utilize the voice AI API and our intuitive agent builder to create custom voice AI agents effortlessly.",
      // visual: (
      //   <div className="w-full max-w-xs mx-auto">
      //     <div className="text-xs text-gray-500 mb-2 text-center">Start</div>
      //     <div className="space-y-3">
      //       <div className="flex items-center justify-center">
      //         <div className="w-16 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
      //           <span className="text-white text-xs">Welcome</span>
      //         </div>
      //         <div className="text-xs text-gray-500 ml-2">prompt</div>
      //       </div>
      //       <div className="flex items-center justify-center">
      //         <div className="w-20 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
      //           <span className="text-white text-xs">Qualification</span>
      //         </div>
      //         <div className="text-xs text-gray-500 ml-2">prompt</div>
      //       </div>
      //       <div className="flex items-center justify-center">
      //         <div className="w-24 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
      //           <span className="text-white text-xs">Not Qualified</span>
      //         </div>
      //         <div className="text-xs text-gray-500 ml-2">prompt</div>
      //       </div>
      //     </div>
      //     <div className="text-xs text-gray-500 mt-2 text-center">Once complete...</div>
      //   </div>
      // )
    },
    {
      number: "02",
      title: "Test",
      description: "Perform comprehensive agent testing with built-in test LLM features to ensure seamless handling of edge cases.",
      // visual: (
      //   <div className="w-full max-w-xs mx-auto bg-white border border-gray-200 rounded-lg p-3">
      //     <div className="flex space-x-2 mb-3">
      //       <div className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded">Test Audio</div>
      //       <div className="px-3 py-1 text-xs bg-blue-500 text-white rounded">Test LLM</div>
      //       <div className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded">⚙️</div>
      //     </div>
      //     <div className="text-xs text-gray-500 mb-3">New Test Case</div>
      //     <div className="space-y-2 text-xs">
      //       <div className="bg-blue-50 p-2 rounded">
      //         <p className="text-gray-800">Hey there, this is Retell reservation line. Do you want to make a reservation?</p>
      //       </div>
      //       <div className="bg-gray-50 p-2 rounded">
      //         <p className="text-gray-800">Yes</p>
      //       </div>
      //       <div className="bg-blue-50 p-2 rounded">
      //         <p className="text-gray-800">Great, could you please tell me the date you'd like to make the reservation for?</p>
      //       </div>
      //     </div>
      //   </div>
      // )
    },
    {
      number: "03",
      title: "Deploy",
      description: "Easily deploy your agents to phone calls, web calls, SMS, and more.",
      // visual: (
      //   <div className="w-full max-w-xs mx-auto flex justify-center space-x-4">
      //     <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
      //       <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      //         <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
      //       </svg>
      //     </div>
      //     <div className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center">
      //       <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
      //         <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
      //           <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      //         </svg>
      //       </div>
      //     </div>
      //     <div className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center">
      //       <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
      //         <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
      //           <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      //         </svg>
      //       </div>
      //     </div>
      //   </div>
      // )
    },
    {
      number: "04",
      title: "Monitor",
      description: "Track success rates, latency, and user sentiment through call history dashboard. Quickly identify failed calls.",
      // visual: (
      //   <div className="w-full max-w-xs mx-auto bg-white border border-gray-200 rounded-lg p-3">
      //     <div className="text-xs font-medium text-gray-800 mb-2">Call History</div>
      //     <div className="text-xs text-gray-600 mb-3">4/23/2023 15:59:36 PhoneCall - inbound</div>
      //     <div className="text-xs text-gray-500 mb-3">0:02 / 0:05</div>
      //     <div className="space-y-1">
      //       <div className="text-xs">
      //         <span className="text-gray-600">Call Successful:</span>
      //         <span className="text-green-600 ml-2">Complete</span>
      //       </div>
      //       <div className="text-xs">
      //         <span className="text-gray-600">Call Status:</span>
      //         <span className="text-gray-800 ml-2">Ended</span>
      //       </div>
      //       <div className="text-xs">
      //         <span className="text-gray-600">User Sentiment:</span>
      //         <span className="text-green-600 ml-2">Positive</span>
      //       </div>
      //       <div className="text-xs">
      //         <span className="text-gray-600">Disconnection Reason:</span>
      //         <span className="text-gray-800 ml-2">User hang up</span>
      //       </div>
      //       <div className="text-xs">
      //         <span className="text-gray-600">Average End to End Latency:</span>
      //         <span className="text-blue-600 ml-2">800ms</span>
      //       </div>
      //     </div>
      //   </div>
      // )
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-medium rounded-full mb-6">
              Value
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              How It Works
            </h2>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  {/* Step Number */}
                  <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-purple-600">
                    {step.number}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                    <span className="text-purple-600">{step.title}</span>
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {step.description}
                  </p>
                  
                  {/* Visual Element */}
                  <div className="flex-shrink-0 mt-4">
                    {step.visual}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;


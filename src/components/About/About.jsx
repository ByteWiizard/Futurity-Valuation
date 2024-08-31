import React from 'react';

const About = () => {
  return (
    <div className="  mt-28 container mx-auto p-6">
      {/* Who We Are Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4 animate-fadeIn">Who We Are</h2>
        <p className="text-lg text-gray-700 animate-fadeIn">
          <strong>Futurity</strong> is a unified team of leading technocommercial experts dedicated to delivering
          simple solutions to complex issues within a seamless and time-bound framework. Operating under the aegis of
          <strong> IBBI (The Insolvency & Bankruptcy Board of India)</strong>, Futurity works as one integrated team,
          leveraging diverse domain expertise, scale, and a deep understanding to offer exceptional and tailored
          services to our clients.
        </p>
        <h3 className="text-2xl font-semibold mt-6 mb-2 animate-fadeIn">Our Core Values</h3>
        <ul className="list-disc list-inside text-gray-700 animate-fadeIn">
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Coherence</li>
          <li>Diligence</li>
        </ul>
      </div>

      {/* Why Futurity Section */}
      <div className="animate-slideUp">
        <h2 className="text-3xl font-bold mb-4">Why Futurity</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="py-3 px-6 text-left">Key Strengths</th>
                <th className="py-3 px-6 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6">Sizeable Operations</td>
                <td className="py-3 px-6">An experienced and capable team managing large-scale operations.</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6">Integrated Services</td>
                <td className="py-3 px-6">A full-fledged company offering comprehensive financial, technical, and advisory services.</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6">One-Stop Shop</td>
                <td className="py-3 px-6">We meet all the financial and technical advisory needs of our clients.</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6">Rapid Response</td>
                <td className="py-3 px-6">Quick turnaround times to address client needs efficiently.</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6">Complex Assignments</td>
                <td className="py-3 px-6">The ability to complete challenging assignments swiftly.</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6">Deep Domain Knowledge</td>
                <td className="py-3 px-6">Extensive knowledge across various sectors.</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6">Research-Backed Expertise</td>
                <td className="py-3 px-6">Our team is backed by thorough research, ensuring informed decision-making.</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6">Experienced Team</td>
                <td className="py-3 px-6">A team with unmatched exposure and expertise in domain-related services.</td>
              </tr>
              <tr>
                <td className="py-3 px-6">Cross-Border Experience</td>
                <td className="py-3 px-6">Proven track record in executing international advisory deals.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default About;

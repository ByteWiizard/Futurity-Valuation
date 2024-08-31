import React from 'react';
import { motion } from 'framer-motion'; 
// import Image from '../../assets/image.png'

const experts = [
    {
        name: "Varun Sharma",
        title: "Founder & Partner – Futurity Valuation Advisory LLP.",
        roles: [
            "Partner & National Leader - K G Somani & Co LLP.",
            "Sr Advisory (Infra) – Mazars Advisory LLP.",
            "Registered Valuer (Securities & Financial Assets) - IBBI"
        ],
        description: "Varun Sharma is a distinguished Chartered Accountant with over 16 years in valuation and financial consulting. He has conducted and supervised over 250 valuation engagements for mid-sized and large corporates, including both domestic and international clients."
    },
    {
        name: "Brahmpal Bhardwaj",
        title: "Partner – Futurity Valuation Advisory LLP.",
        roles: [
            "Associate Member – Institute of Valuers.",
            "Registered Valuer (Plant & Machinery) - IBBI"
        ],
        description: "Brahmpal is a Master of Technology in Industrial and Production Engineering and Chartered Engineer in Mechanical Engineering. He has over 40 years of experience working in large corporates, specializing in technical studies related to business processes and transactions."
    },
    {
        name: "Varun Sharma",
        title: "Partner – Futurity Valuation Advisory LLP.",
        roles: [
            "Registered Valuer – Wealth Tax.",
            "Fellow Member – Institute of Valuers.",
            "Registered Valuer (Plant & Machinery) – IBBI (Land & Building) - IBBI"
        ],
        description: "Varun is a specialist Chartered Engineer with over 15 years of experience in technical studies, viability assessments, asset valuation, and related technical opinions."
    },
    {
        name: "M L Sareen",
        title: "Sr. Advisor – Futurity Valuation Advisory LLP.",
        roles: [
            "Ex-Deputy Chief – Housing & Urban Development Corporation.",
            "Associate Member – Institute of Valuers.",
            "Registered Valuer – Income Tax."
        ],
        description: "Mr. Sareen is a leading consultant with over 45 years of experience in infrastructure and real estate. He has been engaged by large business houses and government departments to provide technical opinions and inspect tangible assets."
    },
    {
        name: "Sumit Sharma",
        title: "Head (Automotive), Vice-President – Futurity Valuation Advisory LLP.",
        roles: [
            "Previous Engagements: Associate Director – PwC, Audit Head – Sona Koyo."
        ],
        description: "Sumit has over 12 years of professional experience in governance, risk, and compliance, managing large risk, compliance, and controls-related engagements across sectors. He is also an automobile enthusiast with a proven record of managing projects from concept to completion."
    },
    {
        name: "Deepanshu Tyagi",
        title: "Asst Vice President – Futurity Valuation Advisory LLP.",
        roles: [
            "Associate Member – Institute of Valuers.",
            "Registered Valuer – Income Tax.",
            "Chartered Engineer"
        ],
        description: "Deepanshu has over 8 years of experience in technical studies, viability assessments, and asset valuations. As a Chartered Engineer, he ensures that his engineering solutions are both innovative and compliant with industry regulations."
    },
    {
        name: "Vaibhav Jain",
        title: "Sr. Manager – Futurity Valuation Advisory LLP.",
        roles: [
            "Chartered Accountant"
        ],
        description: "Vaibhav is an expert in valuations with a broad spectrum of experience in equity valuation, impairment analysis, option valuation, financial modeling, and mergers & acquisitions. His audit capabilities extend to SOX compliance and statutory audit engagements."
    }
];

const Team = () => {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">Our Experts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experts.map((expert, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">{expert.name}</h3>
                            <p className="text-gray-600 mb-4">{expert.title}</p>
                            <ul className="text-gray-600 mb-4">
                                {expert.roles.map((role, i) => (
                                    <li key={i} className="list-disc list-inside">{role}</li>
                                ))}
                            </ul>
                            <p className="text-gray-600">{expert.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team;
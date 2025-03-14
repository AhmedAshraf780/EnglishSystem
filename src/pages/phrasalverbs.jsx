
import React, { useState, useEffect } from 'react';

const Phrasal = () => {
    const [phrasal, setPhrasal] = useState([]);

    useEffect(() => {
        const cachedData = localStorage.getItem("phrasalVerbs");

        if (cachedData) {
            // Always render from localStorage
            setPhrasal(JSON.parse(cachedData));
        } else {
            // Fetch if not in localStorage
            fetch("http://localhost:3001/phrasalVerbs")
                .then((res) => res.json())
                .then((data) => {
                    localStorage.setItem("phrasalVerbs", JSON.stringify(data));

                    // Set data by re-reading from localStorage (not directly from fetched data)
                    const updatedLocal = localStorage.getItem("phrasalVerbs");
                    if (updatedLocal) {
                        setPhrasal(JSON.parse(updatedLocal));
                    }
                })
                .catch((err) => console.log(err));
        }
    }, []);

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center p-13 ">✨ Phrasal Verbs</h1>

            {phrasal.length === 0 ? (
                <p className="text-center text-gray-500">Loading phrasal verbs...</p>
            ) : (
                <div className="space-y-6">
                    {phrasal.map((phrasal, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-4 border-l-4 border-blue-500"
                        >
                            <h2 className="text-xl font-semibold mb-2 text-blue-700">{phrasal.title}</h2>
                            <p className="text-gray-700">{phrasal.description}</p>

                            {phrasal.examples && phrasal.examples.length > 0 && (
                                <ul className="mt-3 list-disc list-inside text-gray-600">
                                    {phrasal.examples.map((ex, idx) => (
                                        <li key={idx}>{ex}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Phrasal;


import React,{useState,useEffect, use} from 'react';

const Phrasal = () => {
    const [phrasal, setPhrasal] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/phrasalVerbs")
            .then((res) => res.json())
            .then((data) => setPhrasal(data))
            .catch((err) => console.log(err));
    }, []);
    return (

        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">✨ Phrasal Verbs</h1>

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

                            {/* Optional: show examples if you have */}
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
    )
};

export default Phrasal;
import React ,{useState,useEffect, use}from 'react';

const Idioms = () => {
    const [idioms, setIdioms] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3002/idioms")
            .then((res) => res.json())
            .then((data) => setIdioms(data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <>
            <div className="p-6 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">✨ Idioms</h1>

                {idioms.length === 0 ? (
                    <p className="text-center text-gray-500">Loading idioms...</p>
                ) : (
                    <div className="space-y-6">
                        {idioms.map((idiom, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-lg p-4 border-l-4 border-blue-500"
                            >
                                <h2 className="text-xl font-semibold mb-2 text-blue-700">{idiom.title}</h2>
                                <p className="text-gray-700">{idiom.description}</p>

                                {/* Optional: show examples if you have */}
                                {idiom.examples && idiom.examples.length > 0 && (
                                    <ul className="mt-3 list-disc list-inside text-gray-600">
                                        {idiom.examples.map((ex, idx) => (
                                            <li key={idx}>{ex}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
};

export default Idioms;
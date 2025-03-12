import React, { useState, useEffect } from 'react';
const CommonPatterns = () => {
  const [patterns, setPatterns] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/commonpatterns")
      .then((res) => res.json())
      .then((data) => setPatterns(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">✨ Common English Patterns</h1>

      {patterns.length === 0 ? (
        <p className="text-center text-gray-500">Loading patterns...</p>
      ) : (
        <div className="space-y-6">
          {patterns.map((pattern, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 border-l-4 border-blue-500"
            >
              <h2 className="text-xl font-semibold mb-2 text-blue-700">{pattern.title}</h2>
              <p className="text-gray-700">{pattern.description}</p>

              {/* Optional: show examples if you have */}
              {pattern.examples && pattern.examples.length > 0 && (
                <ul className="mt-3 list-disc list-inside text-gray-600">
                  {pattern.examples.map((ex, idx) => (
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

export default CommonPatterns;
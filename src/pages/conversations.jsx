import React, { useState, useEffect } from 'react';

const Conversations = () => {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/conversations")
      .then((res) => res.json())
      .then((data) => setConversations(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">✨ Conversations</h1>

      {conversations.length === 0 ? (
        <p className="text-center text-gray-500">Loading conversations...</p>
      ) : (
        <div className="space-y-6">
          {conversations.map((conversation, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 border-l-4 border-blue-500"
            >
              <h2 className="text-xl font-semibold mb-2 text-blue-700">{conversation.topic}</h2>

              {conversation.examples && conversation.examples.length > 0 && (
                <ul className="mt-3 list-disc list-inside text-gray-600">
                  {conversation.examples.map((item, idx) => (
                    <li key={idx}>{item}</li>
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

export default Conversations;

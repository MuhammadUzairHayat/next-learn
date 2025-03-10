import React from 'react';

const View = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100 absolute top-60 left-[35%]">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">View Page</h2>
        <p className="text-gray-600 mb-6">
          This is a simple view page component styled with Tailwind CSS.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default View;

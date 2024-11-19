import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !file) {
      setMessage("Please fill all fields.");
      return;
    }

    setMessage("Data submitted successfully!");
    console.log(`Name: ${name}, Age: ${age}, File: ${file.name}`);
  };

  return (
    <div className="min-h-screen bg-[#2C7DA0] flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Healthcare Dashboard
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C7DA0]"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              Age
            </label>
            <select
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C7DA0]"
              required
            >
              <option value="">Select Age</option>
              {Array.from({ length: 100 }, (_, index) => index + 1).map(
                (value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                )
              )}
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="file"
              className="block text-sm font-medium text-gray-700"
            >
              File Upload
            </label>
            <input
              id="file"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C7DA0]"
              required
            />
          </div>

          {message && (
            <p className="mt-4 mb-4 text-center text-green-800">{message}</p>
          )}
          <button
            type="submit"
            className="w-full py-3 bg-[#2C7DA0] text-white font-semibold rounded-md  focus:outline-none focus:ring-2 focus:ring-[#389eca]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;

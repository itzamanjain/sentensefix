'use client';
import { useState } from 'react';
import { run } from './action';

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [correctedText, setCorrectedText] = useState('');

  const handleInputChange = (event:any) => {
    setInputText(event.target.value);
  };

  const handleCorrection = async () => {
    const correctText = await run(inputText);
    setCorrectedText(correctText);
  };

  return (
    <div className="flex flex-col items-center min-h-screen" style={{ backgroundImage: 'url(/day.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className="text-4xl mt-20 p-4 bg-[#e2cbb9] rounded-lg text-black text-center font-bold">
        Fix your broken sentences!!
      </h1>

      <textarea
        placeholder="Enter your text here"
        value={inputText}
        onChange={handleInputChange}
        className="w-1/2 rounded-lg p-2 text-black bg-white h-[150px] m-2  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        
      />

      <button
        onClick={handleCorrection}
        className="bg-yellow-700 hover:bg-[#e2cbb9] text-white font-bold p-4 rounded mt-4 shadow-lg"
        
      >
        Correct Grammar
      </button>

      {correctedText && (
        <div className="mt-4 p-4 text-black bg-white border border-gray-300 rounded-xl w-1/2 shadow-lg"
          style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
        >
          <h2 className="text-lg font-bold mb-2">Corrected Text:</h2>
          <p className="whitespace-pre-wrap">{correctedText}</p>
        </div>
      )}
    </div>
  );
}

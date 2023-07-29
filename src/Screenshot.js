import React, { useState } from 'react';
import axios from 'axios';

const Screenshot = () => {
  const [url, setUrl] = useState('');
  const [screenshot, setScreenshot] = useState(null);

  const handleCapture = async () => {
    try {
      const response = await axios.post('http://34.16.152.36:8080/capture', { url }, { responseType: 'arraybuffer' });
      const screenshotBlob = new Blob([response.data], { type: 'image/png' });
      setScreenshot(URL.createObjectURL(screenshotBlob));
    } catch (error) {
      console.error('Error capturing screenshot:', error);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.download = 'screenshot.png';
    link.href = screenshot;
    link.click();
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold mb-6">Webpage Screenshot Capture</h1>
      <div className="flex flex-col md:flex-row space-y-2 md:space-x-2 md:items-center">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="px-4 py-2 border rounded-md w-full md:w-1/2"
          placeholder="Enter URL..."
        />
        <button
          onClick={handleCapture}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
        >
          Capture Screenshot
        </button>
      </div>
      {screenshot && (
        <div className="mt-6">
          <img src={screenshot} alt="Screenshot" className="max-w-full border rounded" />
          <button
            onClick={handleDownload}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            Download Screenshot
          </button>
        </div>
      )}
    </div>
  );
};

export default Screenshot;


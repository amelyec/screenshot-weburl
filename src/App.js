import React from 'react';
import DemoChart from './DemoChart';
import Screenshot from './Screenshot';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">React + Tailwind CSS + Chart.js</h1>
      <div className="bg-white shadow-md p-4 rounded-md">
        <Screenshot />
      </div>
    </div>
  );
}

export default App;

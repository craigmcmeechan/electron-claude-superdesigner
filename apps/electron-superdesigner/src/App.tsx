import React from 'react';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Electron Super Designer</h1>
      <p>Welcome to your Electron app with React!</p>
      <button
        onClick={() => alert('Hello from Electron + React!')}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Click me!
      </button>
    </div>
  );
};

export default App;
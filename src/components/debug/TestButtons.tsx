import React from 'react';

export const TestButtons: React.FC = () => {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 20, 
      right: 20, 
      zIndex: 99999,
      background: 'black',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid red'
    }}>
      <h3 style={{ color: 'white', marginBottom: '10px' }}>🔧 Debug Panel</h3>
      
      {/* Pure HTML button */}
      <button 
        onClick={() => alert('Button 1 works!')}
        style={{
          display: 'block',
          width: '200px',
          margin: '10px 0',
          padding: '10px',
          background: 'blue',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Test Button 1 (onClick)
      </button>

      {/* Button with onMouseDown */}
      <button 
        onMouseDown={() => alert('Button 2 works!')}
        style={{
          display: 'block',
          width: '200px',
          margin: '10px 0',
          padding: '10px',
          background: 'green',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Test Button 2 (onMouseDown)
      </button>

      {/* Link styled as button */}
      <a 
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'block',
          width: '180px',
          margin: '10px 0',
          padding: '10px',
          background: 'purple',
          color: 'white',
          textAlign: 'center',
          textDecoration: 'none',
          fontSize: '16px'
        }}
      >
        Test Link (GitHub)
      </a>

      {/* Input field */}
      <input 
        type="text"
        placeholder="Can you type here?"
        onChange={(e) => console.log('Input:', e.target.value)}
        style={{
          display: 'block',
          width: '180px',
          margin: '10px 0',
          padding: '10px',
          fontSize: '16px'
        }}
      />
    </div>
  );
};

export default TestButtons;
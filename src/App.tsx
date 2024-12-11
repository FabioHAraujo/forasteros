// Run this with Vite for optimal setup
// Save this as App.jsx or main component in a React/Vite project
import React, { useEffect } from 'react';
import './App.css'; // Create CSS file for styles

function App() {
  useEffect(() => {
    const container = document.getElementById('bg-cubes');
    const colors = ['#0f0', '#0c0', '#0b0'];

    for (let i = 0; i < 50; i++) {
      const cube = document.createElement('div');
      cube.className = 'cube';
      cube.style.left = `${Math.random() * 100}%`;
      cube.style.animationDuration = `${Math.random() * 5 + 5}s`;
      cube.style.animationDelay = `${Math.random() * 5}s`;
      cube.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      container.appendChild(cube);
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1 style={{ textAlign: 'center' }}>
        ISSO NÃO É UM SITE É O IP DO NOSSO SERVER DE MINECRAFT
        <br />VERSÃO: 1.21.4
        <br />JOGA LÁ!
      </h1>
      <div className="bg-cubes" id="bg-cubes"></div>
    </div>
  );
}

export default App;

import React from 'react';
import Header from './Header';
import Link from './shared/Link';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Link></Link>
      </header>
    </div>
  );
}

export default App;

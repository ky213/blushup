import React from 'react';
import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="h-100 d-flex flex-column">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;

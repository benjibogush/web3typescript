import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Welcome, Navbar, Footer, Loader, Services, Transactions} from './components'

function App() {
  return (
    <body className="min-h-screen">
      <nav className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </nav>


      <section >
        <Services />
        <Transactions />
        <Footer/>
      </section>
      
    </body>

    

    
    
  );
}

export default App;

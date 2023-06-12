import React from 'react';
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/Hero/HeroSection';
import './index.scss';

const App = () => (
  <>
    <Navbar />
    <HeroSection />
  </>
);

// ReactDOM.render(<App />, document.getElementById('app'));
export default App;

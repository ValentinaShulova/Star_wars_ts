import './styles/App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import React, {useState} from 'react';
import Footer from "./components/Footer";
import {defaultHero} from "./utils/constants";

const App = () =>
{
  const [hero, setHero] = useState(defaultHero)

  return (
      <div className='container-fluid'>
        <Header hero={hero}/>
        <Main changeHero={setHero} hero={hero}/>
        <Footer/>
      </div>
  );
};

export default App;

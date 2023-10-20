import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { useState } from 'react';

function App() {

  const [page, setPage] = useState('home');

  function changePage(page) {
    setPage(page);
  }


  return (
    <div className="App">
        <div className="mobilewebwrapper">
          <Header  changePage={changePage} />
          {page === 'home' ? <Home /> : 'page'}
        </div>
    </div>
  );
}

export default App;

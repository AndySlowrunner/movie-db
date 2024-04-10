import React from 'react';
import icon from './icon.png';
import style from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className={style.root}>
      <header className={style.header}>
        <img src={icon} className={style.icon} alt="logo" />
        <ul>
          <li>
            <Link to='/' className={style.link}>Home</Link>
          </li>
          <li>
            <Link to='/movies' className={style.link}>Movies</Link>
          </li>
          <li>
            <Link to='/about' className={style.link}>About</Link>
          </li>
        </ul>
      </header>
      <main className={style.main}>
        <Outlet/>
      </main>
    </div>
  );
}

export default App;

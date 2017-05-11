import React from 'react';
import Search from './Search';
import logo from './logo.png';
import './styles.css';

export default () => {
  return (
    <aside className="aside">
      <a className="brand" href="/">
        <img className="brand-logo" src={logo} />
      </a>
      <Search />
      {/* <!-- SIDENAVIGATION--> */}
      <nav className="sidenav aside-sidenav">
        <a className="sidenav-category active elements-toggle" href="#">
          SPORTS
        </a>
        <div className="sidenav-elements elements-list">
          <a className="elements-list-item active" href="#">SHOES</a>
          <a className="elements-list-item" href="#">CLOTHING</a>
          <a className="elements-list-item" href="#">ACCESORIES</a>
        </div>
        <a className="sidenav-category" href="#">BRANDS</a>
        <a className="sidenav-category" href="#">MICOACH</a>
      </nav>
      {/* <!-- !SIDENAVIGATION!--> */}
    </aside>
  );
};

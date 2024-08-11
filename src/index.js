import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavbarComponent from './components/navbar/navbar';
import WallpaperComponent from './components/wallpaper';
import ShopComponent from './components/shop/shop';
import FooterComponent from './components/footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarComponent/>
    <WallpaperComponent/>
    <ShopComponent/>
    <FooterComponent/>
  </React.StrictMode>
);

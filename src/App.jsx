import React, { useEffect } from 'react';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { Footer } from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { useNavigation } from 'react-router';
import { Spinner } from './components/spinner/Spinner';



export const App = () => {
  const nav_links = 'products partners'.split(' ');
  const nav = useNavigation();
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  })
  return (
    <>
      <Sidebar nav={nav_links} />
      <div id="detail">
        <Header nav={nav_links} />
        {nav.state == 'loading' && <Spinner />}
        <Outlet />
        <Footer />
      </div>
    </>
  )
}
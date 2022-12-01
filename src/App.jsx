import React, { useRef, useEffect, useState } from 'react';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { Footer } from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { Layout } from './components/skeleton/Skeleton';
export const App = () => {
  const nav_links = 'products pricing partners company'.split(' ')
 


  //skeleton prop
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(false)
    }, 1200)
    return () => { clearTimeout(timer) }
  },)


  return (
    <>
      {
        loading && <Layout />
      }
      {
        !loading && (<>
          <Sidebar nav={nav_links} />
          <div id="detail">
            <Header nav={nav_links} />
            <Outlet />
            <Footer />
          </div>
        </>)
      }
    </>


  )
}
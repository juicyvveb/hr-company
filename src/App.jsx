import React, { useRef, useState } from 'react';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { Footer } from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Popup } from './components/popup/Popup';

export const App = () => {
  const nav_links = 'products pricing partners company'.split(' ')
  const { ref: popup, inView, entry } = useInView({
    rootMargin: '40px',
    threshold: 0,
    delay: 300,
  });

  const [popup_help, setPopup_help] = useState(true)

  return (
    <>
      <Sidebar nav={nav_links} />

      <div id="detail">
        <Header nav={nav_links} />
        <Outlet />
        <div ref={popup}>

        </div>
        <Footer />
        <div className="popup popup__help">
          <Popup
            msg={"Заказать звонок помощника"}
            btn="хочу звонок"
            show={inView && popup_help}
            // show={ popup_help}
            close={() => setPopup_help(false)}
          />
        </div>
      </div>
    </>
  )
}
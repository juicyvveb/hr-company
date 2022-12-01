import React, { useState } from "react";
import { Info } from '../../components/info/Info';
import { Options } from '../../components/options/Options';
import { Slider } from '../../components/slider/Slider.jsx';
import { Yellow } from '../../components/yellow/Yellow';
import { Support } from '../../components/support/Support';
import { Mission } from '../../components/mission/Mission';
import { Menegment } from '../../components/menegment/Menegment';
import { Popup } from '../../components/popup/Popup';
import { useInView } from 'react-intersection-observer';



export const Main = () => {
    const { ref: popup, inView, entry } = useInView({
        rootMargin: '40px',
        threshold: 0,
        delay: 300,
    });
    const [popup_help, setPopup_help] = useState(true)



    return (
        <main>
            <Info />
            <Options />
            <Slider />
            <Yellow />
            <Support />
            <Mission />
            <div ref={popup}></div>
            <Menegment/>
            <div className="popup popup__help">
                <Popup
                    msg={"Заказать звонок помощника"}
                    btn="хочу звонок"
                    show={inView && popup_help}
                    close={() => setPopup_help(false)}
                />
            </div>
        </main>
    )
}
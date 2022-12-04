import React, { useState, useEffect } from "react";
import { Info } from '../../components/info/Info';
import { Options } from '../../components/options/Options';

import { Yellow } from '../../components/yellow/Yellow';
import { Support } from '../../components/support/Support';
import { Mission } from '../../components/mission/Mission';
import { Menegment } from '../../components/menegment/Menegment';
import { Popup } from '../../components/popup/Popup';
import { useInView } from 'react-intersection-observer';
import { Layout } from "../../components/skeleton/Skeleton";
import { useLoaderData } from "react-router";
const Slider = React.lazy(() => import('../../components/slider/Slider'));


export const Main = () => {
    const resp = useLoaderData();
    const { ref: popup, inView, entry } = useInView({
        rootMargin: '40px',
        threshold: 0,
        delay: 300,
    });
    const [popup_help, setPopup_help] = useState(true)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(r => setLoading(resp))
    }, [])

    return (
        <>
            {
                loading && <Layout />
            }
            {
                !loading && (
                    <main>
                        <Info />
                        <Options />
                        <React.Suspense>
                            <div>
                                <Slider />
                            </div>
                        </React.Suspense>
                        <Yellow />
                        <Support />
                        <Mission />
                        <div ref={popup}></div>
                        <Menegment />
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
        </>

    )
}
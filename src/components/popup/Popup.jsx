import React, { useRef, useState } from "react";
import s from './Popup.module.scss';
import { Button } from "../button/Button";
import { CSSTransition } from 'react-transition-group';
import './appear.scss';
import { Phone } from "./telForm/Phone";

export const Popup = ({ msg, btn, show, close }) => {
  const nodeRef = useRef(null);
  const [request, setRequest] = useState(false);
  const [approved, setApproved] = useState(false);
  const [visible, setVisible] = useState(true);


  //имитация обработки запроса и изменение состояние кнопки
  function approveCall() {
    setApproved(true); //кнопка ПРИНЯТО
    setRequest(false); 
    setTimeout(() => {
      setVisible(false)
    }, 500)
  }

  return (
    <CSSTransition
      classNames="my-popup"
      nodeRef={nodeRef}
      mountOnEnter={true}
      unmountOnExit={true}
      appear={true}
      in={show && visible}
      timeout={400}
      onExit={() => setRequest(false)}
    >
      <div className={s.popup} ref={nodeRef}>
        <h3 className={s.title}>{msg}</h3>
        <div className={`${s.img} popup-image__help`}></div>
        <button
          onClick={close}
          className={s.close}><span></span></button>
        <div className={s.buttons}>
          {
            approved
              ? (<div className={`${s.btn} ${s['btn__approve']}`} onClick={() => setRequest(true)}>
                <Button >принято</Button>
              </div>)
              : request
                ? (<div className={s.form}>
                  {/* кнопка с input type='mob', для отправки запроса  */}
                  <Phone complete={() => { approveCall() }} />
                </div>)
                : !request && !approved
                  ? (<div className={s.btn} onClick={() => setRequest(true)}>
                    {/* изначальная кнопка, переданная в props  */}
                    <Button >{btn}</Button> 
                  </div>) : ''
          }
        </div>
      </div>
    </CSSTransition>
  )
}



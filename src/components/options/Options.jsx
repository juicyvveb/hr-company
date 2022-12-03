import React, { useState, useEffect, useRef } from "react";
import s from './Options.module.scss';
import { optimize } from "../../js/optimizePhoto";
import { Button } from '../button/Button';
import { CSSTransition } from "react-transition-group";
import './block_animate.scss';
//photos
import hRHub from '../../assets/img/hRHub.svg';
import leave from '../../assets/img/leave.svg';
import claims from '../../assets/img/claims.svg';
import payroll from '../../assets/img/payroll.svg';
import benefits from '../../assets/img/benefits.svg';
import mobile from '../../assets/img/mobile.svg';
import time from '../../assets/img/time.svg';
import business_hRHub from '../../assets/img/business_hRHub.jpg';
import business_leave from '../../assets/img/business_leave.jpg';
import business_claims from '../../assets/img/business_claims.jpg';
import business_payroll from '../../assets/img/business_payroll.jpg';
import business_benefits from '../../assets/img/business-benefits.jpg';
import business_mobile from '../../assets/img/business_mobile.jpg';
import business_time from '../../assets/img/business_mobile.jpg';
import { useInView } from "react-intersection-observer";
import { animation_list } from "./gsap_animation";
import { animation_image } from "./gsap_animation";


export const Options = () => {
  const [theme, setTheme] = useState('hRHub')
  const map = {
    hRHub: [hRHub, '#EAF3FF', business_hRHub],
    mobile: [mobile, '#FFE5ED', business_mobile],
    leave: [leave, '#FFF8E4', business_leave],
    time: [time, '#FFF3EF', business_time],
    claims: [claims, '#E2FBF2', business_claims],
    payroll: [payroll, '#F1F1FC', business_payroll],
    benefits: [benefits, '#F3E5F5', business_benefits],
  };
  const [bild, setBild] = useState(true);
  const nodeRef = useRef(null);
  // const img_block= useRef(null)
  const { ref: title, inView: titleInView, entry } = useInView({})
  let [shown, setShown] = useState(false)

  useEffect(() => {
    if (titleInView && !shown) {
      animation_list('.listItem');
      animation_image(nodeRef.current)
      setShown(true)
    } 
  })


  // UI часть компонента
  function Build() {
    useEffect(() => {
      optimize(`.${s['bild-image']}`, 'optimize')
    }, [])
    return (
      <>
        <h1>{theme}</h1>
        <div
          className={`${s['bild-image']} optimize`}
        >
          <img src={`${map[theme][2]}`} alt="" />
        </div>
      </>

    )
  }


  function set_animation_and_theme(propose) {
    if (propose == theme) {
      return
    }
    setBild(false);
    setTimeout(() => {
      setBild(true);
      setTheme(propose);
    }, 500)
  }


  return (
    <div className={`${s.content} ${s.wrap} wrap`}>
      <p className={`${s['content-text']}`}>people operations platform</p>
      <h2 ref={title} className={`${s['content-title']}`}>Swingvy makes it easy to onboard, play, insure and support.</h2>
      <ul className={s.list}>
        {
          Object.keys(map).map((el, i) => (
            <li
              className="listItem"
              
              onClick={() => { set_animation_and_theme(el) }}
              key={i}
              style={{ backgroundColor: `${map[el][1]}` }}>
              <span style={{ backgroundImage: `url(${map[el][0]})` }}></span>
              <p>{el}</p>
            </li>
          ))
        }
      </ul>

      <CSSTransition
        in={bild}
        timeout={1}
        classNames="bild"
        nodeRef={nodeRef}
        mountOnEnter={true}
      >
        <div
          ref={nodeRef}
          className={s.bild}
          style={{ backgroundColor: `${map[theme][1]}`}}>
          <Build />
        </div>
      </CSSTransition>



      <div className={s.button} onClick={() => { setBild(!bild) }}>
        <Button >Learn more</Button>
      </div>
    </div>
  )
}
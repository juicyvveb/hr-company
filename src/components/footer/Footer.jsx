import React from 'react';
import s from './Footer.module.scss';
import { List } from './list/List';
import { Select } from '../select/Select';
import { Logo } from '../logo/Logo';

//icons
import tg from '../../assets/img/tg.png';
import inst from '../../assets/img/inst.png';
import gh from '../../assets/img/gh.png';
import link from '../../assets/img/link.png';


export const Footer = () => {
  const imgs = {
    tg,
    inst,
    gh,
    link
  }

  return (
    <div className={`${s.content} ${s.wrap} wrap`}>

      {/* first block */}
      <div className={`${s.block} ${s['block_1']}`}>


        <div className={s.withLogo}>
          <div className={`${s['withLogo-logo']}`}>
            <Logo />
          </div>
          <h2 className={`${s['withLogo-title']}`}>
            People Operations Platform
          </h2>
          <p className={`${s['withLogo-text']}`}>
            The people platform for payroll, benefits, claims and much more.
          </p>
          <div className={`${s['withLogo-labels']}`}>
            <div></div>
            <div></div>
          </div>
        </div>


        <div className={s.lists}>
          <div className={`${s['lists-products']}`}>
            <List head={'Products'} items={'HRHub Leave Time claims payroll benefits mobile'} />
          </div>
          <List head={'Resources'} items={'Library blog helpCenter pricing'} />
          <List head={'company'} items={'aboutUs customers contactUs press careers partners'} />
          <List head={'legal'} items={'service privacyPolicy Security'} />
        </div>
      </div>


      <div className={`${s.block} ${s['block_2']}`}>
        <div className={s.country}>
          <h4 className={s.title}>country</h4>
          <div>
            <Select options={'Germany Russia USA Canada'}/>
          </div>
        </div>

        <div className={s.contacts}>
          <h4 className={s.title}>Contact us</h4>
          <ul>
            <li><a href="">Contact Sales</a></li>
            <li><a href="">support@swingvy.com</a></li>
            <li><a href="">partnership@swingvy.com</a></li>
          </ul>
        </div>
        <div className={`${s.social}`}>
          <h4 className={s.title}>Swingvy © 2020</h4>
          <ul>
            {
              Object.keys(imgs).map((el, i) => (
                <li key={i}>
                  <a href="">
                    <img src={imgs[`${el}`]} alt={el} />
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>

  )
}
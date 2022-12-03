import React from 'react';
import s from './Mission.module.scss';

import invest_1 from '../../assets/img/invest_1.png';
import invest_2 from '../../assets/img/invest_2.png';
import invest_3 from '../../assets/img/invest_3.png';
import invest_4 from '../../assets/img/invest_4.png';
import invest_5 from '../../assets/img/invest_5.png';

export const Mission = () => {
  const companies = [invest_1, invest_2, invest_3, invest_4, invest_5];

  return (
    <div className={`${s.content} ${s.wrap} wrap`}>
      <p className={`${s['content-text']}`}>our mission</p>
      <h2 className={`${s['content-title']}`}>We help SMEs to create empowering workplaces for their teams.</h2>
      <ul className={s.list}>
        <li>
          <p><span>9,000</span>small businesses and counting.</p>
        </li>
        <li>
          <p><span>200k </span>employees are actively using Swingvy.</p>
        </li>
        <li>
          <p><span>94% </span>of customers are likely to recommend Swingvy.</p>
        </li>
        <li>
          <p><span>90% </span>of customers told us switching to Swingvy is easy.</p>
        </li>
      </ul>
      <div className={s.investors}>
        <h4>Our Investors</h4>
        <ul className={s.companies}>
          {
            companies.map((el, i) => (
              <li key={i}>
                <img src={el} alt={el} />
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
import React, { useEffect } from 'react';
import s from './Support.module.scss';
import { optimize } from '../../js/optimizePhoto';


import comp_1 from '../../assets/img/comp_1.png';
import comp_2 from '../../assets/img/comp_2.png';
import comp_3 from '../../assets/img/comp_3.png';
import comp_4 from '../../assets/img/comp_4.png';
import comp_5 from '../../assets/img/comp_5.png';


export const Support = () => {
  const companies = [comp_1, comp_2, comp_3, comp_4, comp_5];

  useEffect(() => {
    optimize(`.${s['companies-item']}`, 'optimize') //для оптимизации фото (пока не прогружены - серый блок)
  }, [])


  return (
    <div className={`${s.content} ${s.wrap} wrap`}>
      <p className={`${s['content-text']}`}>Meet our Customers</p>
      <h2 className={`${s['content-title']}`}>Supporting 9,000 growing companies to manage their HR.</h2>
      <ul className={s.companies}>
        {
          companies.map((el, i) => (
            <li key={i} className={`${s['companies-item']} optimize`}>
              <img src={el} alt="company" />
            </li>
          ))
        }
      </ul>
    </div>
  )
}
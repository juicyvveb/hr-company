import React from 'react';
import s from './Menegment.module.scss';
import { Form_Request } from '../form/Form';
import { useNavigation } from 'react-router';
import { Spinner } from '../spinner/Spinner';


export const Menegment = () => {
  const nav = useNavigation()
  return (
    <div className={`${s.content} ${s.wrap} wrap`}>

      <div className={`${s['content-part']} ${s['content-part__1']}`}>
        <p className={`${s['content-text']}`}>People matter, not paper</p>
        <h2 className={`${s['content-title']}`}>Simplify HR management and payroll with Swingvy.</h2>
        <div className={`${s['content-subText_1']}`}>
          <h3>Request a demo of the Swingvy platform and:</h3>
          <ul>
            <li>Learn how you can get 80% funding with the PSG Grant</li>
            <li>Get free access to try the Swingvy platform for yourself</li>
            <li>Get access to Swingvy's mobile HR app</li>
          </ul>
        </div>
        <div className={`${s['content-subText_2']}`}>
          <p>
            “Swingvy HR platform took care of the tedious HR tasks and gave us the freedom to focus on other parts of our business.
          </p>
        </div>
        <div className={`${s['content-subText_3']}`}>
          <p>CK Changr, Founder & CEO</p>
          <p>Oxwhite</p>
        </div>
        <div className={`${s.live}`}>
          {
            [...Array(3)].map((el, i) => (
              <div key={i} className={`${s['live-item']}`}>
                <div>
                  {/* photo here */}
                </div>
              </div>

            ))
          }
        </div>
      </div>
      <div className={`${s.labels} ${s['content-part']} ${s['content-part__2']}`}>
        <div className={s.form}>
          <Form_Request />
        </div>
      </div>
      {
        nav.state == 'submitting' && <Spinner />
      }
    </div>

  )
}
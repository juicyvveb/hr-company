import React, { useEffect } from "react";
import s from './Bubbles.module.scss';
import { bubbles_move } from "../../js/bubbles";


export const Bubbles = ({ className }) => {
  useEffect(() => {
    bubbles_move()
  }, [])

  return (
    <div className={`${s['bubbles']} ${className}`}>
      {
        [...Array(5)].map((el, i) => (
          <div
            key={i}
            className={`${s['bubbles-bubble']} bubble_${i} bubble`}></div>
        ))
      }
    </div>
  )
}
import React from "react";
import s from './List.module.scss';

export const List = ({ head, items }) => {
  return (
    <div className={s.block}>
      <h4 className={s.head}>{head}</h4>
      <ul className={s.list}>
        {
          items.split(' ').map((el, i) => (
            <li key={i}>
              {el}
            </li>
          ))
        }
      </ul>
    </div>
  )
}
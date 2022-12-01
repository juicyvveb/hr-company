import React from "react";
import { Outlet } from 'react-router';
import s from './Type.module.scss';

export const Type = () => {
  return (
    <div className={`wrap ${s.type}`}>
      <h3>Type: </h3>
      <Outlet/>
    </div>
  )
}
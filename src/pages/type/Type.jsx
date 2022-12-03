import React, { useEffect } from "react";
import { Outlet } from 'react-router';
import s from './Type.module.scss';

export const Type = () => {
  return (
    <div className={`wrap ${s.type}`}>
      <Outlet />
    </div>
  )
}
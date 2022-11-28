import React, {useEffect, useRef} from "react";
import s from './Phone.module.scss';
import { useState } from 'react';

export const Phone = ({complete}) => {
  const input = useRef(null)
  useEffect(() => {
    input.current.focus()
  })

  function approve(){
    setTimeout(() => {
      complete()
    }, 600)
  }

  return (
    <form onSubmit={(e) => {e.preventDefault()}} className={s.form}>
      <input type="tel" ref={input} placeholder="номер телефона"/>
      <button type="submit" onClick={approve}></button>
    </form>
  )
}
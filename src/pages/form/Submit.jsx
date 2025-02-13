import React, { useEffect } from "react";
import {useActionData, useNavigate} from "react-router";
import s from './Submit.module.scss';

export const action = async ({ params, request }) => {
  let formData = Object.fromEntries(await request.formData());
  if (!formData) {
    throw new Error('что-то не так с отправкой формы')
  }
  return new Promise((res) => {
    setTimeout(() => {
      res({...formData, status: 'ok'})
    },1500)
  })
  .then(r => r)
}

export const Submit = () => {
  const { name, email, status }  = useActionData() || { name: false};
  const navigate = useNavigate();
  useEffect(() => {
    if(!name){
      navigate('/')
    }
  }, [name])


  return (
    <div className={`${s.submission} wrap`}>
      <h1>
        <span className={s.name}>
          {`${name},`}
        </span> форма успешно отправлена по адресу:
        <span className={s.email}>
          {`${email}`}
        </span></h1>
    </div>
  )
}
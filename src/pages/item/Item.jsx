import React, { useEffect, useState } from "react";
import s from './Item.module.scss';
import { useLoaderData } from "react-router";
import axios from 'axios';
import 'react-loading-skeleton/dist/skeleton.css'



export const loader = async ({ params, request }) => {

  const { id, type } = params;
  const url = `https://robohash.org/${type}/${id}`;
  let response
  try {
    response = await axios.get(url);
    return { id, type, response }
  }
  catch {
    console.log('error');
    throw new Error('что-то при загрузке картинки')
  }
}

export const Item = () => {
  const { type, id, response } = useLoaderData();
  let kind = type == 'products' ?
    'продукт' :
    type == 'partners' ?
      'партнер' : 'no name';

  return (
    <>
      <div className={`${s.item}`}>
        <h1 className={`${s.title}`}>Example</h1>
        <div className={s.img}>
          <img src={response.config.url} alt="" />
        </div>
        <div className={s.text}>
          <h2>{`${kind}: ${id}`}</h2>
          <p className={`${s.description}`}>Фото аутентичны и загружаются онлайн из сети <span>😃</span>
          </p>
          <p>
            За генерацию картинок спасибо <a href="https://robohash.org/">https://robohash.org/</a>
          </p>
        </div>
      </div>
    </>
  )
}
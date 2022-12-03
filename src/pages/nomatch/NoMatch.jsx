import React from "react";
import s from './NoMatch.module.scss';
import { Bubbles } from "../../components/bubbles/Bubbles";
import axios from "axios";

export const loader = async () => {
  const resp = await axios('https://jsonplaceholder.typicode.com/todos/1');
  return resp
}

export const NoMatch = () => {
  return (
    <div className={`${s.block} wrap`} >
      <Bubbles />
      <h1>Такой страницы не найдено <span>:&#040;</span></h1>
    </div>
  )
}
import React from "react";
import s from './Item.module.scss';
import { useLoaderData } from "react-router";

export const loader = async ({params, request}) => {
    return params
}

export const Item = () => {
  const {id} = useLoaderData()
  return (
    <div className={`wrap ${s.type}`}>
      <h3>{`Item № ${id}`}</h3>
    </div>
  )
}
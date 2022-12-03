import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './skeleton.scss';
import { size_detect } from '../slider/size_detect';
import React from 'react';


export const Layout = () => {
  return (
    <div className="wrapper wrap">
      <div className="section section__header">
        <Skeleton width={50} circle={true} height={50} className="logo"/>
        <div className="header-menu">
        <Skeleton width={50} circle={true} height={50} />
        <Skeleton width={100} height={20} count={5}/>
        <Skeleton width={100} height={40} count={2} className="skeleton-buttons"/>
        </div>
      </div>

      <div className="section section__main">
          <Skeleton className="block" width={'100%'} height="100%"/>
      </div>

      <div className="section section__info">
        <Skeleton width={250} />
        <Skeleton width={100} />
        <div className="list">
          <Skeleton width={40} count={6} height={40} />
        </div>
        <Skeleton className="infoBlock" width={'100%'}/>
      </div>

      <div className="section section__slider">
        <Skeleton width={200} />
        <Skeleton width={150} />
        <div className="slider">
          {
            Array(size_detect()).fill()
              .map((el, i) => (
                <div key={i} className="slider-item">
                  <Skeleton circle={true} width={50} height={50} />
                  <Skeleton width={50} />
                  <Skeleton width={100} />
                  <Skeleton width={100} />
                </div>
              ))
          }
        </div>
      </div>
    </div>



  )
}
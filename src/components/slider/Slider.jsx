import React, { useEffect, useState } from "react";
import s from './Slider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './swiper.scss';
import { size_detect } from "./size_detect";
import { optimize } from "../../js/optimizePhoto";


//imgs fot slider
import slide_0 from '../../assets/img/slide_0.png';
import slide_1 from '../../assets/img/slide_1.png';
import slide_2 from '../../assets/img/slide_2.png';
import slide_3 from '../../assets/img/slide_3.png';
import slide_4 from '../../assets/img/slide_4.png';
import slide_5 from '../../assets/img/slide_5.png';
import slide_6 from '../../assets/img/slide_6.png';


export const Slider = () => {
  const [slides_preview, setSlides_preview] = useState(2); //количество отображаемых слайдов
  const slides = [
    slide_0, slide_1, slide_2, slide_3, slide_4, slide_5, slide_6
  ]
  const targets = 'ceo hr employees developers recrouter ui ux'.split(' ')

  useEffect(() => {
    optimize(`.${s['slide-img']}`, 'optimize');
    setSlides_preview(size_detect()); //количество отображаемых слайдов меняется, в зависимости от разрешения экрана
    window.onresize = () => {
      setSlides_preview(size_detect());
    }
  })


  function SliderItem({ src, target }) {
    return (
      <div className={`${s['slide-content']}`}>
        <div className={`${s['slide-img']} optimize`}>
          <img src={src} alt="avatar" />
        </div>
        <h5>
          for {target}
        </h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nesciunt iure mollitia eveniet vel est.
        </p>
      </div>
    )
  }
  return (
    <div className={`${s.content} ${s.wrap} wrap`}>
      <p className={`${s['content-text']}`}>people central</p>
      <h2 className={`${s['content-title']}`}>Bring your people together in one place.</h2>
      <Swiper
        spaceBetween={40}
        slidesPerView={slides_preview}
        className={`${s.slider} mySwiper`}
        modules={[Pagination, Navigation]}
        navigation={true}
        pagination={{
          type: "progressbar",
        }}
      >
        {
          slides.map((el, i) => (
            <SwiperSlide key={i} className={`${s.slide}`}>
              <SliderItem src={el} target={targets[i]} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}
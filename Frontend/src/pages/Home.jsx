import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Home = () => {
  return (
    <div>
       <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="./Images/COOLERMASTER-C700P-EL-DORADO-11" alt="cpu" style={{width:"100%"}}/></SwiperSlide>
      <SwiperSlide><img src="https://hrc.in.th/wp-content/uploads/2023/08/LIAN-LI-PC-O11-DYNAMIC-EVO-10.jpg" alt="cpu"style={{width:"100%", height: "100%"}}/></SwiperSlide>
      <SwiperSlide><img src="https://hrc.in.th/wp-content/uploads/2023/02/NZXT-H9-ELITE-SUMMON-7.jpg" alt="cpu"style={{width:"100%"}} /></SwiperSlide>
      <SwiperSlide><img src="https://hrc.in.th/wp-content/uploads/2023/05/THERMALTAKE-CORE-P8-TEMPERED-GLASS-BLACK-NN.-4.jpg" alt="cpu"style={{width:"100%"}} /></SwiperSlide>
      ...
    </Swiper>
    </div>
  )
}

export default Home

import React from 'react';
import { Carousel } from 'antd';
import { Button } from 'antd';

const autoplaySpeed = 2000;
export default function Home() {
  return (
    <div className="fixed  h-screen overflow-hidden">
      <Carousel
        autoplay
        autoplaySpeed={autoplaySpeed}
        infinite
        className="w-screen h-screen"
      >
        <div className="w-screen h-screen">
          <img
            src="https://thescriptblog.com/wp-content/uploads/2020/10/tumblr_inline_nrvrnfIALM1rk1lvi_1280.jpg"
            alt="Inception Poster"
            className="w-screen h-screen object-cover"
          />
        </div>
        <div className="w-screen h-screen">
          <img
            src="https://images7.alphacoders.com/546/546680.jpg"
            alt="Interstellar Poster"
            className="w-screen h-screen object-cover"
          />
        </div>
        <div className="w-screen h-screen">
          <img
            src="https://wallpapercat.com/w/middle-retina/6/e/8/1381542-3840x2160-desktop-4k-movie-poster-wallpaper-photo.jpg"
            alt="Interstellar Poster"
            className="w-screen h-screen object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
}

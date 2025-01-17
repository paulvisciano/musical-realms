import './MusicalCube.css';
import './SwiperOverrides.css';
import { SwiperSlide, Swiper } from "swiper/react";
import { Swiper as SwiperType } from 'swiper/types';
import { EffectCube, Navigation } from 'swiper/modules';

import React from "react";
import { nanoid } from '@reduxjs/toolkit';
import { Size } from '../interfaces/Size';
import { CubeSide } from '../cubeSide/CubeSide';

interface Options {
    size?: Size;
    sounds: string[];
    enableLoop?: boolean;
    enableSync?: boolean;
    setSharedTrackTime: (newTrackTime: number) => void;
    getSharedTrackTime: () => number;
}

const MusicalCube: React.FC<Options> = ({ size = { height: 333, width: 333 }, sounds, ...props }) => {
    return (
        <div className={`musical-cube`}>
            <Swiper
                className={`musical-cube-swiper`}
                style={{ height: size.height, width: size.width }}
                effect={'cube'}
                loop={true}
                navigation={true}
                cubeEffect={{
                    shadow: true,
                    shadowOffset: 30,
                    shadowScale: 0.85,
                }}
                onInit={(swiper: SwiperType) => {
                    //Force update to remove dark background from slide
                    setTimeout(() => {
                        swiper.update();
                    });
                }}
                onSwiper={(swiper: SwiperType) => {
                    //Force update to remove dark background from slide
                    setTimeout(() => {
                        swiper.update();
                    });
                }}
                modules={[EffectCube, Navigation]}
            >
                {
                    sounds.map((sound : any, index : any) =>
                        <SwiperSlide key={`cube-slide-${index}`}>
                            <CubeSide id={nanoid()} sound={sound} size={size} {...props} />
                        </SwiperSlide>
                    )}

            </Swiper>
        </div>
    );
}

export default MusicalCube;
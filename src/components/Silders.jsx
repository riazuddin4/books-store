"use client"

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function Sliders() {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        fetch('https://books-store-fawn.vercel.app/data.json')
            .then(res => res.json())
            .then(data => setSlides(data));
    }, []);

    return (
        <div className="h-[500px] w-[500px] mx-auto mt-7">
            <Swiper
                className="h-full"
                pagination={{ clickable: true }}
                modules={[Pagination]}
            >
                {slides.map(slide => (
                    <SwiperSlide
                        key={slide.id}
                        className={`flex items-center justify-center ${slide.color}`}
                    >   
                    <Image src={slide.image_url} alt={`Slide ${slide.id}`} width={600} height={400} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
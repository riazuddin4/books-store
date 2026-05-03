// "use client"
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/pagination';

// import { Pagination } from 'swiper/modules';

// export default function Silders() {
//     return (
//         <div className="h-screen w-full">
//             <Swiper
//                 className="h-full"
//                 spaceBetween={50}
//                 pagination={{ clickable: true }}
//                 modules={[Pagination]}
//                 nested={true}
//             >
//                 <SwiperSlide className="flex items-center justify-center bg-blue-200">
//                     Horizontal Slide 1
//                 </SwiperSlide>

//                 <SwiperSlide className="h-full">
//                     <Swiper
//                         direction="vertical"
//                         className="h-full"
//                         spaceBetween={50}
//                         pagination={{ clickable: true }}
//                         modules={[Pagination]}
//                         nested={true}
//                     >
//                         <SwiperSlide className="flex items-center justify-center bg-red-200">
//                             Vertical Slide 1
//                         </SwiperSlide>
//                         <SwiperSlide className="flex items-center justify-center bg-red-300">
//                             Vertical Slide 2
//                         </SwiperSlide>
//                         <SwiperSlide className="flex items-center justify-center bg-red-400">
//                             Vertical Slide 3
//                         </SwiperSlide>
//                         <SwiperSlide className="flex items-center justify-center bg-red-500">
//                             Vertical Slide 4
//                         </SwiperSlide>
//                         <SwiperSlide className="flex items-center justify-center bg-red-600">
//                             Vertical Slide 5
//                         </SwiperSlide>
//                     </Swiper>
//                 </SwiperSlide>

//                 <SwiperSlide className="flex items-center justify-center bg-green-200">
//                     Horizontal Slide 3
//                 </SwiperSlide>

//                 <SwiperSlide className="flex items-center justify-center bg-yellow-200">
//                     Horizontal Slide 4
//                 </SwiperSlide>
//             </Swiper>
//         </div>
//     );
// }
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
        fetch('http://localhost:3000/data.json')
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
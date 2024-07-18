import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import patientAvatar from '../../assets/images/patient-avatar.png';
import { HiStar } from 'react-icons/hi';


const Testimonial = () => {
    // Array of testimonial items
    const testimonials = [
        {
            name: "Muhibur Rahman",
            stars: 5,
            content: "I have taken medical services from them. They treat so well and they are providing the best medical services.Good services"
        },
        {
            name: "Muhibur Rahman",
            stars: 4,
            content: "I received exceptional medical care from their team. Their treatment approach is outstanding and their services are good!"
        },
        {
            name: "Muhibur Rahman",
            stars: 5,
            content: "Their medical services good. The care they provided was exceptional, and their commitment to excellence is evident in every aspect of their practice."
        }
    ];

    return (
        <div className='mt-[30px] lg:mt-[55px] w-'>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} style={{ marginRight: '20px', marginLeft: index !== 0 ? '20px' : '0' }}>
                        <div className="testimonial-slide">
                            <div className="flex items-center gap-[13px]">
                                <img src={patientAvatar} alt="" />
                                <div>
                                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                                        {testimonial.name}
                                    </h4>
                                    <div className="flex items-center gap-[2px]">
                                        {Array.from({ length: testimonial.stars }, (_, i) => (
                                            <HiStar key={i} className="text-yellowColor w-[18px] h-5" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-[16px] leading-7 mt-4 text-textcolor w-[300px] font-[400]">
                                "{testimonial.content}"
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Testimonial;

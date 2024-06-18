"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { FreeMode, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import ICON from "@/assets/blog/Blog.jpg";
import ICON1 from "@/assets/blog/article-1.jpg";
import SectionText from './SectionText';
import Heading from './Heading';
import Divider from './Divider';

const images = [
    {
        image: ICON,
        alt: "Blog Image 1"
    },
    {
        image: ICON1,
        alt: "Article Image 1"
    },
    {
        image: ICON,
        alt: "Blog Image 2"
    },
    {
        image: ICON1,
        alt: "Article Image 2"
    },
    {
        image: ICON,
        alt: "Blog Image 3"
    },
    {
        image: ICON1,
        alt: "Article Image 3"
    },
    {
        image: ICON,
        alt: "Blog Image 4"
    },
    {
        image: ICON1,
        alt: "Article Image 4"
    },
    {
        image: ICON1,
        alt: "Article Image 5"
    },
    {
        image: ICON1,
        alt: "Article Image 6"
    },
    {
        image: ICON1,
        alt: "Article Image 7"
    },
    {
        image: ICON1,
        alt: "Article Image 8"
    },
    {
        image: ICON1,
        alt: "Article Image 9"
    },
    {
        image: ICON1,
        alt: "Article Image 10"
    },
    {
        image: ICON1,
        alt: "Article Image 11"
    },
    {
        image: ICON1,
        alt: "Article Image 12"
    },
    {
        image: ICON1,
        alt: "Article Image 13"
    },
    {
        image: ICON1,
        alt: "Article Image 14"
    },
    {
        image: ICON1,
        alt: "Article Image 15"
    },
];

export default function Marquee() {
    return (
        <section className='py-6'>
            <div className="text-center max-w-4xl mx-auto">
                <SectionText title="Our Partners" />
                <Heading title="Tea has a complex positive effect on the body" />
                <Divider width={2} />
            </div>
            <Swiper
                slidesPerView={8}
                spaceBetween={30}
                freeMode={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                speed={3000}
                loop={true}
                modules={[FreeMode, Autoplay]}
                className="mySwiper"
                breakpoints={{
                    320: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    480: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    640: {
                        slidesPerView: 5,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 6,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 7,
                        spaceBetween: 30
                    },
                    1280: {
                        slidesPerView: 8,
                        spaceBetween: 30
                    },

                }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={image.image}
                            alt={image.alt}
                            width={1920}
                            height={1080}
                            className='aspect-video object-cover'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

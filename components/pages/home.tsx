"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import { AboutPanchshilProps, HomeLandmarkProps, HomePortfolioProps, HomeAmenitiesProps, HomeGalleryProps, HomeIntroProps, HomeSliderProps } from "@/types/api"

import { useEffect, useRef, useState } from "react";

import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";

import parser from 'html-react-parser'
import nl2br from 'nl2br'

import Link from "next/link";
import EnquiryFormHTML from "@/components/common/enquiry-form";
import ScrollReveal from "@/components/utils/ScrollReveal";
import Sidebar from "../common/sidebar";

type Props = {
    sliders: HomeSliderProps[]
    introduction: HomeIntroProps
    amenities: HomeAmenitiesProps[]
    gallery: HomeGalleryProps[]
    landmarks: HomeLandmarkProps[]
    portfolio: HomePortfolioProps[]
    aboutPanchshil: AboutPanchshilProps
}

export default function HomePage({
    sliders,
    introduction,
    amenities,
    gallery,
    landmarks,
    portfolio,
    aboutPanchshil
}: Props) {
    const basePath = process.env.NEXT_PUBLIC_PATH!.replace(/\/$/, "");

    const [activePopUp, updateActivePopUp] = useState(false);

    return (
        <>
        <Header />
        <main className="bg-black">
            {
                sliders && sliders.length > 0 && (
                <section className="relative md:h-screen w-full overflow-hidden">
                    <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={0}
                    speed={800}
                    loop={true}
                    pagination={{clickable: true}}
                    autoplay={{delay: 5000, pauseOnMouseEnter: false}}
                    className="w-full text-white master_slider"
                    >
                        {
                            sliders.map((slider, key) => (
                                <SwiperSlide key={key} className="bg-no-repeat bg-cover bg-center relative" style={{backgroundImage: `url(${slider.slider_image_url})`}}>
                                    <div className="absolute inset-0 z-1 bg-black/50"></div>
                                    <div className="w-full h-screen flex justify-center items-center text-center relative z-2">
                                        <h2 className="text-3xl leading-normal font-galaxie-polaris-light">{parser(nl2br(slider.slider_caption))}</h2>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </section>
                )
            }
        </main>
        <Footer />
        <Sidebar />
        </>
    )
}
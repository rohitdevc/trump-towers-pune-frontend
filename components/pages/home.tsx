"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import EnquiryFormPopUp from "@/components/common/enquiry-form-pop-up";

import { AboutPanchshilProps, HomeLandmarkProps, HomePortfolioProps, HomeAmenitiesProps, HomeGalleryProps, HomeIntroProps, HomeSliderProps } from "@/types/api"

import { useEffect, useRef, useState } from "react";

import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";

import parser from 'html-react-parser'
import nl2br from 'nl2br'

import Link from "next/link";
import EnquiryFormHTML from "@/components/common/enquiry-form";
import ScrollReveal from "@/components/utils/ScrollReveal";

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
        <Header onEnquiryClick={() => updateActivePopUp(true)} />
        <main className="bg-black">
            {
                sliders && sliders.length > 0 && (
                <section className="relative md:h-screen w-full overflow-hidden animate-fade-in" id="home">
                    <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={0}
                    speed={800}
                    loop={true}
                    autoplay={{delay: 5000, pauseOnMouseEnter: false}}
                    navigation={{prevEl: '.master-slider-prev', nextEl: '.master-slider-next'}}
                    pagination={{
                        el: ".master-slider-pagination",
                        clickable: true,
                        renderBullet: (index, className) =>
                            `<span class="${className}">${String(index + 1).padStart(2, "0")}</span>`,
                    }}
                    className="w-full h-100 md:h-full"
                    >
                        {
                            sliders.map((slider, key) => (
                                <SwiperSlide key={key}>
                                    <Image src={slider.slider_image_url} alt={slider.slider_caption} width={1920} height={1080} priority={key === 0} className="w-full h-full object-cover" />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <div className="pointer-events-none absolute bottom-0 left-0 z-1 h-[100px] w-full bg-gradient-to-t from-black/100 to-transparent" />
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-15 z-10 flex items-center gap-10">
                        <button className="master-slider-prev text-white cursor-pointer" aria-label="Previous Slide">
                            <HiArrowLongLeft size={30} />
                        </button>
                        <div className="master-slider-pagination flex items-center gap-7 text-white text-xl" />
                        <button className="master-slider-next text-white cursor-pointer" aria-label="Next Slide">
                            <HiArrowLongRight size={30} />
                        </button>
                    </div>
                </section>
                )
            }
        </main>
        <Footer />
        <EnquiryFormPopUp activePopUp={activePopUp} updateActivePopUp={updateActivePopUp} />
        </>
    )
}
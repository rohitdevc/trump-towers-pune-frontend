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

import { IoIosArrowDown, IoMdPlay } from "react-icons/io";

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

    const [videoPlay, updateVideoPlay] = useState(false);

    const [showVideoPlay, updateShowVideoPlay] = useState(false);

    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        updateShowVideoPlay(true);
        updateVideoPlay(true);

        setTimeout(() => {
            videoRef.current?.play();
        }, 0)
    }

    const handlePause = () => {
        updateVideoPlay(false);

        setTimeout(() => {
            videoRef.current?.pause();
        }, 0)
    }

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
                    <Link className="absolute left-1/2 -translate-x-1/2 bottom-20 z-2" href="#about">
                        <IoIosArrowDown className="text-[#E55031]" size={70} />
                    </Link>
                </section>
                )
            }
            {
                introduction && (
                    <section className="px-50 py-20 flex flex-col gap-10 text-white font-galaxie-polaris-light tracking-[2px] bg-cover bg-no-repeat default-bg-color" id="about" style={{backgroundImage: `url(${basePath}/images/about.png)`}}>
                        <div className="flex flex-col gap-7 text-xl items-center">
                            <hr className="border-[#ab8e5f] border-2 w-50" />
                            <h2>Welcome to India’s first</h2>
                            <Image src={`${basePath}/images/welcome.png`} alt="Trump Towers" width={200} height={44} />
                            <h3>branded residences</h3>
                            <hr className="border-[#ab8e5f] border-2 w-50" />
                        </div>
                        <div className="h-150 relative" style={{backgroundImage: `url(${introduction.introduction_image_url})`}}>
                            {
                                introduction.introduction_video_url && (
                                <>
                                <IoMdPlay className={`absolute inset-0 top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 ${videoPlay ? 'scale-x-0 scale-y-0' : 'scale-x-100 scale-y-100' }`} size={60} onClick={handlePlay} />
                                <h3 className={`uppercase cursor-pointer absolute top-5 right-5 transition-all duration-200 z-2 ${videoPlay ? 'scale-x-100 scale-y-100' : 'scale-x-0 scale-y-0' }`} onClick={handlePause}>Pause</h3>
                                {
                                    showVideoPlay && (
                                    <video className={`z-1`} autoPlay playsInline ref={videoRef}>
                                        <source src={introduction.introduction_video_url}></source>
                                    </video>
                                    )
                                }
                                </>
                                )
                            }
                        </div>
                    </section>
                )
            }
        </main>
        <Footer />
        <Sidebar />
        </>
    )
}
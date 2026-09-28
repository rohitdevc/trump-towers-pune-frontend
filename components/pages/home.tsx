"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import { AboutPanchshilProps, HomeLandmarkProps, HomePortfolioProps, HomeAmenitiesProps, HomeGalleryProps, HomeIntroProps, HomeSliderProps } from "@/types/api"

import { useEffect, useRef, useState } from "react";

import { IoIosArrowDown, IoMdPlay, IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";


import parser from 'html-react-parser'
import nl2br from 'nl2br'

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import Sidebar from "../common/sidebar";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
    weight: "400",
    subsets: ["latin"],
});

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

    const [activePortfolio, updateActivePortfolio] = useState(0);

    const [activeAmenity, updateActiveAmenity] = useState(0);

    const amenitiesGallery = [...amenities[activeAmenity].gallery, ...amenities[activeAmenity].gallery, ...amenities[activeAmenity].gallery];

    const amenitiesGalleryRef = useRef<SwiperType | null>(null);

    useEffect(() => {
        amenitiesGalleryRef.current?.update();
        amenitiesGalleryRef.current?.slideToLoop(0);
    }, [activeAmenity]);

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
                                        <h2 className="text-xl md:text-3xl leading-normal font-galaxie-polaris-light">{parser(nl2br(slider.slider_caption))}</h2>
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
                    <section className="px-5 sm:px-10 md:px-15 lg:px-20 xl:px-25 2xl:px-50 py-15 md:py-20 flex flex-col gap-15 text-white font-galaxie-polaris-light bg-cover bg-no-repeat default-bg-color" id="about" style={{backgroundImage: `url(${basePath}/images/about.png)`}}>
                        <div className="flex flex-col gap-7 text-lg md:text-xl items-center tracking-[2px]">
                            <hr className="border-[#ab8e5f] border-2 w-50" />
                            <h2>Welcome to India’s first</h2>
                            <Image src={`${basePath}/images/welcome.png`} alt="Trump Towers" width={200} height={44} />
                            <h3>branded residences</h3>
                            <hr className="border-[#ab8e5f] border-2 w-50" />
                        </div>
                        <div className="h-45 sm:h-75 md:h-120 xl:h-170 2xl:h-150" style={{backgroundImage: `url(${introduction.introduction_image_url})`}}>
                            {
                                introduction.introduction_video_url && (
                                <div className="h-full relative">
                                    <IoMdPlay className={`absolute inset-0 top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 z-5 ${videoPlay ? 'scale-x-0 scale-y-0' : 'scale-x-100 scale-y-100' }`} size={60} onClick={handlePlay} />
                                    <h3 className={`uppercase cursor-pointer absolute top-5 right-5 transition-all duration-200 z-2 ${videoPlay ? 'scale-x-100 scale-y-100' : 'scale-x-0 scale-y-0' }`} onClick={handlePause}>Pause</h3>
                                    {
                                        showVideoPlay && (
                                        <video className={`z-1`} autoPlay playsInline ref={videoRef}>
                                            <source src={introduction.introduction_video_url}></source>
                                        </video>
                                        )
                                    }
                                </div>
                                )
                            }
                        </div>
                        <div className="flex flex-col gap-5 text-[#c1c1c1] text-center">
                            <h1 className="uppercase text-lg md:text-xl">{introduction.introduction_caption}</h1>
                            <p className="text-base md:text-lg">{parser(nl2br(introduction.introduction_description))}</p>
                        </div>
                    </section>
                )
            }
            {
                gallery && gallery.length > 0 && (
                    <section className="bg-[#343437] px-5 sm:px-10 md:px-15 lg:px-20 xl:px-25 2xl:px-50 py-5 md:pt-20 md:pb-10 flex flex-col gap-10 relative" id="residences">
                        <h2 className="uppercase font-galaxie-polaris-medium tracking-[5px] text-2xl md:text-3xl text-white text-center">Residences</h2>
                        <Swiper className="relative w-full gallery h-75 md:h-125" modules={[Navigation]} loop={true} slidesPerView={1.2} navigation={{prevEl: '.gallery_prev', nextEl: '.gallery_next'}} centeredSlides>
                            {
                                gallery.map((residence, key) => (
                                    <SwiperSlide key={key} className="relative transition-opacity duration-500 flex items-center">
                                        <div className="w-full h-full">
                                            <Image src={residence.gallery_image_url} alt={residence.gallery_caption} width={1920} height={1080} className="object-cover w-full h-full" />
                                            <div className="absolute inset-0 left-0 top-0 bg-[#0000007a]/50 z-4"></div>
                                            <h3 className="absolute left-5 md:left-10 bottom-5 md:bottom-10 lg:bottom-15 text-white z-10 font-galaxie-polaris-light text-lg md:text-xl">{residence.gallery_caption}</h3>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                            <div className="absolute right-10 sm:right-15 md:right-20 lg:right-30 bottom-5 md:bottom-10 text-white z-10 flex gap-2 md:gap-5">
                                <IoIosArrowRoundBack className="gallery_prev cursor-pointer text-3xl md:text-4xl lg:text-5xl" />
                                <IoIosArrowRoundForward className="gallery_next cursor-pointer text-3xl md:text-4xl lg:text-5xl" />
                            </div>
                        </Swiper>
                    </section>
                )
            }
            {
                amenities && amenities.length > 0 && (
                    <section className="bg-[#343437] px-5 sm:px-10 md:px-15 lg:px-20 xl:px-25 2xl:px-50 py-10 md:py-15 lg:py-20 xl:py-30 flex flex-col gap-10" id="amenities">
                        <h2 className="uppercase font-galaxie-polaris-medium tracking-[5px] text-2xl md:text-3xl text-white text-center">Amenities</h2>
                        <div className="w-full flex justify-between">
                            {
                                amenities.map((amenity, key) => (
                                    <div className="flex flex-col gap-3 md:gap-5 items-center justify-center text-center cursor-pointer group" key={key} onClick={() => updateActiveAmenity(key)}>
                                        <div className="w-7 h-7">
                                            <Image src={amenity.amenity_icon_url} alt={amenity.amenity_caption} className="object-cover w-full h-full" width={10} height={10} />
                                        </div>
                                        <h3 className={`font-galaxie-polaris-medium text-xs md:text-base transition-all duration-300 group-hover:text-white ${key === activeAmenity ? 'text-white' : ''}`}>{amenity.amenity_caption}</h3>
                                    </div>
                                ))
                            }
                        </div>
                        <Swiper className="relative w-full amenities h-75 md:h-125" onSwiper={(swiper) => { amenitiesGalleryRef.current = swiper }} modules={[Navigation]} loop={true} slidesPerView={1.2} navigation={{prevEl: '.amenities_prev', nextEl: '.amenities_next'}} centeredSlides>
                            {
                                amenitiesGallery.map((gallery, key) => (
                                    <SwiperSlide key={key} className="relative transition-opacity duration-500 flex items-center">
                                        <div className="w-full h-full">
                                            <Image src={gallery.image_url} alt={gallery.caption} width={1920} height={1080} className="object-cover w-full h-full" />
                                            <div className="absolute inset-0 left-0 top-0 bg-[#0000007a]/50 z-4"></div>
                                            <h3 className="absolute left-5 md:left-10 bottom-5 md:bottom-10 lg:bottom-15 text-white z-10 font-galaxie-polaris-light text-lg md:text-xl">{gallery.caption}</h3>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                            <div className="absolute right-10 sm:right-15 md:right-20 lg:right-30 bottom-5 md:bottom-10 text-white z-10 flex gap-2 md:gap-5">
                                <IoIosArrowRoundBack className="amenities_prev cursor-pointer text-3xl md:text-4xl lg:text-5xl" />
                                <IoIosArrowRoundForward className="amenities_next cursor-pointer text-3xl md:text-4xl lg:text-5xl" />
                            </div>
                        </Swiper>
                    </section>
                )
            }
            {
                landmarks && landmarks.length > 0 && (
                    <section className="px-5 sm:px-10 md:px-15 lg:px-20 xl:px-25 2xl:px-50 text-white flex flex-col gap-15 bg-cover bg-no-repeat py-10 bg-[#343437] items-center" style={{backgroundImage: `url(${basePath}/images/location.png)`}} id="location">
                        <h2 className="uppercase font-galaxie-polaris-medium tracking-[3px] text-2xl md:text-3xl">Location</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:flex lg:flex-row gap-10 w-full md:justify-between 2xl:w-7xl">
                            {
                                landmarks.map((landmark, key) => (
                                    <div className="flex flex-col gap-3 md:gap-5 items-center justify-center text-center" key={key}>
                                        <div className="w-7 h-7">
                                            <Image src={landmark.landmark_icon_url} alt={landmark.landmark_caption} className="object-cover w-full h-full" width={10} height={10} />
                                        </div>
                                        <h3 className="font-galaxie-polaris-light">{landmark.landmark_caption}</h3>
                                        <span className="font-galaxie-polaris-medium uppercase text-xl md:text-3xl">{landmark.landmark_distance}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <Link className="uppercase font-galaxie-polaris-light bg-[#d1aa6c] text-black px-3 py-2 tracking-[1px]" href="https://maps.app.goo.gl/2HQGQp3TrE4GQqWT6" target="_blank">View on <b className="font-galaxie-polaris-medium">Google map</b></Link>
                    </section>
                )
            }
            {
                portfolio && portfolio.length > 0 && (
                    <section className="bg-[#343437] px-5 sm:px-10 md:px-15 lg:px-20 xl:px-25 2xl:px-50 pt-20 pb-10 flex flex-col gap-10" id="portfolio">
                        <h2 className="uppercase font-galaxie-polaris-medium tracking-[5px] text-2xl md:text-3xl text-white text-center">Trump Portfolio Worldwide</h2>
                        <div className="relative h-125 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activePortfolio}
                                    initial={{ opacity: 0, scale: 1.03 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 bg-cover bg-center bg-no-repeat flex items-center"
                                    style={{ backgroundImage: `url(${portfolio[activePortfolio].portfolio_image_url})` }}
                                >
                                    <div className="lg:mt-auto mb-10 bg-black/70 w-full flex flex-col xl:flex-row gap-5 xl:gap-20 justify-between px-5 md:px-15 py-5 sm:py-10 text-center xl:text-left">
                                        <h3 className="text-[#d1aa6c] font-bold text-2xl md:text-4xl tracking-[3px] md:tracking-[6px] leading-[35px] lg:leading-[45px] xl:w-1/3 font-athelas-regular uppercase">{portfolio[activePortfolio].portfolio_caption}</h3>

                                        <p className="text-white font-galaxie-polaris-light tracking-[1px] text-base lg:text-lg leading-normal xl:w-2/3">{portfolio[activePortfolio].portfolio_description}</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-0 lg:flex justify-between py-5">
                        {
                            portfolio.map((portfolio_single, key) => (
                                <div className={`flex flex-col gap-1 text-center xl:text-left cursor-pointer transition-opacity duration-300 hover:opacity-100 ${key === activePortfolio ? 'opacity-100' : 'opacity-50'}`} key={key} onClick={() => updateActivePortfolio(key)}>
                                    <h3 className={`font-athelas-regular uppercase transition-all duration-300 hover:text-white ${key === activePortfolio ? 'text-white' : ''}`}>{portfolio_single.portfolio_caption}</h3>
                                    <h4 className="font-galaxie-polaris-light text-white">{portfolio_single.portfolio_city_name}</h4>
                                </div>
                            ))
                        }
                        </div>
                    </section>
                )
            }
            {
                aboutPanchshil && (
                    <section className={`bg-cover bg-no-repeat md:h-[80vh] relative w-full flex ${openSans.className}`} style={{backgroundImage: `url(${basePath}/images/about_panchshil_bg.jpg)`}}>
                        <div className="bg-gradient-to-b from-[#00000033] to-[#2C2E2C] absolute inset-0 left-0 top-0"></div>
                        <div className="mx-auto bg-[#2C2C2F]/87 mt-auto py-10 px-5 sm:px-10 md:px-15 lg:px-20 xl:px-35 lg:w-[80%] flex flex-col gap-10 text-center relative">
                            <h2 className="text-[#A9936E] text-4xl md:text-5xl font-galaxie-polaris-medium">{aboutPanchshil.introduction_title}</h2>
                            <p className={`text-[#979797] text-xl leading-relaxed`}>{aboutPanchshil.introduction_description}</p>
                            <Link href="https://www.panchshil.com/" target="_blank" className="uppercase tracking-[1px] border w-fit px-5 py-2 border-[#d1aa6c] mx-auto transition-all duration-500 hover:text-white hover:bg-[#d1aa6c]">Visit Website</Link>
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
"use client"

import Link from "next/link";
import { IoIosArrowDropright } from "react-icons/io";
import { useEffect } from "react";

import Footer from "@/components/common/footer";

declare global {
    interface Window {
        gtag?: (command: string, action: string, params?: { send_to?: string; }) => void;
    }
}

export default function ThankYouPage() {
    const basePath = process.env.NEXT_PUBLIC_PATH!.replace(/\/$/, "");

    useEffect(() => {
        if (typeof window.gtag === "function") {
            window.gtag("event", "conversion", {
                send_to: "AW-10845221618/5Am7CP6XspQDEPLls7Mo",
            });
        }
        
        const trackPixel = () => {
            const getParam = (param: string, url: string) => {
                try {
                    return new URL(url).searchParams.get(param) || "";
                } catch {
                    return "";
                }
            };
            
            const getCookie = (name: string) => {
                const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
                
                return match ? match[2] : null;
            };
            
            const setCookie = (name: string, value: string) => {
                const expires = new Date();
                expires.setTime(expires.getTime() + 86400000);
                document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; Path=/`;
            };
            
            const url = window.location.href;

            let ad = getParam("ad", url);
            let colCi = getParam("col_ci", url);

            if (ad) {
                setCookie("acf", ad);
            } else {
                ad = getCookie("acf") || "";
            }
            
            if (colCi) {
                setCookie("col_ci", colCi);
            } else {
                colCi = getCookie("col_ci") || "";
            }
            
            const pixelUrl = "https://ade.clmbtech.com/cde/eventTracking.htm" + `?pixelId=8722&_w=1&_t=2` + `&ad=${encodeURIComponent(ad)}` + `&col_ci=${encodeURIComponent(colCi)}` + `&rd=${Date.now()}`;
            
            const pixel = new Image();
            pixel.src = pixelUrl;
        };
        
        trackPixel();
    
    }, []);

    return (
        <>
        <main className="bg-no-repeat bg-cover bg-center h-screen flex flex-col gap-10 justify-center items-center text-center  px-5" style={{backgroundImage: `url(${basePath}/images/modal-bg.jpg)`}}>
            <h1 className="text-3xl xl:text-5xl leading-tight font-galaxie-polaris-medium text-[#d1aa6c]">THANK YOU FOR YOUR INTEREST!</h1>
            <p className="font-galaxie-polaris-light uppercase text-xl xl:text-xl text-white">A representative from our team will contact you shortly.</p>

            <Link href="/" className="flex justify-center items-center w-fit gap-2 mx-auto text-[#d1aa6c]">
                <span className={`uppercase tracking-wider text-xl font-galaxie-polaris-medium`}>Go to Homepage</span>
                <IoIosArrowDropright size={35} />
            </Link>
        </main>
        <Footer />
        </>
    )
}
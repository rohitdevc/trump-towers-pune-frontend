"use client"

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import { FaPhoneVolume } from "react-icons/fa6";
import { AiOutlineFilePdf } from "react-icons/ai";

import { IoCloseCircleOutline } from "react-icons/io5";
import EnquiryFormHTML from "./enquiry-form";

export default function Sidebar() {
    const basePath = process.env.NEXT_PUBLIC_PATH!.replace(/\/$/, "");

    const [activePopUp, updateActivePopUp] = useState(false)

    return (
        <>
        <section className="fixed right-0 top-1/2 -translate-y-1/2 z-45">
            <div className="group cursor-pointer bg-[#CBAC6B] px-5 py-3 text-white tracking-wider [writing-mode:vertical-rl] rotate-180" onClick={() => updateActivePopUp(true)}>
                <h6 className="uppercase">Enquire Now</h6>
            </div>
        </section>
        <section className={`fixed top-0 left-0 w-full overflow-y-auto h-screen z-50 bg-black/75 px-5 py-10 transform origin-center transition-transform duration-100 ${activePopUp ? 'scale-x-100 scale-y-100' : 'scale-x-0 scale-y-0 pointer-events-none'}`}>
            <div className="bg-white text-black relative py-5 sm:py-20 sm:max-w-3xl flex flex-col gap-5 sm:gap-10 justify-center items-center text-center mx-auto">
                <IoCloseCircleOutline className="absolute top-0 sm:top-5 right-0 sm:right-5 cursor-pointer text-black" size={45} onClick={() => updateActivePopUp(false)} />
                <h2 className="uppercase text-xl sm:text-2xl">Get in touch <br/> Submit your enquiry</h2>
                <EnquiryFormHTML textColour="black" bgColour="white" />
            </div>
        </section>
        </>
    )
}
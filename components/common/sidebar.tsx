"use client"

import { useState } from "react";
import { IoMdClose } from "react-icons/io";

import { IoCloseCircleOutline } from "react-icons/io5";
import EnquiryFormHTML from "./enquiry-form";

export default function Sidebar() {
    const basePath = process.env.NEXT_PUBLIC_PATH!.replace(/\/$/, "");

    const [activePopUp, updateActivePopUp] = useState(false);

    const stopBodyScroll = () => {
        document.body.classList.add("overflow-hidden");
    }

    const startBodyScroll = () => {
        document.body.classList.remove("overflow-hidden");
    }

    return (
        <>
        <section className="fixed right-0 top-1/2 -translate-y-1/2 z-45">
            <div className="group cursor-pointer bg-[#CBAC6B] px-5 py-3 text-white tracking-wider [writing-mode:vertical-rl] rotate-180" onClick={() => { updateActivePopUp(true); stopBodyScroll() }}>
                <h6 className="uppercase">Enquire Now</h6>
            </div>
        </section>
        <section className={`fixed top-0 left-0 bg-black/50 z-10 w-full h-screen overflow-y-auto pt-30 py-5 flex justify-center transtion-all origin-center duration-200 text-white font-galaxie-polaris-light ${activePopUp ? 'scale-x-100 scale-y-100' : 'scale-x-0 scale-y-0'}`}>
            <div className="w-[900px] relative bg-contain bg-center h-fit px-10 py-10 text-[#d1aa6c]" style={{backgroundImage: `url(${basePath}/images/modal-bg.jpg)`}}>
                <IoMdClose onClick={() => { updateActivePopUp(false); startBodyScroll(); }} className="absolute top-10 right-5 cursor-pointer text-[#d1aa6c]" size={25} />
                <div className="py-10">
                    <h2 className="uppercase w-fit text-2xl tracking-[1px] text-white">Enquire Now</h2>
                </div>
                <EnquiryFormHTML />
            </div>
        </section>
        </>
    )
}
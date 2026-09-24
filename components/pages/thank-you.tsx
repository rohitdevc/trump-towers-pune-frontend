"use client"

import Script from "next/script";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import EnquiryFormPopUp from "@/components/common/enquiry-form-pop-up";

import { useState } from "react";

import Link from "next/link";
import { Banner } from "@/types/api";

type Props = {
    banner: Banner
}

export default function ThankYouPage({banner}: Props) {
    const [activePopUp, updateActivePopUp] = useState(false);

    return (
        <>
        <Header onEnquiryClick={() => updateActivePopUp(true)} />
        <main className="bg-no-repeat bg-cover bg-center h-[85vh]" style={{backgroundImage: `url(${banner.banner_image_url})`}}>
            <section className="flex flex-col gap-5 justify-center items-center text-center w-full h-full text-white px-5">
                <h1 className="font-futura-bold text-3xl xl:text-6xl leading-tight">THANK YOU FOR <br />YOUR INTEREST!</h1>
                <p className="font-futura-book text-xl xl:text-2xl">A representative from our team will contact you shortly.</p>
                <Link className="uppercase border px-10 py-3 text-xl md:text-2xl" href="/">Go Back to Homepage</Link>
            </section>
        </main>
        <Footer />
        <EnquiryFormPopUp activePopUp={activePopUp} updateActivePopUp={updateActivePopUp} />
        </>
    )
}
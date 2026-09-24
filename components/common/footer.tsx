"use client"

import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
    const basePath = process.env.NEXT_PUBLIC_PATH!.replace(/\/$/, "");

    return (
        <>
        <section className="fixed top-0 left-0 bg-black/50 z-10 w-full h-screen overflow-y-auto pt-30 pb-10">
            <div className="w-3xl h-full" style={{backgroundImage: `url(${basePath}/images/modal-bg.jpg)`}}>

            </div>
        </section>
        <footer className="py-10 flex flex-col gap-5 px-30 justify-center items-center uppercase">
            <div className="flex justify-between border-b border-[var(--foreground)] w-full px-20 py-4 font-galaxie-polaris-medium text-xs tracking-[2px]">
                <span className="cursor-pointer">Privacy Policy</span>
                <ul className="flex gap-40">
                    <li>
                        <Link href="https://www.facebook.com/panchshilrealty/" target="_blank">
                            <FaFacebookF className="color-foreground" size={20} />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.linkedin.com/company/panchshilrealty/" target="_blank">
                            <FaLinkedinIn className="color-foreground" size={20} />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.youtube.com/user/panchshilrealtypune" target="_blank">
                            <FaYoutube className="color-foreground" size={20} />
                        </Link>
                    </li>
                </ul>
                <span className="cursor-pointer">Disclaimer</span>
            </div>
            <h3 className="font-galaxie-polaris-light tracking-[1px]">Seeded By <Link href="https://www.theneontree.in/" target="_blank" className="text-white">The Neon Tree</Link></h3>
        </footer>
        </>
    )
}
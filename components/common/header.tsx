"use client"

import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const basePath = process.env.NEXT_PUBLIC_PATH!.replace(/\/$/, "");

    return (
        <header className="fixed top-0 left-0 w-full flex justify-between items-center bg-black/70 z-10 px-5 sm:px-10 md:px-5 xl:px-10 2xl:px-25 py-3">
            <Link href="/" className="w-20 md:w-[125px]">
                <div>
                    <Image src={`${basePath}/images/logo.png`} alt="Trump Towers logo" width={125} height={72} className="object-cover w-full h-full" loading="eager" />
                </div>
            </Link>
            <ul className="desktop_menu">
                <li>
                    <Link href="/#about">Trump Tower Pune</Link>
                </li>
                <li>
                    <Link href="/#residences">Residences</Link>
                </li>
                <li>
                    <Link href="/#amenities">Amenities</Link>
                </li>
                <li>
                    <Link href="/#location">Location</Link>
                </li>
                <li>
                    <Link href="/#portfolio">The Trump Portfolio</Link>
                </li>
                <li>
                    <Link href="https://www.panchshilprivilege.com/" target="_blank">Panchshil Privilege</Link>
                </li>
            </ul>
            <Link href="https://www.panchshil.com/" target="_blank" className="w-15 h-15">
                <div className="w-full">
                    <Image src={`${basePath}/images/panchsil-corp-logo.png`} alt="Panchshil Logo" width={100} height={100} className="w-full h-full object-cover" loading="eager" />
                </div>
            </Link>
        </header>
    )
}
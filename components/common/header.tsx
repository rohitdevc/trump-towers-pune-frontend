"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function Header() {
    const basePath = process.env.NEXT_PUBLIC_PATH!.replace(/\/$/, "");

    const [openMenu, updateMenu] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full flex justify-between bg-black/70 z-50 px-25 py-3">
            <Link href="/" className="w-[125px]">
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
            <IoIosMenu size={50} className="lg:hidden default-color cursor-pointer mt-5" onClick={() => updateMenu(true)} />
        </header>
    )
}
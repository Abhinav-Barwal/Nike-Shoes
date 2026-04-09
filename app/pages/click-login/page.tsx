'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ClickLogin() {
    const router = useRouter();

    const [isActive, setActive] = useState(false);
    const directPage = () => {
        setActive(true);
        const timer = setTimeout(() => {
            router.push('/pages/log-in');
        }, 1000);
        return () => clearTimeout(timer);
    }
    
    return (
        <div className="clickLogin">
            <div className="logo flex justify-end" data-aos="zoom-in-up">
                <Image src={'/images/animatedDarkLogo.gif'} alt="Nike Logo" height={110} width={200}/>
            </div>
            <div className="loginShoe flex flex-col items-center" data-aos="zoom-in">
                <Image src={'/images/loginBackground.png'} alt="Nike Logo" height={260} width={400} data-aos="fade-up" data-aos-duration="2000"/>
                <h1 data-aos="fade-up" data-aos-duration="2000">Your perfect picks are just a click away</h1>
                <p data-aos="fade-up" data-aos-duration="2000">Step into your next adventure with gear that moves with you.</p>
            </div>
            <div className="main-click">
                <div className="click-login">
                    <div className={`circle-btn ${isActive ? 'animated-click' : ''}`} onClick={directPage}>
                        <Image src={'/images/nikeLogoDark.png'} alt="Nike Logo" height={35} width={50} className={`${isActive ? 'hidden' : 'block'}`}/>
                        <Image src={'/images/nikeLogoLight.png'} alt="Nike Logo" height={35} width={50} className={`${!isActive ? 'hidden' : 'block'}`}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
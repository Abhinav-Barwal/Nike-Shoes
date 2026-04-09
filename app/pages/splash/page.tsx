"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SplashPage() {
    const router = useRouter();

    useEffect (() => {
        const timer = setTimeout(() => {
            router.push('/pages/click-login');
        }, 3100);
        return () => clearTimeout(timer);
    }, [router]);
    return(
        <div className="splash">
            <Image src={'/images/animatedLightLogo.gif'} alt="Nike Logo" height={160} width={500}/>
        </div>
    )
}
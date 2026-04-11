"use client";
import Link from "next/link";
import Header from "@/app/layouts/header";
import Cards from "../../../components/Card";
import { products } from "@/app/data/products";
import Footer from "@/app/layouts/footer";
import { useState } from "react";
import { usePathname } from "next/navigation"; 
import { useMemo } from "react";

export default function Mens() {

    const [count, setCount] = useState(1)
    const pathname = usePathname();
    const headname = useMemo(() => {
        if (pathname === "/pages/home/topTrendings") return "Top Trendings";
        if (pathname === "/pages/home/womens") return "Womens";
        if (pathname === "/pages/home/childrens") return "Childrens";
        if (pathname === "/pages/home/sale") return "Sale";
        return "Mens";
    }, [pathname]);

    // const prev = () => {
    //     if (count > 1) {
    //         setCount(count - 1)
    //     }
    // }
    // const next = () => {
    //     if (count > 0)
    //     setCount(count + 1)
    // }
    return (
        <main>
            <Header/>
            <section id="mens">
                <div className="container-fluid">
                    <div className="offers-bar">
                        <p>10% Import Tax Reduction Discount with code: GEARUP</p>
                        <Link href="#">Terms & Conditions</Link>
                    </div>
                </div>
                <div className="container">
                    <div className="topHeading">
                        <h2>{headname}</h2>
                        <Link href="/pages/home" className="secondary-btn customBtn"><i className="bi bi-caret-left-fill"></i>Back</Link>
                    </div>
                    <div className="inner-cont">
                        {products.map((product) => (
                            <div className="cardBox" key={product.id}>
                                <Cards product={product}/>
                            </div>
                        ))}
                        {/* <div className="paggination">
                            <div className="prev-page" onClick={prev}><i className="bi bi-chevron-compact-left"></i></div>
                            <div className="current-pages">
                                <ul className="pages">
                                    <li>{count}</li>
                                    <li>{count+1}</li>
                                    <li>{count+2}</li>
                                    <li>{count+3}</li>
                                    <li>{count+4}</li>
                                    <li>..</li>
                                    <li>120</li>
                                </ul>
                            </div>
                            <div className="next-page" onClick={next}>
                                <i className="bi bi-chevron-compact-right"></i>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    )
}
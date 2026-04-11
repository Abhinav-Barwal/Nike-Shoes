'use client';

import Header from "@/app/layouts/header";
import Footer from "@/app/layouts/footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay,FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import Link from "next/link";
import Cards from "../cards/page";
import { products } from "@/app/data/products";

export default function Home() {
    return (
        <>
        <Header/>
        <main>
            <section id="hero">
                <div className="offers-bar">
                    <p>10% Import Tax Reduction Discount with code: GEARUP</p>
                    <Link href="#">Terms & Conditions</Link>
                </div>
                <div className="swiper">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={60}
                        freeMode={true}
                        centeredSlides={true}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        navigation={true}
                        speed={2500}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        modules={[Autoplay, FreeMode, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><Image src='/images/Crousel1.jpg' alt = "Crousel Image" className="swiper-img" width={400} height={350}></Image></SwiperSlide>
                        <SwiperSlide><Image src='/images/Crousel2.jpg' alt = "Crousel Image" className="swiper-img" width={400} height={350}></Image></SwiperSlide>
                        <SwiperSlide><Image src='/images/Crousel3.jpg' alt = "Crousel Image" className="swiper-img" width={400} height={350}></Image></SwiperSlide>
                        <SwiperSlide><Image src='/images/Crousel4.jpg' alt = "Crousel Image" className="swiper-img" width={400} height={350}></Image></SwiperSlide>
                        <SwiperSlide><Image src='/images/Crousel5.jpg' alt = "Crousel Image" className="swiper-img" width={400} height={350}></Image></SwiperSlide>
                        <SwiperSlide><Image src='/images/Crousel6.jpg' alt = "Crousel Image" className="swiper-img" width={400} height={350}></Image></SwiperSlide>
                        <SwiperSlide><Image src='/images/Crousel7.jpg' alt = "Crousel Image" className="swiper-img" width={400} height={350}></Image></SwiperSlide>
                        <SwiperSlide><Image src='/images/Crousel8.jpg' alt = "Crousel Image" className="swiper-img" width={400} height={350}></Image></SwiperSlide>
                        <SwiperSlide><Image src='/images/Crousel9.jpg' alt = "Crousel Image" className="swiper-img" width={400} height={350}></Image></SwiperSlide>
                        <SwiperSlide><Image src='/images/Crousel10.avif' alt = "Crousel Image" className="swiper-img" width={400} height={350}></Image></SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section id="whats-trending">
                    <div className="container-fluid">
                    <h1><i className="bi bi-chevron-compact-left"></i><span className="hover-line">WHAT'S TRENDING</span><i className="bi bi-chevron-compact-right"></i></h1>
                        <div className="nike-videoAdd">
                            <video src="/images/Nike video.mp4" controls autoPlay loop></video>
                        </div>
                    </div>
            </section>
            <section id="top-picks">
                <div className="container">
                    <h2><i className="bi bi-chevron-compact-left"></i><span className="hover-line">TOP PICKS</span><i className="bi bi-chevron-compact-right"></i></h2>
                    <div className="diff-sections">
                        <Link href= "/pages/home/mens" className="mens">
                            <h3><span>MENS</span></h3>
                            <Image src={"/images/mens.png"} alt ="Mens sectionImage" width={400} height={400}></Image>
                        </Link>
                        <Link href="/pages/home/womens" className="womens">
                            <h3><span>WOMENS</span></h3>
                            <Image src={"/images/women.png"} alt ="Mens sectionImage" width={400} height={400}></Image>
                        </Link>
                        <Link href="/pages/home/childrens" className="childrens">
                            <h3><span>KIDS</span></h3>
                            <Image src={"/images/child.png"} alt ="Mens sectionImage" width={400} height={400}></Image>
                        </Link>
                        <Link href="/pages/home/sale" className="sale">
                            <h3><span>Sale</span></h3>
                            <Image src={"/images/sale.png"} alt ="Mens sectionImage" width={400} height={400}></Image>
                        </Link>
                    </div>
                </div>
            </section>
            <section id="up-comings">
                <div className="container">
                    <h2><i className="bi bi-chevron-compact-left"></i><span className="hover-line">UPCOMINGS</span><i className="bi bi-chevron-compact-right"></i></h2>
                    <div className="main-box">
                        <div className="box box-1">
                            <Image src="/images/upcomings1.avif" width={800} height={400} alt="Upcoming Images"></Image>
                            <div className="hover-box">
                                <h4>Air Jordan 40 Edge PF</h4>
                                <button className="primary-btn">Shop</button>
                            </div>
                        </div>
                        <div className="box box-2">
                            <Image src="/images/upcomings2.avif" width={800} height={400} alt="Upcoming Images"></Image>
                            <div className="hover-box">
                                <h4>Rep your favourite team on match day and beyond.</h4>
                                <button className="primary-btn">Shop</button>
                            </div>
                        </div>
                        <div className="box box-3">
                            <Image src="/images/upcomings3.avif" width={800} height={400} alt="Upcoming Images"></Image>
                            <div className="hover-box">
                                <h4>Get Set For Race Day</h4>
                                <button className="primary-btn">Shop</button>
                            </div>
                        </div>
                        <div className="box box-4">
                            <Image src="/images/upcomings4.avif" width={800} height={400} alt="Upcoming Images"></Image>
                            <div className="hover-box">
                                <h4>New Arrivals</h4>
                                <button className="primary-btn">Shop</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="coldest">
                <div className="container">
                    <h2><i className="bi bi-chevron-compact-left"></i><span className="hover-line">COLDEST IN THE GAME</span><i className="bi bi-chevron-compact-right"></i></h2>
                    <div className="card-container">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={10}
                        freeMode={true}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[FreeMode]}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 2
                            },
                            992: {
                                slidesPerView: 3,
                            },
                            1440: {
                                slidesPerView: 4,
                            },
                        }}
                        className="mySwiper"
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <Cards product={product}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
        </>
    )
}
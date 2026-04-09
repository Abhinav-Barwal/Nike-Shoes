import Accordian from "../components/Accordian";
import Image from "next/image";
export default function Footer() {
    return (
        <footer id="footer" data-aos="none">
            <div className="container">
                <div className="seprator seprator-top">
                    <Image src="/images/seprateLine.png" alt="Seprator Line" width={1200} height={1}></Image>
                </div>
                <h2><i className="bi bi-chevron-compact-left"></i><span className="hover-line">FAQ</span><i className="bi bi-chevron-compact-right"></i></h2>
                <Accordian/>
                <div className="social-icons">
                    <div className="facebook">
                        <i className="bi bi-facebook"></i>
                    </div>
                    <div className="twitter">
                        <i className="bi bi-twitter"></i>
                    </div>
                    <div className="instagram">
                        <i className="bi bi-instagram"></i>
                    </div>
                    <div className="youtube">
                        <i className="bi bi-youtube"></i>
                    </div>
                </div>
                <div className="seprator">
                    <Image src="/images/seprateLine.png" alt="Seprator Line" width={1920} height={1}></Image>
                </div>
                <p>@2025 Abhinav Barwal, All rights reserved</p>
            </div>
        </footer>
    )
}
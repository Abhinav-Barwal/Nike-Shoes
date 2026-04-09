'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUP() {

    const directPage = () => {
        router.push('/pages/home');
    }
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        verifypass: ""
    });

    const handleFocus = (field: string) => {
        setFocusedField(field);
    };

    const handleBlur = (field: string) => {
        if (values[field as keyof typeof values].trim() === "") {
        setFocusedField(null);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setValues((prev) => ({ ...prev, [id]: value }));
    };
    const [addClass, setAddClass] = useState(false);
    const router = useRouter();
    const LogInrout = () => {
        setAddClass(true);
        const timer = setTimeout(() => {
            router.push('/pages/log-in');
        }, 1380);
        return () => clearTimeout(timer);
    }
    const [active, setActive] = useState(false);
    useEffect (() => {
        setActive(true);
        const timer = setTimeout(() => {
            setActive(false);
        },2000);
        return () => clearTimeout(timer);
    },[])
    return (
        <div className="sign-up">
            <div className="outer-container" data-aos="zoom-in">
                <form action="" onSubmit={(e) => e.preventDefault()}>
                    <div className="logo">
                        <Image src={'/images/animatedLightLogo.gif'} alt='Nike Logo' width={150} height={200}/>
                    </div>
                    <div className="cred-container">
                        <div className="cred-inputs">
                            <div className= {`user-name ${focusedField === "username" || values.username ? "focused" : ""}`}>
                                <input
                                type="text"
                                id="username"
                                className="input-btn primary-btn"
                                onFocus={() => handleFocus("username")}
                                onBlur={() => handleBlur("username")}
                                onChange={handleChange}
                                value={values.username}
                                autoComplete="off"
                                />                        <label htmlFor="user-name">username</label>
                            </div>
                            <div className= {`email ${focusedField === "email" || values.email ? "focused" : ""}`}>
                                <input
                                type="text"
                                id="email"
                                className="input-btn primary-btn"
                                onFocus={() => handleFocus("email")}
                                onBlur={() => handleBlur("email")}
                                onChange={handleChange}
                                value={values.email}
                                autoComplete="off"
                                />                        <label htmlFor="user-name">email</label>
                            </div>
                            <div className= {`pass ${focusedField === "password" || values.password ? "focused" : ""}`}>
                                <input
                                type="password"
                                id="password"
                                className="input-btn primary-btn"
                                onFocus={() => handleFocus("password")}
                                onBlur={() => handleBlur("password")}
                                onChange={handleChange}
                                value={values.password}
                                autoComplete="off"
                                />                        
                                <label htmlFor="pass">password</label>
                            </div>
                            <div className= {`verifypass ${focusedField === "verifypass" || values.verifypass ? "focused" : ""}`}>
                                <input
                                type="password"
                                id="verifypass"
                                className="input-btn primary-btn"
                                onFocus={() => handleFocus("verifypass")}
                                onBlur={() => handleBlur("verifypass")}
                                onChange={handleChange}
                                value={values.verifypass}
                                autoComplete="off"
                                />                        
                                <label htmlFor="pass">verifypass</label>
                            </div>
                        </div>
                        <div className="log-btns">
                            <button className="primary-btn" onClick={directPage}>Sign-up</button>
                            <p>Or</p>
                            <p className="social-icons">
                                <i className="bi bi-facebook"></i>
                                <i className="bi bi-google"></i>
                                <i className="bi bi-twitter"></i>
                            </p>
                        </div>
                    </div>
                    <div className={`logIn-cont ${addClass ? 'kick-animation': ''} ${active ? 'kick-reverse': ''}`}>
                        <Image src={'/images/loginshoe.png'} alt='Nike Logo' width={300} height={200}/>
                        <button className="primary-btn logIn-btn" onClick={LogInrout}>Log-in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
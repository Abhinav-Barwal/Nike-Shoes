'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';


export default function LogIn() {
    const notifySuccess = () => {toast.success('Welcome Back chief, We are waiting for you till you left');}
    const notifyError = () => toast.error('Wrong ID and Password please try again !');

    const [addClass, setAddClass] = useState(false);
    const SignUprout = () => {
        setAddClass(true);
        const timer = setTimeout(() => {
            router.push('/pages/sign-up');
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
    const [isFocused, setIsFocused] = useState<string | null>(null)
    const [username, setUserName] = useState('')
    const [pass, setPass] = useState('')
    const cred = [
        {username: 'abhinav_barwal', pass: '123'},
        {username: 'jagjeet_singh', pass: 'Password@123'}
    ]
    const router = useRouter();
    const handelsubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const user = cred.find ((c) => c.username === username && c.pass === pass)
        if (user) {
            notifySuccess();
            router.push('/pages/home')
        }else {
            notifyError();
        }
    }
    return (
        <div className="log-in">
            <div className="outer-container" data-aos="zoom-in">
                <form action="" onSubmit={(e) => e.preventDefault()}>
                    <div className="logo">
                        <Image src={'/images/animatedLightLogo.gif'} alt='Nike Logo' width={150} height={200}/>
                    </div>
                    <div className="cred-container">
                        <div className="cred-inputs">
                            <div className= {`user-name ${isFocused === 'username' || username ? "focused" : ''}`}>
                                <input
                                type="text"
                                id="username"
                                className="input-btn primary-btn"
                                onFocus={() => setIsFocused("username")}
                                onBlur={() => setIsFocused(null)}
                                onChange={(e) => setUserName(e.target.value)}
                                value={username}
                                autoComplete="off"
                                />
                                <label htmlFor="user-name">username</label>
                            </div>
                            <div className= {`pass ${isFocused === 'pass' || pass ? 'focused' : ''}`}>
                                <input
                                type="password"
                                id="password"
                                className="input-btn primary-btn"
                                onFocus={() => setIsFocused("pass")}
                                onBlur={()=> setIsFocused(null)}
                                onChange={(e) => setPass(e.target.value)}
                                value={pass}
                                autoComplete="off"
                                />
                                <label htmlFor="pass">password</label>
                            </div>
                            <div className="forgoten-pass">
                                <span>Forgoten Password</span>
                            </div>
                        </div>
                        <div className="log-btns">
                            <button className="primary-btn" onClick={handelsubmit}>Login</button>
                            <p>Or</p>
                            <button className="primary-btn">Login with Facebook</button>
                        </div>
                    </div>
                    <div className={`signUP-cont ${addClass ? 'kick-animation': ''} ${active ? 'kick-reverse': ''}`}>
                        <Image src={'/images/loginshoe.png'} alt='Nike Logo' width={300} height={200}/>
                        <button className="primary-btn signUp-btn" onClick={SignUprout}>Sign-up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
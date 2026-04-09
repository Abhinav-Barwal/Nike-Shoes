import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {

    const [toggleClass, setToggleClass] = useState('');
    const [screenClass, setScreenClass] = useState('');
    const [searchbar, setSearchBar] = useState(false);
    const closeSearchBar = () => {
        setSearchBar(false)
    }

    const openToggle = () => {
        setToggleClass('show-toggle');
        setScreenClass('active-screen');
        document.body.style.overflow = 'hidden';
    };
    const closeToggle = () => {
        setToggleClass('hide-toggle');
        setScreenClass('hide-screen');
        setTimeout(() => {
        setToggleClass('');
        setScreenClass('');
        document.body.style.overflow = '';
        }, 700);
    };
    return (
        <header id="header">
            <div className="top-bar">
                <div className="container">
                    <ul className="right-menu">
                        <li><Link href="#" className="hover-line">Find a Store</Link></li>|
                        <li><Link href="#" className="hover-line">Help</Link></li>|
                        <li><Link href="#" className="hover-line">Join Us</Link></li>|
                        <li><Link href="/pages/log-in" className="hover-line">Log In</Link></li>
                    </ul>
                    <div className="right-menu">
                    </div>
                </div>     
            </div>
            <div className="bottom-bar">
                <nav className="navBar">
                    <div className="container">
                        <div className="logo">
                            <Link href="/pages/home">
                                <Image src={'/images/nikeLogodark.png'} alt="Nike Logo" className="logo" width={94} height={140}></Image>
                            </Link>
                        </div>
                        <ul className="navMenus">
                            <li className="main-drop top-trendings">
                                <Link href="/pages/home/topTrendings" className="hover-line">TOP TRENDINGS</Link>
                                <div className="dropdown">
                                    <div className="container">
                                    <ul>
                                        <li><h6>Features</h6></li>
                                        <li>New & Upcoming Drops</li>
                                        <li>New Arrivals</li>
                                        <li>Bestsellers</li>
                                        <li>SNKRS Launch Calendar</li>
                                        <li>Customise with Nike By You</li>
                                        <li>Jordan</li>
                                        <li>LeBron James</li> 
                                    </ul>
                                    <ul>
                                        <li><h6>Trending</h6></li>
                                        <li>Ready for the Cold</li>
                                        <li>More Colours, More Running</li>
                                        <li>Vomero Premium</li>
                                        <li>What's Trending</li>
                                        <li>24.7 Collection</li>
                                        <li>Colours of the Season</li>
                                        <li>Retro Running</li>
                                        <li>Running Shoe Finder</li>
                                    </ul>
                                    <ul>
                                        <li><h6>Shop Icons</h6></li>
                                        <li>Lifestyle</li>
                                        <li>Air Force 1</li>
                                        <li>Air Jordan 1</li>
                                        <li>Air Max</li>
                                        <li>Dunk</li>
                                        <li>Cortez</li>
                                        <li>Blazer</li>
                                        <li>Pegasus</li>
                                        <li>Vomero</li>
                                    </ul>
                                    <ul>
                                        <li><h6>Shop By Sport</h6></li>
                                        <li>Running</li>
                                        <li>Basketball</li>
                                        <li>Football</li>
                                        <li>Golf</li>
                                        <li>Tennis & Pickleball</li>
                                        <li>Gym & Training</li>
                                        <li>Yoga</li>
                                        <li>Skateboarding</li>
                                    </ul>
                                    </div>
                                </div>
                            </li>|
                            <li className="main-drop mens">
                                <Link href="/pages/home/mens" className="hover-line">MENS</Link>
                                <div className="dropdown">
                                    <div className="container">
                                        <ul>
                                            <li><h6>Features</h6></li>
                                            <li>New Arrivals</li>
                                            <li>Bestsellers</li>
                                            <li>Shop All Sale</li>
                                        </ul>
                                        <ul>
                                            <li><h6>Shoes</h6></li>
                                            <li>All Shoes</li>
                                            <li>Lifestyle</li>
                                            <li>Jordan</li>
                                            <li>Running</li>
                                            <li>Football</li>
                                            <li>Gym & Training</li>
                                            <li>Tennis</li>
                                            <li>Skateboarding</li>
                                            <li>Sandals & Slides</li>
                                            <li>Nike By You</li>
                                        </ul>
                                        <ul>
                                            <li><h6>Shop By Sport</h6></li>
                                            <li>Running</li>
                                            <li>Basketball</li>
                                            <li>Football</li>
                                            <li>Golf</li>
                                            <li>Tennis & Pickleball</li>
                                            <li>Gym & Training</li>
                                            <li>Yoga</li>
                                            <li>Skateboarding</li>
                                        </ul>
                                        <ul>
                                            <li><h6>Accessories & Equipment</h6></li>
                                            <li>All Accessories & Equipment</li>
                                            <li>Bags & Backpacks</li>
                                            <li>Socks</li>
                                            <li>Hats & Headwear</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>|
                            <li className="main-drop womens">
                                <Link href="/pages/home/womens" className="hover-line">WOMENS</Link>
                                <div className="dropdown">
                                    <div className="container">
                                        <ul>
                                            <li><h6>Features</h6></li>
                                            <li>New Arrivals</li>
                                            <li>Bestsellers</li>
                                            <li>Shop All Sale</li>
                                        </ul>
                                        <ul>
                                            <li><h6>Shoes</h6></li>
                                            <li>All Shoes</li>
                                            <li>Lifestyle</li>
                                            <li>Jordan</li>
                                            <li>Running</li>
                                            <li>Football</li>
                                            <li>Gym & Training</li>
                                            <li>Tennis</li>
                                            <li>Skateboarding</li>
                                            <li>Sandals & Slides</li>
                                            <li>Nike By You</li>
                                        </ul>
                                        <ul>
                                            <li><h6>Shop By Sport</h6></li>
                                            <li>Yoga</li>
                                            <li>Running</li>
                                            <li>Gym & Training</li>
                                            <li>Basketball</li>
                                            <li>Tennis & Pickleball</li>
                                            <li>Golf</li>
                                            <li>Football</li>
                                            <li>Skateboarding</li>
                                        </ul>
                                        <ul>
                                            <li><h6>Accessories & Equipment</h6></li>
                                            <li>All Accessories & Equipment</li>
                                            <li>Bags & Backpacks</li>
                                            <li>Socks</li>
                                            <li>Hats & Headwear</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>|
                            <li className="main-drop childrens">
                                <Link href="/pages/home/childrens" className="hover-line">CHILDRENS</Link>
                                <div className="dropdown">
                                    <div className="container">
                                        <ul>
                                            <li><h6>Features</h6></li>
                                            <li>New Arrivals</li>
                                            <li>Bestsellers</li>
                                            <li>Back to School</li>
                                            <li>Sport Gear</li>
                                            <li>Lifestyle Looks</li>
                                            <li>Nike x LEGO®</li>
                                        </ul>
                                        <ul>
                                            <li><h6>Shoes</h6></li>
                                            <li>All Shoes</li>
                                            <li>Lifestyle</li>
                                            <li>Jordan</li>
                                            <li>Football</li>
                                            <li>Running</li>
                                            <li>Basketball</li>
                                        </ul>
                                        <ul>
                                        <ul className="kidsBy-age">
                                            <li><h6>Kids By Age</h6></li>
                                            <li>Older Kids (7 - 14 years)</li>
                                            <li>Younger Kids (4 - 7 years)</li>
                                            <li>Babies & Toddlers (0 - 4 years)</li>
                                        </ul>
                                            <li><h6>Accessories & Equipment</h6></li>
                                            <li>All Accessories & Equipment</li>
                                            <li>Bags & Backpacks</li>
                                            <li>Socks</li>
                                            <li>Hats & Headwear</li>
                                        </ul>
                                        <ul>
                                            <li><h6>Shop By Sport</h6></li>
                                            <li>Football</li>
                                            <li>Running</li>
                                            <li>Basketball</li>
                                            <li>Gym & Training</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>|
                            <li className="main-drop sale">
                                <Link href="/pages/home/sale" className="hover-line">SALE</Link>
                                <div className="dropdown">
                                    <div className="container">
                                        <ul>
                                            <li><h6>Sale & Offers</h6></li>
                                            <li>Shop All Sale</li>
                                            <li>Bestsellers</li>
                                            <li>Last Chance</li>
                                        </ul>
                                        <ul>
                                            <li><h6>Men's Sale</h6></li>
                                            <li>Shoes</li>
                                            <li>Clothing</li>
                                            <li>Accessories & Equipment</li>
                                        </ul>
                                        <ul>
                                            <li><h6>Women's Sale</h6></li>
                                            <li>Shoes</li>
                                            <li>Clothing</li>
                                            <li>Accessories & Equipment</li>
                                        </ul>
                                        <ul>
                                            <li><h6>Kids' Sale</h6></li>
                                            <li>Shoes</li>
                                            <li>Clothing</li>
                                            <li>Accessories & Equipment</li>
                                        </ul>
                                        <ul>
                                            <li><h6>Shop By Sport</h6></li>
                                            <li>Football</li>
                                            <li>Running</li>
                                            <li>Basketball</li>
                                            <li>Gym & Training</li>
                                            <li>Tennis</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="btns-right">
                            <div className="search-bar">
                                <svg className="searchIcon" aria-hidden="true" onClick={() => setSearchBar(true)} focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path></svg>
                                <input className="searchInput" type="text" id="search" placeholder="Search" onClick={() => setSearchBar(true)}/>
                            </div>
                            <Link href="#"><i className="bi bi-heart"></i></Link>
                            <Link href="#"><i className="bi bi-bag"></i></Link>
                            <button className="toggle-btn" onClick={openToggle}><i className="bi bi-list"></i></button>
                            <div className={`toggle-content ${toggleClass}`}>
                                <div className="cross-btn" onClick={closeToggle}>
                                    <i className="bi bi-plus-lg"></i>
                                </div>
                                <ul className="drop-menus">
                                    <li><Link href="/pages/home/topTrendings" className="hover-line">TOP TRENDINGS<i className="bi bi-chevron-right"></i></Link></li>
                                    <li><Link href="/pages/home/mens" className="hover-line">MENS<i className="bi bi-chevron-right"></i></Link></li>
                                    <li><Link href="/pages/home/womens" className="hover-line">WOMENS<i className="bi bi-chevron-right"></i></Link></li>
                                    <li><Link href="/pages/home/childrens" className="hover-line">CHILDRENS<i className="bi bi-chevron-right"></i></Link></li>
                                    <li><Link href="/pages/home/sale" className="hover-line">SALE<i className="bi bi-chevron-right"></i></Link></li>
                                </ul>
                                <div className="join-signup">
                                    <p>Your journey starts here — join the Nike community now.</p>
                                    <div className="Mainjoin-Sign">
                                        <Link href="" className="secondary-btn">Join Us</Link>
                                        <Link href="/pages/sign-up" className="secondary-btn">Sign Up</Link>
                                    </div>
                                </div>
                                <ul className="bottom-icons">
                                    <li><Link href="#" className="hover-line"><i className="bi bi-question-circle"></i>Help</Link></li>
                                    <li><Link href="#" className="hover-line"><i className="bi bi-heart"></i>Favorites</Link></li>
                                    <li><Link href="#" className="hover-line"><i className="bi bi-bag"></i>Bag</Link></li>
                                    <li><Link href="#" className="hover-line"><i className="bi bi-hourglass-bottom"></i>Orders</Link></li>
                                    <li><Link href="#" className="hover-line"><i className="bi bi-geo-alt"></i>Find a Store</Link></li>
                                </ul>
                            </div>
                            <div className={`toggle-screen ${screenClass}`}></div>
                            <div className={`main-searchBar ${searchbar ? 'd-block' : ''}`}>
                                <div className="container">
                                    <div className="top-line">
                                        <div className="logo">
                                            <Image src={'/images/nikeLogodark.png'} alt="Nike Logo" className="logo" width={94} height={140}></Image>
                                        </div>
                                        <div className="search-bar">
                                            <svg className="searchIcon" aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path></svg>
                                            <input className="searchInput" type="text" id="search" placeholder="Search"/>
                                        </div>
                                        <button className="cancel-btn" onClick={closeSearchBar}>Cancel</button>
                                    </div>
                                    <div className="popular-searches">
                                        <h6>Popular Search Terms</h6>
                                        <div className="searches-info">
                                            <button className="search-btn">Pegasus</button>
                                            <button className="search-btn">Zegama</button>
                                            <button className="search-btn">Nike Duck</button>
                                            <button className="search-btn">Air Force</button>
                                            <button className="search-btn">Gato LV8</button>
                                            <button className="search-btn">Air Max</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
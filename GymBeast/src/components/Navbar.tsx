
import Logo from '../assets/Logo-darkmode.svg'
import MenuIcon from '../assets/MenuIcon.svg'
import  './Navbar.css'
import {useState} from "react";
import * as Constants from "../constants/NavbarConstants.tsx"


export default function Navbar(){

    //True if navbar is currently sticking to the top (as to change its style)
    const [movedNavbar,setMovedNavbar]=useState(false);

    const [showMenu,setShowMenu]=useState(false);

    const toggleShowMenu=()=>{
        setShowMenu(prevState => !prevState)
    }
    const checkNavbarPosition=()=>{
        if(window.scrollY >=Constants.NAVBAR_SCROLL_HEIGHT){
            setMovedNavbar(true)
        }
        else{
            setMovedNavbar(false)
        }
    }

    window.addEventListener("scroll",checkNavbarPosition)

    return (
        <nav id="navbar" className={"fixed top-0  bg-gray-950 " + (movedNavbar ? "moved" : undefined)}>

            <img className="logo-img cursor-pointer m-2 self-center" src={Logo} alt="GymBeast Logo" role="button" aria-label="Main page button"
                 tabIndex={0}/>

            {/*Alternative to logo when navbar height should be lower*/}
            <a href="/" className="logo-mini self-center text-white cursor-pointer">GymBeast</a>

            <ul id="desktop-menu" className="flex justify-around h-1/2 self-center ">
                {Constants.NAVBAR_MENU_ITEMS.map((item) =>
                    <li key={item}
                        className=" text-xl flex justify-center flex-col cursor-pointer">
                        <a className="text-white" href={"/"}>{item}</a>
                    </li>
                )}
            </ul>

            <div className="flex join-crs-btn justify-center flex-col cursor-pointer">
                <a href={undefined} className={"text-white flex justify-center"} tabIndex={0}>
                    <div className="btn-layout rounded flex justify-center flex-col">
                        <div className="flex text-4xl justify-normal flex-col">+</div>
                    </div>
                    <div className="flex justify-center text-xl ml-3.5 flex-col">Join Class Now</div>
                </a>
            </div>

            <div className="flex justify-center bg-gray-950">
                <img onClick={toggleShowMenu} className="menu-button self-end" src={MenuIcon} alt="Menu" role="button" aria-label="Menu"
                    tabIndex={0}/>

                {/*Menu for Mobile Users*/}
                {showMenu &&
                    <ul id="mobile-menu">
                    {Constants.NAVBAR_MENU_ITEMS.map((menuItem) => (
                        <li className="text-xl" key={menuItem}>
                            <a className="text-white cursor-pointer" href={"/"}> {menuItem}</a>
                        </li>
                    ))}
                    </ul>}
            </div>


        </nav>
    )
}
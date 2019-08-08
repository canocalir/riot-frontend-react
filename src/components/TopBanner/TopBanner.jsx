import React from 'react'
import './TopBanner.css'
import  Logo from './icon.png'

export default function TopBanner() {
    return (
        <div className="top-banner">
            <img 
            className="logo-icon" 
            src={Logo} 
            alt="icon"
            ></img>
        </div>
    )
}

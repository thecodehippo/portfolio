import React from 'react'
import HeroImage from '../assets/images/Hero.png';

export const Home = () => {

    return (
        <div className="homepage">
            <div className="intro-title">
                Code Hippo
            </div>
            <div className="intro-text">
                Hello, I'm code hippo, welcome to my playground.  I've put a few projects on here that I've been messing about with, feel free to take a look.
            </div>
            <img className="hero-image" src={HeroImage} alt="heroimage" />
        </div>    
    )

}
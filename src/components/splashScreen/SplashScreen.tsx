import React from 'react'
import homHero from "../../images/homeHero.png"
import ButtonInput from '../Button/ButtonInput';
import "./SplashScreen.scss"

const SplashScreen = () => {
  return (
    <div className='SplashScreen-page'>

    <div className="SplashScreen-hero-main">
        <div className="SplashScreen-hero-img">
            <img src={homHero} alt="hero-img" />
        </div>

        <div className='hero-info'>
            <h2>MBooking hello!</h2>
            <p>Enjoy your favourite movies</p>
        </div>
    </div>
    <div className='SplashScreen-btn-container'>
        <div className='SplashScreen-btn-info'>
            <ButtonInput title='Sign in' className='sign-in-btn' onClick={() => { }} isLoading={false} />
            <ButtonInput title='Sign up' className='sign-up-btn' onClick={() => { }} isLoading={false} />
        </div>
        <div className='p-info'>
        <p>By sign in  or sign up agree to our Terms of Service </p>
           <p> and  Privacy Policy</p>
           </div>
    </div>
</div>
  )
}

export default SplashScreen

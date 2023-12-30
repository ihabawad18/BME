import React from 'react'
import Navbar from './navbar'
import './common.css';
import Footer from './Footer';
const Layout2 = ({children}) => {
    return (
        <div className='boss'>
            <div className='home-section1'>
                <Navbar/>
                <div className='center-intro'>
                    <h1>YOUR GATEWAY</h1>
                    <h1>TO SEAMLESS</h1>
                    <h1>EXPANSION</h1>
                    <button>WORK WITH US!</button>
                </div>
            </div>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout2
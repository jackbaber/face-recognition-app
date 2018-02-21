import React from 'react';
import Tilt from 'react-tilt';
import appLogo from './appLogo.png';
import './Logo.css';

const Logo = () => (
    <div className="ma4 mt0">
        <Tilt className="Tilt br-100 shadow-2" options={{ max : 55 }} style={{ height: 120, width: 120 }} >
            <div className="Tilt-inner pa3">
                <img style={{width: 70, padding: "10px"}} alt="logo" src={appLogo}/>
            </div>
        </Tilt>
   </div>
)

export default Logo;
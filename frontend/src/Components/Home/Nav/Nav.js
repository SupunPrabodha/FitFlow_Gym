import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div>
        <ul className='home-ul'>
            <li className='home-li'>
                <Link to="/mainhome" className='active home'>
                    <h1>Home</h1>
                </Link>
            </li>

            <li className='home-li'>
            <Link to="/mainhome" className='active home'>
                <h1>Feedback</h1>
                </Link>
            </li>

            <li className='home-li'>
            <Link to="/mainhome" className='active home'>
                <h1>About Us</h1>
                </Link>
            </li>

            <li className='home-li'>
            <Link to="/mainhome" className='active home'>
                <h1>Contact Us</h1>
                </Link>
            </li>

            <li className='home-li'>
            <Link to="/mainhome" className='active home'>
                <h1>Appointment</h1>
                </Link>
            </li>
        </ul>
    </div>
  );
}

export default Nav;

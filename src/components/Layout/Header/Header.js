import React from 'react';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {connect} from 'react-redux';
import { ReactComponent as Rects } from '../../../assets/images/rects.svg';

import './Header.scss';


const Header = () => {
    const handleLogOut = () => {

    };
    return (
        <div className='app-header'>
            <header className='app-header__headings'>

                <div>
                    <Link to="/"><Rects /></Link>
                    <h1 className='app-header__headings-item'>
                        Prototype Builder
                    </h1>
                </div>
                <NavDropdown title={
                    <div>
                        <img
                            src='https://i.stack.imgur.com/l60Hf.png'
                            alt='user pic' className='user-avatar' />
                    </div>
                } id='basic-nav-dropdown'>

                    <NavDropdown.Item onclick={handleLogOut}  >
                        Log out
                    </NavDropdown.Item>
                </NavDropdown>
            </header>
        </div>
    );
};


const ConnectedHeader = connect()(Header);

export default ConnectedHeader;

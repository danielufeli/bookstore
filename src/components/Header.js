import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FaUser } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const links = [
    {
      id: uuidv4(),
      path: '/',
      text: 'BOOKS',
    },
    {
      id: uuidv4(),
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];
  return (
    <>
      <div className="header-container">
        <div className="title">
          <h1 className="logo">Bookstore CMS</h1>
        </div>
        <nav>
          <ul>
            {
              links.map((link) => (
                <li key={link.id} className="list">
                  <NavLink
                    className="text"
                    to={link.path}
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </nav>
        <div className="oval">
          <FaUser className="user-icon" />
        </div>
      </div>
    </>
  );
};

export default Header;

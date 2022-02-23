import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import styles from './Header.module.css';

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
      <div data-testid="navbar">
        <div className="title">
          <h1 className={styles.logo}>Bookstore CMS</h1>
        </div>
        <nav>
          <ul>
            {
                            links.map((link) => (
                              <li key={link.id}>
                                <NavLink
                                  to={link.path}
                                >
                                  {link.text}
                                </NavLink>
                              </li>
                            ))
                        }
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;

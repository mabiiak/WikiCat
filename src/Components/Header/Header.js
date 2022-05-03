import React from 'react';
import { HeaderStyle } from '../../Style/Header';
import { Link } from 'react-router-dom';

export default function Header () {
  return (
    <HeaderStyle>
      <h2>WikiCat</h2>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/allcats'>See All</Link>
        <p>Test breed</p>
      </nav>
    </HeaderStyle>
  )
}

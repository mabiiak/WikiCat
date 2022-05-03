import React from 'react';
import { HeaderStyle } from '../../Style/Header';
import { Link } from 'react-router-dom';

export default function Header () {
  return (
    <HeaderStyle>
      <Link className='title' to='/'>WikiCat</Link>
      <nav>
        <Link to='/allcats'>See All</Link>
        <p>Test Breed</p>
      </nav>
    </HeaderStyle>
  )
}

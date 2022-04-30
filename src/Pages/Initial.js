import React from 'react';
import Header from '../Components/Header/Header';
import RandomCat from '../Components/Random/RandomCat';

export default function Initial () {
  return (
    <div>
      <Header />
      <button>Random</button>
      <RandomCat />
    </div>
  )
}

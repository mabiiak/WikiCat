import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import allCats from '../Services/FecthCats';

export const Context = createContext();

export default function Provider({ children }) {
  const [totalCats, setTotalCats] = useState([]);

  const returnCat = async () => {
    const cats = await allCats()
    setTotalCats(cats);
  }

  const states = {
    totalCats, setTotalCats, returnCat
  };

  return (
    <Context.Provider value={states}>
      {children}
    </Context.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.string.isRequired,
};


import React, { useEffect, useState } from 'react';
import test from '../Services/FecthCats';

export default function AllCats () {
  const [totalCats, setTotalCats] = useState();

  useEffect(() => {
    const returnCat = async () => {
      const cats = await test()
      setTotalCats(cats) 
    }

    returnCat();
  }, [])

  return (
    <div>
      <p>Raça</p>
      <p>Origem</p>
      <p>Temperamento</p>
      <p>img</p>
      { console.log(totalCats)}
    </div>
  );
}

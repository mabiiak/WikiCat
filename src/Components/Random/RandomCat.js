import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../Context/Provider';
import { Card } from '../../Style/Card';
// import notFound from '../../images/notFound.jpg';

export default function RandomCat () {
  const { totalCats, returnCat } = useContext(Context);

  const [number, setNumber] = useState(0);

  // PROBLEMAS NO RENDERIZAR ao recarregar a pagina

  useEffect(() => {
    const random = Math.floor(Math.random() * 68 + 1);
    setNumber(random);
    async () => {
      await returnCat();
    }
    // console.log(totalCats);
  }, []);

  const renderRamdom = () => {
    const random = Math.floor(Math.random() * 68 + 1);
    setNumber(random);
  };

  const result = totalCats[number];
  
  return (
    <div>
      {/* { console.log('n', number) } */}
      { console.log(totalCats) }
      { console.log(result)}

      <p>{ number }</p>
      {/* <p> { result.name } </p> */}

     <Card>
        {/* <p> { totalCats[number].name } </p>
        <p>Origin: { totalCats[number].origin }</p>
        <p>{ totalCats[number].description }</p>
        <p>{ totalCats[number].temperament }</p>
        <img src={ !totalCats[number].image ? notFound : totalCats[number].image.url } /> */}
      </Card>
      {/* // problema para pegar o valor especifico */}

    <button
      onClick={ () => renderRamdom() }
    >
      Random
    </button>

    </div>
  )
}

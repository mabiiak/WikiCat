import React, { useEffect, useState } from 'react';
import { Card } from '../../Style/Card';
import notFound from '../../images/notFound.jpg';
import random from '../../Services/FetchRandom';

export default function RandomCat () {
  const [oneCat, setOneCat] = useState({});
  const [number, setNumber] = useState(0);

  const gerateNewCat = async () => {
    const one = await random(number);
    setOneCat(one)
  }

  useEffect(() => {
    const gera = Math.floor(Math.random() * 68 + 1);
    setNumber(gera);

    gerateNewCat();
  }, []);

  const renderRamdom = () => {
    const random = Math.floor(Math.random() * 68 + 1);
    setNumber(random);

    gerateNewCat();
  };

  const { name, origin, description, temperament, image } = oneCat;
  
  return (
    <div>
      <Card>
        <div>
          <h3> { name } </h3>
          <p>Origin: { origin }</p>
        </div>
        <p>{ description }</p>
        <p>{ temperament }</p>
        <img src={ !image ? notFound : image.url } />
      </Card>

      <button onClick={ () => renderRamdom() }>
        Random
      </button>

    </div>
  )
}

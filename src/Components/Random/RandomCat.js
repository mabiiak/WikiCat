import React, { useEffect, useState } from 'react';
import { Card } from '../../Style/Card';
import notFound from '../../images/notFound.jpg';
import random from '../../Services/FetchRandom';

export default function RandomCat () {
  const [oneCat, setOneCat] = useState({});

  const gerateNewCat = async () => {
    const one = await random();
    setOneCat(one)
  }

  useEffect(() => {
    gerateNewCat();
  }, []);
  
  return (
    <div>
      <Card>
        <div>
          <h3> { oneCat.name } </h3>
          <p>Origin: { oneCat.origin }</p>
        </div>
        <p>{ oneCat.description }</p>
        <p>{ oneCat.temperament }</p>
        <img src={ !oneCat.image ? notFound : oneCat.image.url } />
      </Card>

      <button onClick={ () => gerateNewCat() }>
        Random
      </button>

    </div>
  )
}

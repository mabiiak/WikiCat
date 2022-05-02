import React, { useContext, useEffect } from 'react';
import { Context } from '../Context/Provider';
import { Card } from '../Style/Card';
import notFound from '../images/notFound.jpg';

export default function AllCats () {
  const { totalCats, returnCat } = useContext(Context);

  useEffect(() => { returnCat() }, []);

  return (
    // card resumido imagem e nome da raça ---> pop up completo
    <div>
    { totalCats.map((cat) => {
        return(
          <Card key={cat.id}>
            <p> { cat.name } </p>
            <p>Origin: { cat.origin }</p>
            <p>{ cat.description }</p>
            <p>{ cat.temperament }</p>
            <img src={ !cat.image ? notFound : cat.image.url } />
          </Card>
        )
      })
    }
    </div>
  );
}

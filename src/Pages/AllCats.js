import React, { useEffect, useState } from 'react';
import allCats from '../Services/FecthCats';
import { Card } from '../Style/Card';
import notFountCat from '../images/notFound.jpg';

export default function AllCats () {
  const [totalCats, setTotalCats] = useState([]);

  useEffect(() => {
    const returnCat = async () => {
      const cats = await allCats()
      setTotalCats(cats);
    }

    returnCat();
  }, []);

  return (
    <div>
    { totalCats.map((cat) => {
        return(
          <Card key={cat.id}>
            <p> { cat.name } </p>
            <p>{ cat.origin }</p>
            <p>{ cat.description }</p>
            <p>{ cat.temperament }</p>
            <img src={ !cat.image ? notFountCat : cat.image.url } />
          </Card>
        )
      })
    }
    </div>
  );
}

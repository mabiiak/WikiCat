import React, { useContext, useEffect } from 'react';
import { Context } from '../Context/Provider';
import { Card } from '../Style/Card';
import notFound from '../images/notFound.jpg';
import Header from '../Components/Header/Header';
import { Grid } from '../Style/GridCats';

export default function AllCats () {
  const { totalCats, returnCat } = useContext(Context);

  useEffect(() => { returnCat() }, []);

  return (
    // card resumido imagem e nome da raça ---> pop up completo
    <div>
      <Header />
      <Grid>
        { totalCats.map((cat) => {
            return(
              <Card key={cat.id}>
                <div>
                  <h3> { cat.name } </h3>
                  <p>Origin: { cat.origin }</p>
                </div>
                <p>{ cat.description }</p>
                <p>Temperament: { cat.temperament }</p>
                <img src={ !cat.image ? notFound : cat.image.url } />
              </Card>
            )
          })
        }
      </Grid>
    </div>
  );
}

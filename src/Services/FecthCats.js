const URL = 'https://api.thecatapi.com/v1/breeds'

const fetchAllCats = async () => {
  const fetchCat = await fetch(URL);
  const result = fetchCat.json();
  console.log(result);
  return result;
}

export const imageCats = async (id) => {
  const URL_IMAGE = `https://api.thecatapi.com/v1/images/search?breed_id=${id}`

  const fetchCat = await fetch(URL_IMAGE);
  const result = fetchCat.json();
  return result;
}

export default fetchAllCats;

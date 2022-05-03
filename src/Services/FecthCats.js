const URL = 'https://api.thecatapi.com/v1/breeds'

const fetchAllCats = async () => {
  const fetchCat = await fetch(URL);
  const result = fetchCat.json();
  return result;
}

export default fetchAllCats;

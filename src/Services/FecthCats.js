const URL = 'https://api.thecatapi.com/v1/breeds'

const allCats = async () => {
  const fetchCat = await fetch(URL);
  const result = fetchCat.json();
  return result;
}

export default allCats;

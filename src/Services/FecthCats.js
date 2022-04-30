const URL = 'https://api.thecatapi.com/v1/images/search?breed_id=beng'

const test = async () => {
  const fetchTest = await fetch(URL);
  const result = fetchTest.json();
  return result;
}

export default test;

import fetchAllCats from "./FecthCats";

const random = async () => {
  const allCats = await fetchAllCats();

  const number = Math.floor(Math.random() * 68 + 1);
  const search = allCats.find((_item, index) => number === index);
  console.log(search);
  return search;
}

export default random;
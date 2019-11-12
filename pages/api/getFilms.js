import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_KEY, API_URL } = publicRuntimeConfig;

const getFilms = async (req, res) => {
  const { searchTerm } = req.query;
  const URL = `${API_URL}/?apikey=${API_KEY}&t=${searchTerm}`;
  const data = await fetch(URL)
    .then((response) => response.json())
    .catch((err) => console.log('[getFilms]', err));
  return res.json(data);
};

export { getFilms as default };

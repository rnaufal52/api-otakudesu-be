import axiosInstance from '@/lib/axiosInstance';
import scrapeAnimeByGenre from '@/lib/scrapeAnimeByGenre';

const { BASEURL } = process.env;
const animeByGenre = async (genre: string, page: number | string = 1) => {
  const response = await axiosInstance.get(`${BASEURL}/genres/${genre}/page/${page}`);
  const result = scrapeAnimeByGenre(response.data);

  return result;
};

export default animeByGenre;

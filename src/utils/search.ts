import axiosInstance from '@/lib/axiosInstance';
import scrapeSearchResult from '@/lib/scrapeSearchResult';
import { searchResultAnime } from '@/types/types';

const { BASEURL } = process.env;
const search = async (keyword: string): Promise<searchResultAnime[]> => {
  const response = await axiosInstance.get(`${BASEURL}/?s=${keyword}&post_type=anime`);
  const html = response.data;
  const searchResult = scrapeSearchResult(html);
  return searchResult;
};

export default search;

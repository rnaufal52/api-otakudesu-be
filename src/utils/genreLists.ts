import axiosInstance from '@/lib/axiosInstance';
import scrapeGenreLists from '../lib/scrapeGenreLists';
import type { genre as genreType } from '../types/types';

const { BASEURL } = process.env;
const genreLists = async (): Promise<genreType[]> => {
  const response = await axiosInstance.get(`${BASEURL}/genre-list`);
  const result = scrapeGenreLists(response.data);

  return result;
};

export default genreLists;

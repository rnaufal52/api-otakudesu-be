import axiosInstance from '@/lib/axiosInstance';
import scrapeSingleAnime from '@/lib/scrapeSingleAnime';
import type { anime as animeType } from '@/types/types';

const { BASEURL } = process.env;
const anime = async (slug: string): Promise<animeType | undefined> => {
  const { data } = await axiosInstance.get(`${BASEURL}/anime/${slug}`);
  const result = scrapeSingleAnime(data);

  return result;
};

export default anime;